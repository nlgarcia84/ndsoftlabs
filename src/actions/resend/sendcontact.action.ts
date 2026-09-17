import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { Resend } from "resend";
import { sendEmail } from "./sendemail.action";

// Procesa el formulario y notifica a la empresa y al cliente.
export const sendContact = defineAction({
  // Permite recibir directamente el FormData del formulario HTML.
  accept: "form",
  // Valida los datos antes de contactar con Resend.
  input: z.object({
    name: z.string(),
    email: z.email(),
    message: z.string(),
    sendMeInfo: z.boolean().optional(),
    // La aceptación de términos es obligatoria para enviar el formulario.
    acceptTerms: z.boolean().refine((value) => value, {
      message: "Debes aceptar los términos y condiciones.",
    }),
  }),
  handler: async ({ name, email, message, sendMeInfo, acceptTerms }) => {
    // La API key solo se utiliza en el servidor y nunca se expone al cliente.
    const apiKey = import.meta.env.RESEND_API_KEY;
    const resend = new Resend(apiKey);
    // Envía a la empresa los datos y preferencias del contacto.
    const { error } = await resend.emails.send({
      from: import.meta.env.CONTACT_FROM_EMAIL,
      to: import.meta.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Nuevo mensaje de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}\n\n¿Quieres recibir información?: ${sendMeInfo}\n¿Aceptas los términos?: ${acceptTerms}`,
    });
    if (error) {
      // Devuelve un mensaje controlado sin exponer detalles de Resend.
      throw new ActionError({
        code: "INTERNAL_SERVER_ERROR",
        message: "No se pudo enviar el mensaje.",
      });
    }

    // Solo después del envío interno se manda la confirmación al cliente.
    await sendEmail(name, email);

    return { success: true };
  },
});

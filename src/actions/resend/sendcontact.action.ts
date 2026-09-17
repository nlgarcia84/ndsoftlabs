import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { Resend } from "resend";
import { sendEmail } from "./sendemail.action";

export const sendContact = defineAction({
  accept: "form",
  input: z.object({
    name: z.string(),
    email: z.email(),
    message: z.string(),
    sendMeInfo: z.boolean().optional(),
    acceptTerms: z.boolean().refine((value) => value, {
      message: "Debes aceptar los términos y condiciones.",
    }),
  }),
  handler: async ({ name, email, message, sendMeInfo, acceptTerms }) => {
    const apiKey = import.meta.env.RESEND_API_KEY;
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: import.meta.env.CONTACT_FROM_EMAIL,
      to: import.meta.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Nuevo mensaje de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}\n\n¿Quieres recibir información?: ${sendMeInfo}\n¿Aceptas los términos?: ${acceptTerms}`,
    });
    if (error) {
      throw new ActionError({
        code: "INTERNAL_SERVER_ERROR",
        message: "No se pudo enviar el mensaje.",
      });
    }

    await sendEmail(name, email);

    return { success: true };
  },
});

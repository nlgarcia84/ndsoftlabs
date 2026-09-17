import { ActionError } from "astro:actions";
import { Resend } from "resend";

// Envía al cliente la confirmación de recepción.
export const sendEmail = async (name: string, email: string) => {
  // Crea el cliente de Resend con la credencial privada del servidor.
  const resend = new Resend(import.meta.env.RESEND_API_KEY);
  // Envía una respuesta automática al correo indicado por el usuario.
  const { error } = await resend.emails.send({
    from: import.meta.env.CONTACT_FROM_EMAIL,
    to: email,
    subject: "Hemos recibido su mensaje",
    text: `Hola Sr./Sra. ${name},\n\nHemos recibido tu mensaje y le responderemos lo antes posible.\n\nUn saludo,\nNDSoftLabs`,
  });

  if (error) {
    // Convierte el error del proveedor en un error seguro para la aplicación.
    throw new ActionError({
      code: "INTERNAL_SERVER_ERROR",
      message: "No se pudo enviar el correo de confirmación.",
    });
  }
};

import { ActionError } from "astro:actions";
import { Resend } from "resend";

export const sendEmail = async (name: string, email: string) => {
  const resend = new Resend(import.meta.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: import.meta.env.CONTACT_FROM_EMAIL,
    to: email,
    subject: "Hemos recibido tu mensaje",
    text: `Hola ${name},\n\nHemos recibido tu mensaje y te responderemos lo antes posible.\n\nUn saludo,\nNDSoftLabs`,
  });

  if (error) {
    throw new ActionError({
      code: "INTERNAL_SERVER_ERROR",
      message: "No se pudo enviar el correo de confirmación.",
    });
  }
};

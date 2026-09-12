import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { Resend } from "resend";

export const server = {
  // action declarations
  sendContact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      message: z
        .string()
        .min(10, "El mensaje debe tener al menos 10 caracteres"),
    }),
    handler: async ({ name, email, message }) => {
      const apiKey = import.meta.env.RESEND_API_KEY ?? process.env.RESEND_API_KEY;
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: import.meta.env.CONTACT_FROM_EMAIL ?? process.env.CONTACT_FROM_EMAIL,
        to: import.meta.env.CONTACT_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL,
        replyTo: email,
        subject: `Nuevo mensaje de ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
      });
      if (error) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "No se pudo enviar el mensaje.",
        });
      }
      return { success: true };
    },
  }),
};

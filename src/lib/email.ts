import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getCloudflareEnv } from "./cloudflare-env";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const env = getCloudflareEnv();
    if (!env || !env.EMAIL) {
      console.error("Cloudflare EMAIL binding is not configured.");
      throw new Error("Email service is currently unavailable. Please try again later.");
    }

    try {
      const response = await env.EMAIL.send({
        to: "malvin@chitswa.com",
        from: "contact@chitswa.com",
        subject: `New Message from ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #eaeaea; border-radius: 12px; background-color: #ffffff;">
            <h2 style="font-weight: 400; color: #111; font-size: 20px; margin-bottom: 24px;">New Portfolio Message</h2>
            <div style="margin-bottom: 16px;">
              <strong style="color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">Sender</strong>
              <span style="color: #111; font-size: 15px;">${data.name} (&lt;${data.email}&gt;)</span>
            </div>
            <div style="margin-bottom: 24px;">
              <strong style="color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">Message</strong>
              <div style="background-color: #f9f9f9; padding: 18px; border-radius: 8px; border: 1px solid #f0f0f0; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #333;">${data.message}</div>
            </div>
            <div style="font-size: 11px; color: #999; border-t: 1px solid #eee; pt: 16px; margin-top: 30px;">
              Sent via chitswa.com Worker Email Sending binding.
            </div>
          </div>
        `,
      });

      return { success: true, messageId: response?.messageId };
    } catch (error: any) {
      console.error("Failed to send email via Cloudflare Email Routing binding:", error);
      throw new Error(error?.message || "Failed to send email. Please try again later.");
    }
  });

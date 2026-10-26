import { Resend } from "resend";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { success: false, message: "Email service is not configured." },
      { status: 500 },
    );
  }

  try {
    const body: unknown = await request.json();

    if (
      typeof body !== "object" ||
      body === null ||
      !("name" in body) ||
      !("email" in body) ||
      !("message" in body)
    ) {
      return Response.json(
        { success: false, message: "Invalid request data." },
        { status: 400 },
      );
    }

    const { name, email, message } = body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return Response.json(
        { success: false, message: "All fields must be text." },
        { status: 400 },
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return Response.json(
        { success: false, message: "All fields are required." },
        { status: 400 },
      );
    }

    if (
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanMessage.length > 5000
    ) {
      return Response.json(
        { success: false, message: "One or more fields are too long." },
        { status: 400 },
      );
    }

    if (!EMAIL_PATTERN.test(cleanEmail)) {
      return Response.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "SpecialSpace <onboarding@resend.dev>",
      to: ["adiomubarakadebukola2026@gmail.com"],
      replyTo: cleanEmail,
      subject: `New portfolio message from ${cleanName}`,
      text: [
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        "",
        "Message:",
        cleanMessage,
      ].join("\n"),
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(cleanMessage).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { success: false, message: "Failed to send message." },
        { status: 500 },
      );
    }

    return Response.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { success: false, message: "Something went wrong." },
      { status: 500 },
    );
  }
}

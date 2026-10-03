import { Resend } from "resend";



export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        { message: "Email service is not configured." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

     try {
       const data = await request.json();

       const { name, email, message } = data;

       // Validate required fields
       if (!name || !email || !message) {
         return Response.json(
           { message: "Name, email, and message are required." },
           { status: 400 },
         );
       }

       // Basic email validation
       if (!email.includes("@")) {
         return Response.json(
           { message: "Please provide a valid email address." },
           { status: 400 },
         );
       }
       const { data: emailData, error } = await resend.emails.send({
         from: "SpecialSpace <onboarding@resend.dev>",
         to: ["adiomubarakadebukola2026@gmail.com"],
         subject: `New message from ${name}`,
         html: `
    <h2>New Contact Message</h2>

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>

    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
       });

       if (error) {
         console.error("Resend error:", error);

         return Response.json(
           { message: "Failed to send message." },
           { status: 500 },
         );
       }

       return Response.json(
         { message: "Message received successfully." },
         { status: 200 },
       );
     } catch (error) {
       console.error("Contact API error:", error);

       return Response.json(
         { message: "Something went wrong." },
         { status: 500 },
       );
     }
  
  }
  
 
  


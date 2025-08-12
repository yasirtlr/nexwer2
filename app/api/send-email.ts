import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Dev mode sender
      to: 'yasirtlr@gmail.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${body.firstName} ${body.lastName}
        Email: ${body.email}
        Phone: ${body.phone}
        Message: ${body.message}
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error });
  }
}

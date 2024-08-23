import { EmailTemplate } from '@/app/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const myEmail: string | undefined = process.env.NEXT_PUBLIC_FROM_EMAIL;

export async function POST(req: any, res: any) {
  if (myEmail === undefined) return;

  const { email, subject, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: email,
      to: [myEmail],
      subject: subject,
      react: EmailTemplate({ subject: subject, message: message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

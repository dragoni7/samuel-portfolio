import { EmailTemplate } from '@/app/features/Contact/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const recieverEmail = process.env.NEXT_PUBLIC_RECIEVER_EMAIL;
const senderEmail = process.env.NEXT_PUBLIC_SENDER_EMAIL;

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { email, subject, message } = body;

  if (!message || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: senderEmail as string,
      to: recieverEmail as string,
      subject: subject,
      react: EmailTemplate({ email: email, message: message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

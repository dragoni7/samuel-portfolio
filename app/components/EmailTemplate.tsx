import * as React from 'react';

interface EmailTemplateProps {
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ subject, message }) => (
  <>
    <h1>{subject}</h1>
    <p>Thank you for contacting us</p>
    <p>New message submitted: </p>
    <p>{message}</p>
  </>
);

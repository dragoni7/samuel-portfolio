import { Body, Container, Head, Hr, Html, Preview, Text } from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
  email: string;
  message: string;
}

const containerStyle = {
  margin: '0 auto',
  padding: '0 1.25rem',
  marginTop: '1.25rem',
  marginBottom: '3rem',
};

const hrStyle = {
  marginTop: '0.625rem',
  marginBottom: '1.875rem',
  border: '1px solid #ccc',
};

const textStyle = {
  base: {
    fontSize: '1rem',
    marginTop: '0',
    marginBottom: '0.625rem',
  },
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ email, message }) => (
  <Html>
    <Head />
    <Preview>Portfolio Message</Preview>
    <Body style={{ fontFamily: 'sans-serif', background: '#fff' }}>
      <Container style={containerStyle}>
        <Hr style={hrStyle} />

        <Text style={textStyle.base}>
          From: <i>{email}</i>,
        </Text>
        <Text style={textStyle.base}>{message}</Text>
        <Text style={textStyle.base}>
          Sent via Contact Form @{' '}
          <a rel="noopener" href="url" target="_blank">
            domain
          </a>
          <br />
        </Text>
        <Hr style={hrStyle} />
      </Container>
    </Body>
  </Html>
);

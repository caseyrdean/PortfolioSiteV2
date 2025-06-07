"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    console.log('Starting email send process...');
    console.log('API Key configured:', !!process.env.RESEND_API_KEY);
    
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "casey.r.dean1990@gmail.com",
      subject: "Inquiry from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
    
    console.log('Email sent successfully');
  } catch (error: unknown) {
    console.error('Email sending failed:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

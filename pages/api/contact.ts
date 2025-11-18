import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

type ResponseData = {
  message: string;
  error?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (for production, consider using Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);
  
  // Clean up old entries
  if (limit && now > limit.resetTime) {
    rateLimitMap.delete(ip);
  }
  
  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 }); // 1 hour
    return true;
  }
  
  if (limit.count >= 3) { // Max 3 emails per hour per IP
    return false;
  }
  
  limit.count++;
  return true;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    // Rate limiting check
    const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || 
               req.socket.remoteAddress || 
               'unknown';
    
    if (!checkRateLimit(ip)) {
      return res.status(429).json({ 
        message: "Too many requests",
        error: "You've sent too many messages. Please wait an hour before trying again." 
      });
    }

    const { name, email, company, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        message: "Missing required fields",
        error: "Please provide name, email, and message" 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: "Invalid email format",
        error: "Please provide a valid email address" 
      });
    }

    // Validate message length
    if (message.length < 10) {
      return res.status(400).json({ 
        message: "Message too short",
        error: "Please provide a more detailed message (at least 10 characters)" 
      });
    }

    if (message.length > 5000) {
      return res.status(400).json({ 
        message: "Message too long",
        error: "Please keep your message under 5000 characters" 
      });
    }

    try {
      // Send notification email to you
      const { error: notificationError } = await resend.emails.send({
        from: 'Contact Form <noreply@jose.technology>',
        to: ['contact@jose.technology'],
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00A8E8; border-bottom: 2px solid #00A8E8; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              ${company ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>` : ''}
            </div>
            
            <div style="background-color: #f8fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
              <p>This email was sent from your contact form at jose.technology</p>
              <p>Reply directly to this email to respond to ${email}</p>
            </div>
          </div>
        `,
      });

      if (notificationError) {
        console.error('Resend error (notification):', notificationError);
        return res.status(500).json({ 
          message: "Failed to send email",
          error: "An error occurred while sending your message. Please try again." 
        });
      }

      // Send auto-reply confirmation email to the user
      const { error: autoReplyError } = await resend.emails.send({
        from: 'Jose from Jose Tech Solutions <noreply@jose.technology>',
        to: [email],
        subject: "Thanks for reaching out! I've received your message",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #00A8E8 0%, #0096D1 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Message Received!</h1>
            </div>
            
            <div style="padding: 30px; background-color: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
              <p style="font-size: 16px; color: #2D2D2D; margin-bottom: 20px;">Hi ${name},</p>
              
              <p style="font-size: 16px; color: #2D2D2D; line-height: 1.6; margin-bottom: 20px;">
                Thank you for contacting me! I've received your message and will get back to you within 24 hours.
              </p>
              
              <div style="background-color: #f8fafb; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #00A8E8;">
                <p style="margin: 0 0 10px 0; font-weight: bold; color: #2D2D2D;">Your message:</p>
                <p style="margin: 0; color: #6B7280; white-space: pre-wrap;">${message}</p>
              </div>
              
              <p style="font-size: 16px; color: #2D2D2D; line-height: 1.6; margin-bottom: 20px;">
                In the meantime, feel free to:
              </p>
              
              <ul style="color: #6B7280; line-height: 1.8; margin-bottom: 25px;">
                <li><a href="https://jose.technology/portfolio" style="color: #00A8E8; text-decoration: none;">Check out my portfolio</a></li>
                <li><a href="https://jose.technology/services" style="color: #00A8E8; text-decoration: none;">Learn more about my services</a></li>
                <li><a href="https://calendly.com/jose-technology-solutions/30min" style="color: #00A8E8; text-decoration: none;">Schedule a call directly</a></li>
              </ul>
              
              <p style="font-size: 16px; color: #2D2D2D; margin-bottom: 5px;">
                Best regards,
              </p>
              <p style="font-size: 16px; color: #00A8E8; font-weight: bold; margin-top: 0;">
                Jose
              </p>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
                <p style="color: #6B7280; font-size: 14px; margin: 5px 0;">
                  Jose Tech Solutions LLC
                </p>
                <p style="color: #6B7280; font-size: 14px; margin: 5px 0;">
                  <a href="https://jose.technology" style="color: #00A8E8; text-decoration: none;">jose.technology</a> | 
                  <a href="mailto:contact@jose.technology" style="color: #00A8E8; text-decoration: none;">contact@jose.technology</a>
                </p>
              </div>
            </div>
          </div>
        `,
      });

      if (autoReplyError) {
        console.error('Resend error (auto-reply):', autoReplyError);
        // Don't fail the request if auto-reply fails, just log it
      }

      console.log('Emails sent successfully');
      
      // Return success response
      res.status(200).json({ 
        message: "Message sent successfully! Check your email for a confirmation." 
      });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ 
        message: "Server error",
        error: "An unexpected error occurred. Please try again later." 
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ 
      message: `Method ${req.method} not allowed`,
      error: "Only POST requests are accepted"
    });
  }
}

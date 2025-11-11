import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const { name, email, company, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        message: "Missing required fields",
        error: "Please provide name, email, and message" 
      });
    }
    
    // Log the form submission (in production, this would send an email or save to a database)
    console.log("Contact form submission:", { name, email, company, message });
    
    // Return success response
    res.status(200).json({ message: "Form submission successful!" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ 
      message: `Method ${req.method} not allowed`,
      error: "Only POST requests are accepted"
    });
  }
}

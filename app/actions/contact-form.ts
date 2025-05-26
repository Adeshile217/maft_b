"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  service: z.string().min(1, { message: "Please select a service." }),
  currency: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // In a real implementation, you would use a service like SendGrid, Nodemailer, or Resend
    // to send the email. For now, we'll simulate a successful submission.

    // Example with a hypothetical email sending function:
    // await sendEmail({
    //   to: "service@maft-project.com",
    //   subject: `New Quote Request: ${validatedData.service}`,
    //   html: `
    //     <h1>New Quote Request</h1>
    //     <p><strong>Name:</strong> ${validatedData.name}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Service:</strong> ${validatedData.service}</p>
    //     <p><strong>Budget:</strong> ${validatedData.currency} ${validatedData.budget || 'Not specified'}</p>
    //     <p><strong>Message:</strong> ${validatedData.message}</p>
    //   `,
    // })

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true, message: "Your message has been sent successfully. We'll get back to you soon!" }
  } catch (error) {
    console.error("Form submission error:", error)

    if (error instanceof z.ZodError) {
      // Return validation errors
      return {
        success: false,
        message: "Please check your form inputs.",
        errors: error.errors.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        })),
      }
    }

    return { success: false, message: "There was an error sending your message. Please try again later." }
  }
}

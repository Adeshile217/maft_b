"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, Loader2, MessageSquareQuote } from "lucide-react"
import { submitContactForm } from "../actions/contact-form"

type FormState = {
  name: string
  email: string
  service: string
  currency: string
  budget: string
  message: string
}

type FormStatus = {
  isSubmitting: boolean
  isSubmitted: boolean
  isError: boolean
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    service: "",
    currency: "QAR",
    budget: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<FormStatus>({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  })

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error for this field when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: "",
    })

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          isError: false,
          message: result.message,
        })

        // Reset form on success
        setFormData({
          name: "",
          email: "",
          service: "",
          currency: "QAR",
          budget: "",
          message: "",
        })
      } else {
        // Handle validation errors
        if (result.errors) {
          const errors: Record<string, string> = {}
          result.errors.forEach((err) => {
            const field = err.path
            errors[field] = err.message
          })
          setFieldErrors(errors)
        }

        setFormStatus({
          isSubmitting: false,
          isSubmitted: false,
          isError: true,
          message: result.message,
        })
      }
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "An unexpected error occurred. Please try again.",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Input
          placeholder="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={fieldErrors.name ? "border-red-500" : ""}
        />
        {fieldErrors.name && <p className="text-xs text-red-500 mt-1">{fieldErrors.name}</p>}
      </div>

      <div>
        <Input
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={fieldErrors.email ? "border-red-500" : ""}
        />
        {fieldErrors.email && <p className="text-xs text-red-500 mt-1">{fieldErrors.email}</p>}
      </div>

      <div className="relative">
        <select
          className={`flex h-10 w-full appearance-none rounded-md border ${
            fieldErrors.service ? "border-red-500" : "border-input"
          } bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
          value={formData.service}
          name="service"
          onChange={handleChange}
          required
          aria-label="Select Service of Interest"
        >
          <option value="" disabled>
            Select Service(s) of Interest
          </option>
          <option value="project-management">Project Management</option>
          <option value="application-engineering">Application Engineering</option>
          <option value="business-intelligence">Business Intelligence</option>
          <option value="erp-implementation">ERP System Implementation</option>
          <option value="enterprise-integration">Enterprise Integration</option>
          <option value="whatsapp-business">WhatsApp Business API</option>
          <option value="sms-marketing">SMS Marketing & Bulk SMS</option>
          <option value="web-development">Web Development</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="seo-services">SEO Services</option>
          <option value="multiple">Multiple Services</option>
        </select>
        <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50" />
        {fieldErrors.service && <p className="text-xs text-red-500 mt-1">{fieldErrors.service}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <select
            className="flex h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={formData.currency}
            name="currency"
            onChange={handleChange}
            aria-label="Select Currency"
          >
            <option value="QAR">QAR (Qatari Riyal)</option>
            <option value="USD">USD (US Dollar)</option>
            <option value="CAD">CAD (Canadian Dollar)</option>
            <option value="NGN">NGN (Nigerian Naira)</option>
            <option value="EUR">EUR (Euro)</option>
          </select>
          <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50" />
        </div>
        <Input
          placeholder="Budget Amount"
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          min="0"
          step="1"
        />
      </div>

      <div>
        <Textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className={`min-h-[80px] ${fieldErrors.message ? "border-red-500" : ""}`}
        />
        {fieldErrors.message && <p className="text-xs text-red-500 mt-1">{fieldErrors.message}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={formStatus.isSubmitting}>
        {formStatus.isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <MessageSquareQuote className="mr-2 h-4 w-4" />
            Request Quote
          </>
        )}
      </Button>

      {formStatus.isSubmitted && (
        <div className="p-3 bg-green-50 text-green-700 rounded-md text-sm">{formStatus.message}</div>
      )}

      {formStatus.isError && !Object.keys(fieldErrors).length && (
        <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">{formStatus.message}</div>
      )}
    </form>
  )
}

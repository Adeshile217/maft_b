"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, MessageCircle } from "lucide-react"

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = "97455032892" // +974 5503 2892 formatted for WhatsApp

  const openWhatsApp = (message?: string) => {
    const defaultMessage = message || "Hello! I'm interested in learning more about MAFT Technology services."
    const encodedMessage = encodeURIComponent(defaultMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const quickMessages = [
    "I need help with project management services",
    "I'm interested in WhatsApp Business API",
    "I want to know about your ERP solutions",
    "I need a quote for web development",
    "I want to discuss digital marketing services",
  ]

  return (
    <>
      {isOpen && (
        <Card className="fixed bottom-20 left-4 w-80 md:w-96 shadow-lg z-50 border-green-200">
          <CardHeader className="bg-green-500 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium flex items-center">
                <div className="bg-white rounded-full p-1 mr-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.346"
                      fill="#25D366"
                    />
                  </svg>
                </div>
                Chat with us on WhatsApp
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-white hover:bg-green-600"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-green-100 mt-1">We typically reply within minutes</p>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            <div className="text-sm text-gray-600 mb-3">Choose a quick message or start a custom chat:</div>

            <div className="space-y-2">
              {quickMessages.map((message, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full text-left justify-start h-auto p-3 text-xs hover:bg-green-50 hover:border-green-200"
                  onClick={() => openWhatsApp(message)}
                >
                  {message}
                </Button>
              ))}
            </div>

            <div className="pt-3 border-t">
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={() => openWhatsApp()}>
                <MessageCircle className="mr-2 h-4 w-4" />
                Start Custom Chat
              </Button>
            </div>

            <div className="text-xs text-gray-500 text-center">
              By clicking above, you agree to start a WhatsApp conversation with MAFT Technology
            </div>
          </CardContent>
        </Card>
      )}

      {/* WhatsApp Floating Button */}
      <Button
        className="fixed bottom-4 left-4 rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 shadow-lg z-50 p-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.346"
            fill="white"
          />
        </svg>
        <span className="sr-only">Chat on WhatsApp</span>
      </Button>
    </>
  )
}

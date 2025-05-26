"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send, X, Minimize2, Maximize2 } from "lucide-react"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

// Sample FAQ responses
const faqResponses: Record<string, string> = {
  services:
    "MAFT Technology offers a wide range of services including Project Management, Application Engineering, Business Intelligence, ERP Implementation, Enterprise Integration, WhatsApp Business API, SMS Marketing, Web Development, Digital Marketing, and SEO Services.",
  contact:
    "You can contact us at service@maft-project.com or call us at +974 55032892. You can also visit our office at Qatar Freezone Business Innovation Park.",
  whatsapp:
    "Our WhatsApp Business API service helps businesses connect with customers on their preferred messaging platform. It includes features like verified badge, template messages, interactive messages, and account management.",
  erp: "Our ERP System Implementation service includes ERP system selection, business process optimization, data migration, custom module development, user training, and post-implementation support.",
  pricing:
    "Our pricing varies based on the specific services and requirements. Please contact us for a customized quote.",
  location: "We are located at Qatar Freezone Business Innovation Park, Doha, Qatar.",
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! How can I help you today? Feel free to ask about our services, contact information, or anything else.",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Generate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 500)
  }

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase()

    // Check for keywords in the query
    for (const [keyword, response] of Object.entries(faqResponses)) {
      if (lowerQuery.includes(keyword)) {
        return response
      }
    }

    // Default response if no keywords match
    return "Thank you for your message. For specific information about our services or to request a quote, please contact us at service@maft-project.com or call +974 5503 2892."
  }

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <>
      {isOpen && (
        <Card
          className={`fixed bottom-20 right-4 w-80 md:w-96 shadow-lg z-50 transition-all duration-300 ${
            isMinimized ? "h-14" : "h-96"
          }`}
        >
          <CardHeader className="p-3 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" />
              MAFT Technology Assistant
            </CardTitle>
            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={toggleMinimize}>
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={toggleChat}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          {!isMinimized && (
            <>
              <CardContent className="p-3 overflow-y-auto h-[calc(100%-110px)]">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-3 py-2 ${
                          message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              <CardFooter className="p-3 border-t">
                <form onSubmit={handleSubmit} className="flex w-full gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={handleInputChange}
                    className="flex-1"
                  />
                  <Button type="submit" size="icon">
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                  </Button>
                </form>
              </CardFooter>
            </>
          )}
        </Card>
      )}
      <Button className="fixed bottom-4 right-4 rounded-full h-12 w-12 shadow-lg z-50" onClick={toggleChat}>
        <MessageSquare className="h-6 w-6" />
        <span className="sr-only">Chat with us</span>
      </Button>
    </>
  )
}

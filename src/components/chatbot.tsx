"use client"

import { useState } from "react"
import { Send, Bot, User } from "lucide-react"

interface Message {
    id: number
    text: string
    isUser: boolean
    timestamp: Date
}

export default function ChatBot() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hi! I'm your Austuverse assistant. How can I help you with studying, living, or working in Australia?",
            isUser: false,
            timestamp: new Date(),
        },
    ])
    const [inputText, setInputText] = useState("")
    const [isTyping, setIsTyping] = useState(false)

    const handleSendMessage = async () => {
        if (!inputText.trim()) return

        const userMessage: Message = {
            id: Date.now(),
            text: inputText,
            isUser: true,
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setInputText("")
        setIsTyping(true)

        // Simulate AI response
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: inputText }),
            })

            const data = await res.json()

            const botMessage: Message = {
                id: Date.now() + 1,
                text: data.text || 'Sorry, I could not respond.',
                isUser: false,
                timestamp: new Date(),
            }

            setMessages((prev) => [...prev, botMessage])
        } catch (error) {
            const errorMessage: Message = {
                id: Date.now() + 2,
                text: 'Oops! Something went wrong.',
                isUser: false,
                timestamp: new Date(),
            }
            setMessages((prev) => [...prev, errorMessage])
        }
        setIsTyping(false)
    }

    return (
        <div className="flex flex-col h-full">
            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex items-start space-x-2 ${message.isUser ? "flex-row-reverse space-x-reverse" : ""}`}
                    >
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.isUser ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                                }`}
                        >
                            {message.isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                        </div>
                        <div
                            className={`max-w-[80%] p-3 rounded-2xl ${message.isUser
                                ? "bg-blue-600 text-white rounded-br-md"
                                : "bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100"
                                }`}
                        >
                            <p className="text-sm">{message.text}</p>
                        </div>
                    </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                    <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                            <Bot className="w-4 h-4" />
                        </div>
                        <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div
                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.1s" }}
                                ></div>
                                <div
                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.2s" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        placeholder="Type your message..."
                        className="flex-1 p-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={!inputText.trim()}
                        className="w-10 h-10 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}

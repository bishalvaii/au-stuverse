"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import ChatBot from "./chatbot"

export default function ChatLauncher() {
    const [isOpen, setIsOpen] = useState(false)
    const [showTooltip, setShowTooltip] = useState(false)

    // Show tooltip after a delay when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTooltip(true)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    // Hide tooltip when chat is opened
    const handleOpenChat = () => {
        setIsOpen(true)
        setShowTooltip(false)
    }

    return (
        <>
            {/* Thinking Bubble Tooltip */}
            {showTooltip && !isOpen && (
                <div className="fixed bottom-24 right-6 z-40 animate-fade-in">
                    <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-4 max-w-[250px]">
                        <div className="text-gray-800 text-sm font-medium mb-1">Hey there! 👋</div>
                        <div className="text-gray-600 text-sm">How can we help you?</div>

                        {/* Speech bubble tail */}
                        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>

                        {/* Close button for tooltip */}
                        <button
                            onClick={() => setShowTooltip(false)}
                            className="absolute -top-2 right-0 w-4 h-4 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={handleOpenChat}
                className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-lg hover:shadow-xl z-50 flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                aria-label="Open chat"
            >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />

                {/* Pulse animation ring */}
                <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20"></div>
            </button>

            {/* Chat Panel */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden" onClick={() => setIsOpen(false)} />

                    {/* Chat Container */}
                    <div className="fixed bottom-6 right-6 w-[calc(100vw-3rem)] sm:w-[400px] max-h-[80vh] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-100 animate-slide-up">
                        {/* Header */}
                        <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                    <MessageCircle className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="font-semibold text-sm">Ask Austuverse</div>
                                    <div className="text-xs text-blue-100">We're here to help!</div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-blue-200 p-1 rounded-full hover:bg-white hover:bg-opacity-10 transition-all duration-200"
                                aria-label="Close chat"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Content */}
                        <div className="flex-1 overflow-y-auto bg-gray-50">
                            <ChatBot />
                        </div>

                        {/* Footer */}
                        <div className="p-3 bg-white border-t border-gray-100">
                            <div className="text-xs text-gray-500 text-center">Powered by Austuverse AI</div>
                        </div>
                    </div>
                </>
            )}

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
        </>
    )
}

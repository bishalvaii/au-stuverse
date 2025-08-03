"use client"

import { useState } from "react"

export default function LivingPage() {
    // Cost calculator logic
    const [rent, setRent] = useState("")
    const [food, setFood] = useState("")
    const [transport, setTransport] = useState("")
    const [total, setTotal] = useState<number | null>(null)

    const calculateCost = () => {
        const rentNum = Number.parseFloat(rent) || 0
        const foodNum = Number.parseFloat(food) || 0
        const transportNum = Number.parseFloat(transport) || 0
        setTotal(rentNum + foodNum + transportNum)
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-16 sm:space-y-20">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 tracking-tight">
                Living in Australia
            </h1>

            {/* Quick Links Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { name: "Accommodation Finder", id: "accommodation", emoji: "🏠" },
                    { name: "Cost of Living Calculator", id: "calculator", emoji: "💸" },
                    { name: "Public Transport Guide", id: "transport", emoji: "🚍" },
                    { name: "Emergency Contacts", id: "emergency", emoji: "🚨" },
                ].map((item) => (
                    <a
                        key={item.name}
                        href={`#${item.id}`}
                        className="block bg-white shadow-md rounded-xl p-6 hover:bg-blue-50 transition-colors duration-200 ease-in-out text-center"
                    >
                        <div className="text-4xl mb-2">{item.emoji}</div>
                        <h2 className="text-xl font-semibold text-blue-900">{item.name}</h2>
                    </a>
                ))}
            </div>

            {/* Sections Below */}
            <section id="accommodation" className="space-y-4">
                <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
                    <span className="text-3xl">🏠</span> Accommodation Finder
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    Finding a place to live can be tough, but there are great platforms like:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                        <a
                            className="text-blue-600 hover:underline"
                            href="https://flatmates.com.au"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Flatmates
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-blue-600 hover:underline"
                            href="https://unilodge.com.au"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            UniLodge
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-blue-600 hover:underline"
                            href="https://domain.com.au"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Domain
                        </a>
                    </li>
                </ul>
            </section>

            <section id="calculator" className="space-y-4">
                <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
                    <span className="text-3xl">💸</span> Cost of Living Calculator
                </h2>
                <div className="bg-white shadow-md rounded-xl p-6 space-y-4 max-w-md ">
                    <p className="text-gray-600">Estimate your monthly living expenses in AUD.</p>
                    <div className="grid gap-3">
                        <label htmlFor="rent" className="block text-sm font-medium text-gray-700">
                            Monthly Rent (AUD)
                        </label>
                        <input
                            id="rent"
                            className="border border-gray-300 p-3 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full"
                            type="number"
                            placeholder="e.g., 1500"
                            value={rent}
                            onChange={(e) => setRent(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-3">
                        <label htmlFor="food" className="block text-sm font-medium text-gray-700">
                            Monthly Food Budget (AUD)
                        </label>
                        <input
                            id="food"
                            className="border border-gray-300 p-3 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full"
                            type="number"
                            placeholder="e.g., 400"
                            value={food}
                            onChange={(e) => setFood(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-3">
                        <label htmlFor="transport" className="block text-sm font-medium text-gray-700">
                            Transport Cost (AUD)
                        </label>
                        <input
                            id="transport"
                            className="border border-gray-300 p-3 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full"
                            type="number"
                            placeholder="e.g., 150"
                            value={transport}
                            onChange={(e) => setTransport(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={calculateCost}
                        className="w-full bg-blue-700 text-white font-semibold py-3 rounded-md hover:bg-blue-800 transition-colors duration-200 ease-in-out"
                    >
                        Calculate Total
                    </button>
                    {total !== null && (
                        <div className="text-lg font-semibold text-center pt-2 text-green-700">
                            Estimated Total Monthly Cost: <span className="text-blue-700">AUD ${total.toFixed(2)}</span>
                        </div>
                    )}
                </div>
            </section>

            <section id="transport" className="space-y-4">
                <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
                    <span className="text-3xl">🚍</span> Public Transport Guide
                </h2>
                <p className="text-gray-700 leading-relaxed">Every major city has its own transport system:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                        <strong>Melbourne:</strong> Myki card – trains, trams, buses
                    </li>
                    <li>
                        <strong>Sydney:</strong> Opal card – trains, ferries, buses
                    </li>
                    <li>
                        <strong>Brisbane:</strong> go card – trains, buses, ferries
                    </li>
                </ul>
            </section>

            <section id="emergency" className="space-y-4">
                <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
                    <span className="text-3xl">🚨</span> Emergency Contacts
                </h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                        <strong>Emergency Services:</strong> 000
                    </li>
                    <li>
                        <strong>Lifeline:</strong> 13 11 14
                    </li>
                    <li>
                        <strong>International Student Support (Uni):</strong> Check university website
                    </li>
                    <li>
                        <strong>National Coronavirus Hotline:</strong> 1800 020 080
                    </li>
                </ul>
            </section>
        </div>
    )
}

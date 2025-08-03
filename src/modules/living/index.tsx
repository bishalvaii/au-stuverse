'use client';
import { useState } from 'react';

export default function LivingPage() {
    // Cost calculator logic
    const [rent, setRent] = useState('');
    const [food, setFood] = useState('');
    const [transport, setTransport] = useState('');
    const [total, setTotal] = useState<number | null>(null);

    const calculateCost = () => {
        const rentNum = parseFloat(rent) || 0;
        const foodNum = parseFloat(food) || 0;
        const transportNum = parseFloat(transport) || 0;
        setTotal(rentNum + foodNum + transportNum);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-20">
            <h1 className="text-4xl font-bold text-blue-800 text-center">Living in Australia</h1>

            {/* Quick Links Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { name: 'Accommodation Finder', id: 'accommodation' },
                    { name: 'Cost of Living Calculator', id: 'calculator' },
                    { name: 'Public Transport Guide', id: 'transport' },
                    { name: 'Emergency Contacts', id: 'emergency' },
                ].map((item) => (
                    <a
                        key={item.name}
                        href={`#${item.id}`}
                        className="bg-white shadow-md rounded-xl p-6 hover:bg-blue-50 transition"
                    >
                        <h2 className="text-xl font-semibold text-blue-900">{item.name}</h2>
                    </a>
                ))}
            </div>

            {/* Sections Below */}
            <section id="accommodation">
                <h2 className="text-2xl font-bold mb-3 text-blue-800">🏠 Accommodation Finder</h2>
                <p className="text-gray-700 mb-3">
                    Finding a place to live can be tough, but there are great platforms like:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                    <li><a className="text-blue-600 underline" href="https://flatmates.com.au" target="_blank">Flatmates</a></li>
                    <li><a className="text-blue-600 underline" href="https://unilodge.com.au" target="_blank">UniLodge</a></li>
                    <li><a className="text-blue-600 underline" href="https://domain.com.au" target="_blank">Domain</a></li>
                </ul>
            </section>

            <section id="calculator">
                <h2 className="text-2xl font-bold mb-3 text-blue-800">💸 Cost of Living Calculator</h2>
                <div className="grid gap-4 max-w-md">
                    <input
                        className="border p-3 rounded"
                        type="number"
                        placeholder="Monthly Rent (AUD)"
                        value={rent}
                        onChange={(e) => setRent(e.target.value)}
                    />
                    <input
                        className="border p-3 rounded"
                        type="number"
                        placeholder="Monthly Food Budget (AUD)"
                        value={food}
                        onChange={(e) => setFood(e.target.value)}
                    />
                    <input
                        className="border p-3 rounded"
                        type="number"
                        placeholder="Transport Cost (AUD)"
                        value={transport}
                        onChange={(e) => setTransport(e.target.value)}
                    />
                    <button
                        onClick={calculateCost}
                        className="bg-blue-700 text-white font-semibold py-2 rounded hover:bg-blue-800 transition"
                    >
                        Calculate Total
                    </button>
                    {total !== null && (
                        <div className="text-lg font-medium text-green-700">
                            Estimated Total Monthly Cost: AUD ${total.toFixed(2)}
                        </div>
                    )}
                </div>
            </section>

            <section id="transport">
                <h2 className="text-2xl font-bold mb-3 text-blue-800">🚍 Public Transport Guide</h2>
                <p className="text-gray-700">
                    Every major city has its own transport system:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                    <li><strong>Melbourne:</strong> Myki card – trains, trams, buses</li>
                    <li><strong>Sydney:</strong> Opal card – trains, ferries, buses</li>
                    <li><strong>Brisbane:</strong> go card – trains, buses, ferries</li>
                </ul>
            </section>

            <section id="emergency">
                <h2 className="text-2xl font-bold mb-3 text-blue-800">🚨 Emergency Contacts</h2>
                <ul className="list-disc pl-6 text-gray-700">
                    <li><strong>Emergency Services:</strong> 000</li>
                    <li><strong>Lifeline:</strong> 13 11 14</li>
                    <li><strong>International Student Support (Uni):</strong> Check university website</li>
                    <li><strong>National Coronavirus Hotline:</strong> 1800 020 080</li>
                </ul>
            </section>
        </div>
    );
}

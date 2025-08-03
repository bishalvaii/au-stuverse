"use client"

export default function WellbeingPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-16 sm:space-y-20">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 tracking-tight">
                Wellbeing & Support
            </h1>

            {/* Quick Links Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { id: "mental", title: "Mental Health Resources", emoji: "🧠" },
                    { id: "cultural", title: "Cultural Adaptation Tips", emoji: "🌏" },
                    { id: "counseling", title: "Counseling Services", emoji: "📍" },
                    { id: "crisis", title: "Emergency Help Lines", emoji: "🆘" },
                ].map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block bg-white shadow-md rounded-xl p-6 hover:bg-blue-50 transition-colors duration-200 ease-in-out text-center"
                    >
                        <div className="text-4xl mb-2">{item.emoji}</div>
                        <h2 className="text-xl font-semibold text-blue-900">{item.title}</h2>
                    </a>
                ))}
            </div>

            {/* Section: Mental Health */}
            <section id="mental" className="space-y-4">
                <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
                    <span className="text-3xl">🧠</span> Mental Health Resources
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    Adjusting to a new country and study load can be overwhelming. Don’t hesitate to reach out for help.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                        <a
                            href="https://headspace.org.au"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Headspace
                        </a>{" "}
                        — Free services for young people (12-25)
                    </li>
                    <li>
                        <a
                            href="https://www.beyondblue.org.au"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Beyond Blue
                        </a>{" "}
                        — Support for depression and anxiety
                    </li>
                    <li>
                        <a
                            href="https://www.lifeline.org.au"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Lifeline
                        </a>{" "}
                        — 13 11 14 (24/7 crisis support)
                    </li>
                </ul>
            </section>

            {/* Section: Cultural Adaptation */}
            <section id="cultural" className="space-y-4">
                <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
                    <span className="text-3xl">🌏</span> Cultural Adaptation Tips
                </h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>It’s normal to feel culture shock — give yourself time.</li>
                    <li>Attend student meetups or multicultural events on campus.</li>
                    <li>Explore local food, customs, and social norms gradually.</li>
                    <li>Join Facebook groups or Discord servers for your background community in Australia.</li>
                </ul>
            </section>

            {/* Section: Counseling */}
            <section id="counseling" className="space-y-4">
                <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
                    <span className="text-3xl">📍</span> Counseling Services
                </h2>
                <p className="text-gray-700 leading-relaxed">Most universities offer free counseling to enrolled students:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Visit your uni website and search for “student wellbeing” or “support services.”</li>
                    <li>
                        Examples:{" "}
                        <a
                            href="https://services.unimelb.edu.au/counselling"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            University of Melbourne
                        </a>
                        ,{" "}
                        <a
                            href="https://student.unsw.edu.au/wellbeing"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            UNSW
                        </a>
                    </li>
                </ul>
            </section>

            {/* Section: Emergency Help */}
            <section id="crisis" className="space-y-4">
                <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
                    <span className="text-3xl">🆘</span> Crisis Lines & Help
                </h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                        <strong>Emergency Services:</strong> 000 (Police, Fire, Ambulance)
                    </li>
                    <li>
                        <strong>Lifeline:</strong> 13 11 14
                    </li>
                    <li>
                        <strong>Beyond Blue:</strong> 1300 224 636
                    </li>
                    <li>
                        <strong>International Student Helpline (varies by state):</strong> Search via Study Australia or local govt
                        site
                    </li>
                </ul>
            </section>
        </div>
    )
}

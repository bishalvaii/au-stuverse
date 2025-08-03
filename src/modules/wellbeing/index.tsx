export default function WellbeingPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-20">
            <h1 className="text-4xl font-bold text-blue-800 text-center">Wellbeing & Support</h1>

            {/* Cards Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { id: 'mental', title: 'Mental Health Resources' },
                    { id: 'cultural', title: 'Cultural Adaptation Tips' },
                    { id: 'counseling', title: 'Counseling Services' },
                    { id: 'crisis', title: 'Emergency Help Lines' },
                ].map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="bg-white shadow-md rounded-xl p-6 hover:bg-blue-50 transition"
                    >
                        <h2 className="text-xl font-semibold text-blue-900">{item.title}</h2>
                    </a>
                ))}
            </div>

            {/* Section: Mental Health */}
            <section id="mental">
                <h2 className="text-2xl font-bold text-blue-800 mb-3">🧠 Mental Health Resources</h2>
                <p className="text-gray-700 mb-3">
                    Adjusting to a new country and study load can be overwhelming. Don’t hesitate to reach out for help.
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                    <li><a href="https://headspace.org.au" target="_blank" className="text-blue-600 underline">Headspace</a> — Free services for young people (12-25)</li>
                    <li><a href="https://www.beyondblue.org.au" target="_blank" className="text-blue-600 underline">Beyond Blue</a> — Support for depression and anxiety</li>
                    <li><a href="https://www.lifeline.org.au" target="_blank" className="text-blue-600 underline">Lifeline</a> — 13 11 14 (24/7 crisis support)</li>
                </ul>
            </section>

            {/* Section: Cultural Adaptation */}
            <section id="cultural">
                <h2 className="text-2xl font-bold text-blue-800 mb-3">🌏 Cultural Adaptation Tips</h2>
                <ul className="list-disc pl-6 text-gray-700">
                    <li>It’s normal to feel culture shock — give yourself time.</li>
                    <li>Attend student meetups or multicultural events on campus.</li>
                    <li>Explore local food, customs, and social norms gradually.</li>
                    <li>Join Facebook groups or Discord servers for your background community in Australia.</li>
                </ul>
            </section>

            {/* Section: Counseling */}
            <section id="counseling">
                <h2 className="text-2xl font-bold text-blue-800 mb-3">📍 Counseling Services</h2>
                <p className="text-gray-700 mb-3">
                    Most universities offer free counseling to enrolled students:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                    <li>Visit your uni website and search for “student wellbeing” or “support services.”</li>
                    <li>Examples: <a href="https://services.unimelb.edu.au/counselling" className="text-blue-600 underline" target="_blank">University of Melbourne</a>, <a href="https://student.unsw.edu.au/wellbeing" className="text-blue-600 underline" target="_blank">UNSW</a></li>
                </ul>
            </section>

            {/* Section: Emergency Help */}
            <section id="crisis">
                <h2 className="text-2xl font-bold text-blue-800 mb-3">🆘 Crisis Lines & Help</h2>
                <ul className="list-disc pl-6 text-gray-700">
                    <li><strong>Emergency Services:</strong> 000 (Police, Fire, Ambulance)</li>
                    <li><strong>Lifeline:</strong> 13 11 14</li>
                    <li><strong>Beyond Blue:</strong> 1300 224 636</li>
                    <li><strong>International Student Helpline (varies by state):</strong> Search via Study Australia or local govt site</li>
                </ul>
            </section>
        </div>
    );
}

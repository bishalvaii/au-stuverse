"use client"

// Removed 'next/link' as per the request to use plain HTML for styling consistency
// and since the links are primarily anchor links within the page.

export default function StudyPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-16 sm:space-y-20">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 tracking-tight">
                Study in Australia
            </h1>

            {/* Quick Links Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { id: "university-guides", title: "University/College Guides", emoji: "🎓" },
                    { id: "course-finder", title: "Subject or Course Finder", emoji: "📚" },
                    { id: "visa-info", title: "Student Visa Info", emoji: "🛂" },
                    { id: "academic-success", title: "Tips for Academic Success", emoji: "💡" },
                ].map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block bg-white shadow-md rounded-xl p-6 hover:bg-blue-50 transition-colors duration-200 ease-in-out text-center"
                    >
                        <div className="text-4xl mb-2">{item.emoji}</div>
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h2>
                        {item.id === "university-guides" && (
                            <p className="text-gray-700 text-sm">
                                Explore detailed guides for top Australian universities and colleges.
                            </p>
                        )}
                        {item.id === "course-finder" && (
                            <p className="text-gray-700 text-sm">Coming soon: Find courses that match your interests and goals.</p>
                        )}
                        {item.id === "visa-info" && (
                            <p className="text-gray-700 text-sm">
                                Learn about requirements, documents, and steps to apply for a student visa.
                            </p>
                        )}
                        {item.id === "academic-success" && (
                            <p className="text-gray-700 text-sm">
                                Study smarter with time management, campus resources, and local support tips.
                            </p>
                        )}
                    </a>
                ))}
            </div>

            {/* Optional: Content Anchors Below */}
            <div className="mt-16 space-y-16">
                <section id="university-guides" className="space-y-4">
                    <h3 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
                        <span className="text-3xl">🎓</span> University/College Guides
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Start with popular institutions like the University of Melbourne, UNSW, Monash, and more. You can list them
                        here later, each with a short summary, location, key strengths, and link to their website.
                    </p>
                </section>

                <section id="course-finder" className="space-y-4">
                    <h3 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
                        <span className="text-3xl">📚</span> Course Finder
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        This section will help students search for undergraduate/postgraduate courses. (Coming soon — you could
                        integrate an API or filterable UI here later.)
                    </p>
                </section>

                <section id="visa-info" className="space-y-4">
                    <h3 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
                        <span className="text-3xl">🛂</span> Student Visa Info
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        To study in Australia, you usually need a <strong className="font-semibold">subclass 500</strong> visa.
                        Include info about documents, GTE (Genuine Temporary Entrant), proof of funds, English proficiency, and OSHC
                        (Overseas Student Health Cover).
                    </p>
                </section>

                <section id="academic-success" className="space-y-4">
                    <h3 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
                        <span className="text-3xl">💡</span> Academic Success Tips
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Share strategies like time management, study groups, using campus libraries, consulting academic advisors,
                        and using platforms like Studiosity.
                    </p>
                </section>
            </div>
        </div>
    )
}

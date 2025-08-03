"use client"

// Removed 'next/link' as per the request to use plain HTML for styling consistency
// and since the links are primarily external or anchor links within the page.

export default function WorkPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-16 sm:space-y-20">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 tracking-tight">
                Work in Australia
            </h1>

            {/* Quick Links Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { id: "jobs", title: "Part-time Job Info", emoji: "💼" },
                    { id: "resume", title: "Resume Builder & Templates", emoji: "📄" },
                    { id: "tfn", title: "Tax File Number (TFN) Guide", emoji: "🧾" },
                    { id: "rights", title: "Work Rights & Tips", emoji: "✅" },
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

            {/* Section: Job Info */}
            <section id="jobs" className="space-y-4">
                <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
                    <span className="text-3xl">💼</span> Part-time Job Info
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    Finding a part-time job is common for students. Here are popular job boards:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                        <a
                            href="https://seek.com.au"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Seek
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://au.indeed.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Indeed
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://jora.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Jora
                        </a>
                    </li>
                </ul>
            </section>

            {/* Section: Resume */}
            <section id="resume" className="space-y-4">
                <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
                    <span className="text-3xl">📄</span> Resume Builder & Templates
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    Your resume should follow Australian standards: simple, clear, and relevant.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                        <a
                            href="https://www.canva.com/resumes/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Canva Resume Builder
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.livecareer.com/au"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            LiveCareer Templates
                        </a>
                    </li>
                    <li>
                        <a
                            href="/resume-sample.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Download Sample Resume (PDF)
                        </a>
                    </li>
                </ul>
            </section>

            {/* Section: TFN */}
            <section id="tfn" className="space-y-4">
                <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
                    <span className="text-3xl">🧾</span> Tax File Number (TFN) Guide
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    A TFN is required to work in Australia legally. You can apply online via the ATO:
                </p>
                <p className="mt-2">
                    <a
                        href="https://www.ato.gov.au/Individuals/Tax-file-number/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Apply for TFN via ATO
                    </a>
                </p>
            </section>

            {/* Section: Work Rights */}
            <section id="rights" className="space-y-4">
                <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
                    <span className="text-3xl">✅</span> Work Rights & Tips
                </h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                        Student visa holders can work <strong className="font-semibold">48 hours per fortnight</strong> during study
                        periods.
                    </li>
                    <li>Full-time work is allowed during semester breaks.</li>
                    <li>Keep a copy of your work agreement or contract.</li>
                    <li>Be aware of minimum wage (AUD $23.23/hour as of 2025).</li>
                    <li>
                        Use tools like{" "}
                        <a
                            href="https://www.fairwork.gov.au/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Fair Work Ombudsman
                        </a>
                        .
                    </li>
                </ul>
            </section>
        </div>
    )
}

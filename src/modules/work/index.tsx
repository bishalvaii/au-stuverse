import Link from 'next/link';

export default function WorkPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-20">
            <h1 className="text-4xl font-bold text-blue-800 text-center">Work in Australia</h1>

            {/* Cards Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { id: 'jobs', title: 'Part-time Job Info' },
                    { id: 'resume', title: 'Resume Builder & Templates' },
                    { id: 'tfn', title: 'Tax File Number (TFN) Guide' },
                    { id: 'rights', title: 'Work Rights & Tips' },
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

            {/* Section: Job Info */}
            <section id="jobs">
                <h2 className="text-2xl font-bold text-blue-800 mb-3">💼 Part-time Job Info</h2>
                <p className="text-gray-700 mb-3">
                    Finding a part-time job is common for students. Here are popular job boards:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                    <li><a href="https://seek.com.au" target="_blank" className="text-blue-600 underline">Seek</a></li>
                    <li><a href="https://au.indeed.com" target="_blank" className="text-blue-600 underline">Indeed</a></li>
                    <li><a href="https://jora.com" target="_blank" className="text-blue-600 underline">Jora</a></li>
                </ul>
            </section>

            {/* Section: Resume */}
            <section id="resume">
                <h2 className="text-2xl font-bold text-blue-800 mb-3">📄 Resume Builder & Templates</h2>
                <p className="text-gray-700 mb-3">
                    Your resume should follow Australian standards: simple, clear, and relevant.
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                    <li><a href="https://www.canva.com/resumes/" target="_blank" className="text-blue-600 underline">Canva Resume Builder</a></li>
                    <li><a href="https://www.livecareer.com/au" target="_blank" className="text-blue-600 underline">LiveCareer Templates</a></li>
                    <li><a href="/resume-sample.pdf" target="_blank" className="text-blue-600 underline">Download Sample Resume (PDF)</a></li>
                </ul>
            </section>

            {/* Section: TFN */}
            <section id="tfn">
                <h2 className="text-2xl font-bold text-blue-800 mb-3">🧾 Tax File Number (TFN) Guide</h2>
                <p className="text-gray-700">
                    A TFN is required to work in Australia legally. You can apply online via the ATO:
                </p>
                <p className="mt-2 text-blue-600 underline">
                    <a href="https://www.ato.gov.au/Individuals/Tax-file-number/" target="_blank">
                        Apply for TFN via ATO
                    </a>
                </p>
            </section>

            {/* Section: Work Rights */}
            <section id="rights">
                <h2 className="text-2xl font-bold text-blue-800 mb-3">✅ Work Rights & Tips</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Student visa holders can work **48 hours per fortnight** during study periods.</li>
                    <li>Full-time work is allowed during semester breaks.</li>
                    <li>Keep a copy of your work agreement or contract.</li>
                    <li>Be aware of minimum wage (AUD $23.23/hour as of 2025).</li>
                    <li>Use tools like <a href="https://www.fairwork.gov.au/" target="_blank" className="text-blue-600 underline">Fair Work Ombudsman</a>.</li>
                </ul>
            </section>
        </div>
    );
}

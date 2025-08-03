import Link from 'next/link';

export default function StudyPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 bg-white">
            <h1 className="text-4xl font-bold mb-10 text-center text-blue-800">Study in Australia</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* University/College Guides */}
                <Link
                    href="#university-guides"
                    className="bg-white p-6 rounded-xl shadow-md hover:bg-blue-50 transition"
                >
                    <h2 className="text-xl font-semibold mb-2 text-blue-900">University/College Guides</h2>
                    <p className="text-gray-700 text-sm">Explore detailed guides for top Australian universities and colleges.</p>
                </Link>

                {/* Subject or Course Finder */}
                <Link
                    href="#course-finder"
                    className="bg-white p-6 rounded-xl shadow-md hover:bg-blue-50 transition"
                >
                    <h2 className="text-xl font-semibold mb-2 text-blue-900">Subject or Course Finder</h2>
                    <p className="text-gray-700 text-sm">Coming soon: Find courses that match your interests and goals.</p>
                </Link>

                {/* Student Visa Info */}
                <Link
                    href="#visa-info"
                    className="bg-white p-6 rounded-xl shadow-md hover:bg-blue-50 transition"
                >
                    <h2 className="text-xl font-semibold mb-2 text-blue-900">Student Visa Info</h2>
                    <p className="text-gray-700 text-sm">Learn about requirements, documents, and steps to apply for a student visa.</p>
                </Link>

                {/* Academic Tips */}
                <Link
                    href="#academic-success"
                    className="bg-white p-6 rounded-xl shadow-md hover:bg-blue-50 transition"
                >
                    <h2 className="text-xl font-semibold mb-2 text-blue-900">Tips for Academic Success</h2>
                    <p className="text-gray-700 text-sm">Study smarter with time management, campus resources, and local support tips.</p>
                </Link>
            </div>

            {/* Optional: Content Anchors Below */}
            <div className="mt-16 space-y-16">
                <section id="university-guides">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">University/College Guides</h3>
                    <p className="text-gray-700">
                        Start with popular institutions like the University of Melbourne, UNSW, Monash, and more.
                        You can list them here later, each with a short summary, location, key strengths, and link to their website.
                    </p>
                </section>

                <section id="course-finder">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Course Finder</h3>
                    <p className="text-gray-700">
                        This section will help students search for undergraduate/postgraduate courses. (Coming soon — you could
                        integrate an API or filterable UI here later.)
                    </p>
                </section>

                <section id="visa-info">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Student Visa Info</h3>
                    <p className="text-gray-700">
                        To study in Australia, you usually need a **subclass 500** visa. Include info about documents, GTE (Genuine Temporary Entrant), proof of funds, English proficiency, and OSHC (Overseas Student Health Cover).
                    </p>
                </section>

                <section id="academic-success">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">Academic Success Tips</h3>
                    <p className="text-gray-700">
                        Share strategies like time management, study groups, using campus libraries, consulting academic advisors, and using platforms like Studiosity.
                    </p>
                </section>
            </div>
        </div>
    );
}

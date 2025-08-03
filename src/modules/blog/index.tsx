import Link from "next/link"

const blogPosts = [
    {
        title: "How to Open a Bank Account in Australia",
        summary: "Step-by-step guide to setting up your first bank account.",
        slug: "open-bank-account",
        readTime: "5 min read",
        date: "2025-08-01",
    },
    {
        title: "Understanding TFN: Why You Need One",
        summary: "Everything about applying for and using a Tax File Number.",
        slug: "understanding-tfn",
        readTime: "3 min read",
        date: "2025-07-28",
    },
    {
        title: "Cost of Living Tips for Students",
        summary: "Save money and budget better while studying abroad.",
        slug: "cost-of-living",
        readTime: "7 min read",
        date: "2025-07-25",
    },
]

export default function BlogPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-blue-800">Student Blog & Articles</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {blogPosts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="bg-white hover:bg-blue-50 border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                    >
                        <h2 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">{post.title}</h2>
                        <p className="text-sm text-gray-600 mb-3">{post.summary}</p>
                        <div className="text-xs text-gray-400">
                            {post.readTime} • {new Date(post.date).toLocaleDateString()}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

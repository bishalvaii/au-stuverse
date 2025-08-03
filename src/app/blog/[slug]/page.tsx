import { notFound } from "next/navigation"

const blogPosts = [
    {
        slug: "open-bank-account",
        title: "How to Open a Bank Account in Australia",
        date: "2025-08-01",
        readTime: "5 min read",
        content: `
Opening a bank account in Australia is one of the first steps for international students. Here's how you can do it:

1. Choose a bank: Commonwealth Bank, ANZ, Westpac, NAB, etc.
2. Gather documents:
   - Passport
   - Confirmation of Enrolment (CoE)
   - Student visa
3. Book an appointment or open online.
4. Collect your debit card from the branch or have it mailed.

You can open an account even before landing if you have your visa approved.
`,
    },
    {
        slug: "understanding-tfn",
        title: "Understanding TFN: Why You Need One",
        date: "2025-07-28",
        readTime: "3 min read",
        content: `
A Tax File Number (TFN) is essential if you want to work in Australia.

### Why it's important:
- It's your identity for tax purposes.
- Employers require it.
- You can apply online on the ATO website for free.

Don't share your TFN with others — it's private information.
`,
    },
    {
        slug: "cost-of-living",
        title: "Cost of Living Tips for Students",
        date: "2025-07-25",
        readTime: "7 min read",
        content: `
Australia is expensive, but you can save money by:

- Sharing accommodation
- Cooking at home
- Using public transport with student concessions
- Buying second-hand books or using university libraries

Track your monthly budget using tools like Splitwise or Excel.
`,
    },
]

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug)

    if (!post) return notFound()

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">{post.title}</h1>
            <div className="text-sm text-gray-500 mb-6">
                {new Date(post.date).toLocaleDateString()} • {post.readTime}
            </div>
            <article className="prose prose-blue prose-sm sm:prose-base max-w-none">
                {post.content.split("\n").map((line, idx) => (
                    <p key={idx}>{line.trim()}</p>
                ))}
            </article>
        </div>
    )
}

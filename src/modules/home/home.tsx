import ChatLauncher from "@/components/chat-launcher"
import ChatBot from "@/components/chatbot"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Background Image */}
                <Image
                    src="/home/hero-img.avif"
                    alt="International students walking on campus with books and backpacks"
                    fill
                    className="object-cover object-center"
                    priority
                />

                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

                {/* Hero Content */}
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center text-white max-w-7xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                        Helping International Students <span className="text-blue-400 block sm:inline">Thrive</span>{" "}
                        <span className="block sm:inline">in Australia</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed px-2">
                        Your one-stop guide for study, work, living, and wellbeing in Australia.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
                        <Link
                            href="/study"
                            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-base sm:text-lg min-w-[200px] text-center"
                        >
                            Explore Study Info
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-base sm:text-lg min-w-[200px] text-center"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
            <div className="">
                {/* Your homepage content here */}
                <ChatLauncher />
            </div>
            {/* Quick Links */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center text-gray-900">Quick Links</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {[
                        { name: "Visa Info", link: "/study", icon: "📋" },
                        { name: "Accommodation", link: "/living", icon: "🏠" },
                        { name: "Jobs & Work Rights", link: "/work", icon: "💼" },
                        { name: "Mental Health", link: "/wellbeing", icon: "💚" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            className="bg-white hover:bg-blue-50 text-blue-900 font-semibold text-center py-6 sm:py-8 px-3 sm:px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                        >
                            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{item.icon}</div>
                            <div className="text-sm sm:text-lg">{item.name}</div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Blog Teasers */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center text-gray-900">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {[
                        {
                            title: "How to Open a Bank Account in Australia",
                            summary: "Step-by-step guide to setting up your first bank account.",
                            link: "/blog",
                            readTime: "5 min read",
                        },
                        {
                            title: "Understanding TFN: Why You Need One",
                            summary: "Everything about applying for and using a Tax File Number.",
                            link: "/blog",
                            readTime: "3 min read",
                        },
                        {
                            title: "Cost of Living Tips for Students",
                            summary: "Save money and budget better while studying abroad.",
                            link: "/blog",
                            readTime: "7 min read",
                        },
                    ].map((post) => (
                        <Link
                            key={post.title}
                            href={post.link}
                            className="bg-white hover:bg-blue-50 text-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                        >
                            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">{post.title}</h3>
                            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{post.summary}</p>
                            <div className="text-xs sm:text-sm text-blue-600 font-medium">{post.readTime}</div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center text-gray-900">
                    Why Use Au Stuverse?
                </h2>
                <div className="grid md:grid-cols-3 gap-6 sm:gap-8 text-center">
                    {[
                        {
                            icon: "🌏",
                            title: "Tailored for International Students",
                            desc: "Get relevant info, support, and resources that actually apply to your visa, life, and education in Australia.",
                        },
                        {
                            icon: "🚀",
                            title: "Built for Real-World Success",
                            desc: "Find jobs, get academic tips, manage money, and learn your rights — all in one place.",
                        },
                        {
                            icon: "💬",
                            title: "Helpful, Human Support",
                            desc: "You’re not alone. Access mental health resources and connect to real student stories.",
                        },
                    ].map((item) => (
                        <div key={item.title} className="bg-white shadow-md p-6 rounded-xl border hover:shadow-lg transition">
                            <div className="text-3xl mb-3">{item.icon}</div>
                            <h3 className="text-lg font-bold mb-2 text-blue-800">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-blue-700 text-white py-12 mt-16 text-center px-6 rounded-xl max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                    Still feeling lost? Start with our Student Starter Guide.
                </h2>
                <p className="text-sm sm:text-base mb-6 text-blue-100">
                    We’ve created a checklist and toolkit for your first 30 days in Australia.
                </p>
                <Link
                    href="/study"
                    className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition"
                >
                    Get Started
                </Link>
            </section>

        </div>
    )
}

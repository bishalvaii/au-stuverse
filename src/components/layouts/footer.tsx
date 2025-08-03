import Link from "next/link"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-200  mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-6">
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-primary">Stuverse</h3>
                    <p className="text-sm text-muted-foreground">
                        Your comprehensive guide to thriving as an international student in Australia.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                            <FacebookIcon className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                            <TwitterIcon className="h-5 w-5" />
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Instagram"
                        >
                            <InstagramIcon className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                            <YoutubeIcon className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Quick Links</h3>
                    <nav className="grid gap-2">
                        <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link href="/study" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Study
                        </Link>
                        <Link href="/work-finance" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Work & Finance
                        </Link>
                        <Link href="/living-legal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Living & Legal
                        </Link>
                        <Link
                            href="/wellbeing-support"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            Wellbeing & Support
                        </Link>
                        <Link
                            href="/student-starter-guide"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            Student Starter Guide
                        </Link>
                    </nav>
                </div>
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Resources</h3>
                    <nav className="grid gap-2">
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Blog
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            FAQs
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Terms of Service
                        </Link>
                    </nav>
                </div>
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Contact Us</h3>
                    <p className="text-sm text-muted-foreground">
                        Have questions? Reach out to us!
                        <br />
                        <Link href="#" className="text-primary hover:underline">
                            info@stuverse.com
                        </Link>
                    </p>
                    <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-accent-foreground shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        Send an Inquiry
                    </Link>
                </div>
            </div>
            <div className="container mt-8 border-t mx-8 pt-6 text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Stuverse. All rights reserved.
            </div>
        </footer>
    )
}

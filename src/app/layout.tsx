import Navbar from '@/components/layouts/navbar'
import './globals.css'
import Footer from '@/components/layouts/footer'

export const metadata = {
  title: 'Au stuverse',
  description: 'Help for international students in Australia',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-6 bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

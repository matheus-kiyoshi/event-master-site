import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EventMasters',
  description: 'Os melhores eventos para você!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <Sidebar />
        <div className="mb-8 mt-16 mr-14">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

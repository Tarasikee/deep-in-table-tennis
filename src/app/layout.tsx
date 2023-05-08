import './globals.css'
import { Footer, Navbar } from './ui-components'
import { ReactNode } from 'react'

export const metadata = {
    title: 'DeepIn Table Tennis',
    description: 'Deep dive into table tennis',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html data-theme="winter" lang="en">
            <body className="h-screen flex flex-col justify-between">
                <Navbar />
                <main className="h-full px-20 pt-10">
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    )
}

import Head from 'next/head'
import Header from './header'
import Footer from './footer'

interface LayoutProps {
    children: React.ReactNode,
}

export default function Layout({children}: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <Head>
                <title>漢字.net Portal</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            <Header />
            <main className="w-full flex-1 flex flex-col items-center justify-center px-20 text-center">
                {children}
            </main>
            <Footer />
        </div>
    )
}
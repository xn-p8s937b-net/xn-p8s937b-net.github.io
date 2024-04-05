import Header from './header'
import Footer from './footer'

interface LayoutProps {
    children: React.ReactNode,
}

export default function Layout({children}: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <Header />
            <main className="w-full flex-1 flex flex-col items-center justify-center px-20 text-center">
                {children}
            </main>
            <Footer />
        </div>
    )
}
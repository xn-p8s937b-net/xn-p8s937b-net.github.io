import Head from 'next/head'
import Image from 'next/image'

interface LayoutProps {
    children: React.ReactNode,
}

export default function Layout({children}: LayoutProps) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
            <Head>
                <title>漢字.net Portal</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                {children}
            </main>

            <footer className="flex h-24 w-full items-center justify-center bg-gray-200">
                <a
                    className="flex items-center justify-center gap-2"
                    href="https://github.com/ko-Kore/ko-Kore.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Hosted on{' '}
                    <Image src="/github.svg" alt="GitHub Logo" width={32} height={32} />
                    {' '}GitHub Pages
                </a>
            </footer>
        </div>
    )
}
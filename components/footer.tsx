import Image from 'next/image'

interface FooterProps {

}

export default function Footer(props: FooterProps) {
    return (
        <footer className="flex h-24 w-full items-center justify-center bg-gray-200">
        <a
            className="flex items-center justify-center gap-2"
            href="https://github.com/ko-Kore/ko-Kore.github.io"
            target="_blank"
            rel="noopener noreferrer">

            Hosted on{' '}
            <Image src="/github.svg" alt="GitHub Logo" width={32} height={32} />
            {' '}GitHub Pages
        </a>
    </footer>
    )
}
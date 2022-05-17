import Image from 'next/image'

interface FooterProps {

}

export default function Footer(props: FooterProps) {
    return (
        <footer className="flex flex-col h-24 py-16 w-full items-center justify-center bg-gray-200">
        <a
            className="flex items-center justify-center gap-2"
            href="https://github.com/ko-Kore/ko-Kore.github.io"
            target="_blank"
            rel="noopener noreferrer">

            Hosted on{' '}
            <Image src="/github.svg" alt="GitHub Logo" width={32} height={32} />
            {' '}GitHub Pages
        </a>
        ·
        <a
            href="https://t.me/oyat_lee"
            target="_blank"
            rel="noopener noreferrer">
            
            Contact Maintainer
        </a>
    </footer>
    )
}
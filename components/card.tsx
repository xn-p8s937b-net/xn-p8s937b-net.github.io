import Twemoji from 'react-twemoji'

interface CardProps {
    emoji: string
    title: string
    description: string
    href: string
}

export default function Card(props: CardProps) {
    return (
        <a
            href={props.href}
            className="mx-2 my-6 w-96 h-64 rounded-xl p-6 text-left bg-white shadow-lg hover:text-orange-500 focus:text-orange-500">
            
            <Twemoji options={{ className: "text-8xl twemoji" }}>{props.emoji}</Twemoji>
            <h3 className="mt-4 text-2xl font-bold">{props.title} &rarr;</h3>
            <p className="mt-4 text-xl">{props.description}</p>
        </a>
    )
}
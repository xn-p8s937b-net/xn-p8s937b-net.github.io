import _tags from '../assets/tags.json'
import Twemoji from 'react-twemoji'

const tags: { [tag: string]: {bg: string, text: string} } = _tags

interface CardProps {
    emoji: string
    title: string
    description: string
    href: string
    tags: string[]
}

export default function Card(props: CardProps) {
    return (
        <a
            href={props.href}
            className="group mx-2 my-6 w-96 h-64 rounded-xl p-6 text-left bg-white shadow-lg hover:bg-gray-50 active:shadow-md">
            
            <Twemoji options={{ className: "text-8xl twemoji" }}>{props.emoji}</Twemoji>
            <h3 className="mt-4 text-2xl font-bold group-hover:text-orange-500 group-focus:text-orange-500">{props.title} &rarr;</h3>
            <p className="flex flex-row">
                {props.tags.map((tag) => {
                    const color = (tags[tag] || {bg: '#e0e0e0', text: "black"})
                    const style = { backgroundColor: color.bg, color: color.text}
                    return (
                        <a href="#" className="mr-1 py-1 px-4 rounded-md hover:mix-blend-multiply" style={style}>{tag}</a>
                    )
                })}
            </p>
            <p className="mt-4 text-xl">{props.description}</p>
        </a>
    )
}
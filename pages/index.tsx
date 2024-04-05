import { useState } from 'react'
import type { NextPage } from 'next'
import Layout from '../components/layout'
import cardList from '../assets/cards.json'
import _tagStyles from '../assets/tag-styles.json'
import Twemoji from 'react-twemoji'

const tagStyles: { [tag: string]: {bg: string, text: string} | null } = _tagStyles

const Home: NextPage<Props> = (props) => {
    const cards: Card[] = props.cards

    const [visibleTags, setVisibleTags] = useState<string[]>([])
    const onTagClick = (tag: string, single: boolean) => {
        const included = visibleTags.includes(tag)
        if(single) visibleTags.splice(0, visibleTags.length)
        if(visibleTags.includes(tag)) visibleTags.splice(visibleTags.indexOf(tag), 1)
        else visibleTags.push(tag)
        if(single && included) visibleTags.splice(visibleTags.indexOf(tag), 1)
        setVisibleTags([...visibleTags])
    }
    const filteredCards = cards.filter(({tags}) => visibleTags.length == 0 || visibleTags.every((tag) => tags.includes(tag)))

    return (
        <Layout>
            <title>漢字.net Portal</title>
            <div className="mt-6 flex max-w-4xl flex-wrap">
                {Object.keys(tagStyles).map((tag) => {
                    const color = (tagStyles[tag] || {bg: '#e0e0e0', text: "black"})
                    const style = visibleTags.includes(tag) ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: color.bg, color: color.text}
                    return (
                        <a key={tag} href="#" onClick={() => onTagClick(tag, false)} className="mx-1 my-1 py-1 px-4 rounded-md hover:mix-blend-multiply" style={style}>{tag}</a>
                    )
                })}
            </div>
            <div className="flex-1 mt-6 flex max-w-4xl flex-wrap items-start justify-around sm:w-full">
                {filteredCards.map(({emoji, title, description, href, tags}) => {
                    return (
                        <div
                            key={href}
                            className="mx-2 my-6 w-96 h-64 rounded-xl p-6 text-left bg-white shadow-lg hover:bg-gray-50 a ctive:shadow-md">
                            <a href={href}>
                                <Twemoji options={{ className: "text-8xl twemoji" }}>{emoji}</Twemoji>
                                <h3 className="mt-2 text-2xl font-bold hover:text-orange-500 focus:text-orange-500">{title}</h3>
                            </a>
                            <p className="mt-2 text-xl">{description}</p>
                            <p className="flex flex-row mt-2">
                                {tags.map((tag: string) => {
                                    const color = (tagStyles[tag] || {bg: '#e0e0e0', text: "black"})
                                    const style = visibleTags.includes(tag) ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: color.bg, color: color.text}
                                    return (
                                        <a key={tag} href="#" onClick={() => onTagClick(tag, true)} className="mr-1 py-1 px-4 rounded-md hover:mix-blend-multiply" style={style}>{tag}</a>
                                    )
                                })}
                            </p>
                        </div>
                    )
                })}
                <div className="w-96 mx-2 grow-1"></div>
            </div>
        </Layout>
    )
}

export interface Props {
    cards: Card[]
}

export interface Card {
    emoji: string
    title: string
    description: string
    href: string
    tags: string[]
}

export async function getStaticProps() {
    const cards = await Promise.all(cardList.map(async (name) => {
        const module = await import( `../assets/cards/${name}.json`)
        const card: Card = JSON.parse(JSON.stringify(module))
        return card
    }))
    return {
        props: {
            cards,
        }
    }
}

export default Home

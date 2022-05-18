import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Layout from '../components/layout'
import cards from '../assets/cards.json'
import _tagStyles from '../assets/tag-styles.json'
import Twemoji from 'react-twemoji'

const tagStyles: { [tag: string]: {bg: string, text: string} | null } = _tagStyles

const Home: NextPage = () => {

    const [visibleTags, setVisibleTags] = useState<string[]>([])
    const onTagClick = (tag: string, single: boolean) => {
        if(single) visibleTags.splice(0, visibleTags.length)
        if(visibleTags.includes(tag)) visibleTags.splice(visibleTags.indexOf(tag), 1)
        else visibleTags.push(tag)
        setVisibleTags([...visibleTags])
    }
    const filteredCards = cards.filter(({tags}) => visibleTags.length == 0 || visibleTags.every((tag) => tags.includes(tag)))

    return (
        <Layout>
            <div className="mt-6 flex max-w-4xl flex-wrap">
                {Object.keys(tagStyles).map((tag) => {
                    const color = (tagStyles[tag] || {bg: '#e0e0e0', text: "black"})
                    const style = visibleTags.includes(tag) ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: color.bg, color: color.text}
                    return (
                        <a href="#" onClick={() => onTagClick(tag, false)} className="mr-1 py-1 px-4 rounded-md hover:mix-blend-multiply" style={style}>{tag}</a>
                    )
                })}
            </div>
            <div className="flex-1 mt-6 flex max-w-4xl flex-wrap items-start justify-around sm:w-full">
                {filteredCards.map(({emoji, title, description, href, tags}) => {
                    return (
                        <a
                            href={href}
                            className="group mx-2 my-6 w-96 h-64 rounded-xl p-6 text-left bg-white shadow-lg hover:bg-gray-50 a ctive:shadow-md">
                            
                            <Twemoji options={{ className: "text-8xl twemoji" }}>{emoji}</Twemoji>
                            <h3 className="mt-2 text-2xl font-bold group-hover:text-orange-500 group-focus:text-orange-500">{title} &rarr;</h3>
                            <p className="flex flex-row mt-2">
                                {tags.map((tag) => {
                                    const color = (tagStyles[tag] || {bg: '#e0e0e0', text: "black"})
                                    const style = visibleTags.includes(tag) ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: color.bg, color: color.text}
                                    return (
                                        <a href="#" onClick={() => onTagClick(tag, true)} className="mr-1 py-1 px-4 rounded-md hover:mix-blend-multiply" style={style}>{tag}</a>
                                    )
                                })}
                            </p>
                            <p className="mt-2 text-xl">{description}</p>
                        </a>
                    )
                })}
                <div className="w-96 mx-2 grow-1"></div>
            </div>
        </Layout>
    )
}

export default Home

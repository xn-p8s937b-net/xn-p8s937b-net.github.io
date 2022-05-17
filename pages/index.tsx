import type { NextPage } from 'next'
import Layout from '../components/layout'
import Card from '../components/card'
import cards from '../assets/cards.json'

const Home: NextPage = () => {
    return (
        <Layout>
            <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
                {cards.map((card) => {
                    return (<Card
                        emoji={card.emoji}
                        title={card.title}
                        description={card.description}
                        href={card.href}
                        tags={card.tags} />
                    )
                })}
                <div className="w-96"></div>
                {/* <Card
                    emoji=""
                    title=""
                    description=""
                    href="" /> */}

            </div>
        </Layout>
    )
}

export default Home

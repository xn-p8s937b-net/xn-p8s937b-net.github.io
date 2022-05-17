import type { NextPage } from 'next'
import Layout from '../components/layout'
import Header from '../components/header'
import Card from '../components/card'
import Twemoji from 'react-twemoji'

const Home: NextPage = () => {
    return (
        <Layout>
            <Header />
            <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
                <Card
                    emoji="📖"
                    title="國漢大百科"
                    description="A wiki in Korean Mixed Script."
                    href="https://wiki.韓國語.漢字.net/" />
                <Card
                    emoji="✍️"
                    title="漢字筆談會"
                    description="Han Characters Pen Talk Community"
                    href="https://wiki.筆談.漢字.net/" />
                <Card
                    emoji="🗺️"
                    title="韓國語 地圖"
                    description="An OpenStreetMap tile server with Hanja labels."
                    href="https://map.韓國語.漢字.net/" />
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

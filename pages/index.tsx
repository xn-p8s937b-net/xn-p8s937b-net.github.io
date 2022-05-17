import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Twemoji from 'react-twemoji'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>漢字.net Portal</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <span className="text-orange-500">
            漢字.net
          </span>
        </h1>

        {/* <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p> */}

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://wiki.韓國語.漢字.net/"
            className="mt-6 w-96 h-64 rounded-xl p-6 text-left bg-white shadow-lg hover:text-orange-500 focus:text-orange-500">
            <Twemoji options={{ className: "text-8xl twemoji" }}>📖</Twemoji>
            <h3 className="mt-4 text-2xl font-bold">國漢大百科 &rarr;</h3>
            <p className="mt-4 text-xl">
              A wiki in Korean Mixed Script.
            </p>
          </a>

          <a
            href="https://筆談.漢字.net/"
            className="mt-6 w-96 h-64 rounded-xl p-6 text-left bg-white shadow-lg hover:text-orange-500 focus:text-orange-500">
            <Twemoji options={{ className: "text-8xl twemoji" }}>✍️</Twemoji>
            <h3 className="mt-4 text-2xl font-bold">漢字筆談會 &rarr;</h3>
            <p className="mt-4 text-xl">
              Han Characters Pen Talk Community
            </p>
          </a>

          <a
            href="https://map.韓國語.漢字.net/"
            className="mt-6 w-96 h-64 rounded-xl p-6 text-left bg-white shadow-lg hover:text-orange-500 focus:text-orange-500">
            <Twemoji options={{ className: "text-8xl twemoji" }}>🗺️</Twemoji>
            <h3 className="mt-4 text-2xl font-bold">韓國語 地圖 &rarr;</h3>
            <p className="mt-4 text-xl">
              An OpenStreetMap tile server with Hanja labels.
            </p>
          </a>

          <a
            href="/more"
            className="mt-6 w-96 h-64 rounded-xl p-6 text-left bg-white shadow-lg hover:text-orange-500 focus:text-orange-500">
            <Twemoji options={{ className: "text-8xl twemoji" }}>➕</Twemoji>
            <h3 className="mt-4 text-2xl font-bold">More &rarr;</h3>
            <p className="mt-4 text-xl">
              And some more..!
            </p>
          </a>
        </div>
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

export default Home

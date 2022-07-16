import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Planning Poker</title>
        <meta name="description" content="Created by Andre Zekic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Planning Poker
        </h1>

        <p className={styles.description}>
          Estimate your tasks
        </p>
        <Link href="/create">
          <div className={styles.card}>
              Start a game
          </div>
        </Link> 
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/andrezekic"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Andre Zekic
        </a>
      </footer>
    </div>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Face from '../components/Face'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vivek Bigelow</title>
        <link rel="icon" href="/img/face/front.jpg"></link>
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <Link className={styles.navLink} href="/about">About</Link>
          <Link className={styles.navLink} href="/blog">Blog</Link>
          <Link className={styles.navLink} href="/projects">Projects</Link>
        </nav>
        <Face />
      </main>
    </div>
  )
}

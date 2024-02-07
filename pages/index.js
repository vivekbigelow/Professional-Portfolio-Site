import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Face from '../components/Face'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vivek Bigelow</title>
      </Head>

      <main className={styles.main}>
        <Face />
      </main>

      <footer className={styles.footer}>
       <p>Copyright Vivek Bigelow 2024</p>
      </footer>
    </div>
  )
}

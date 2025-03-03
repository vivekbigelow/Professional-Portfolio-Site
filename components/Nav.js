import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Nav() {
    return (
        <nav className={styles.nav}>
          <Link className={styles.navLink} href="/">Home</Link>
          <Link className={styles.navLink} href="/work">Work</Link>
          <Link className={styles.navLink} href="/files/Resume2025.pdf">Resume</Link>
        </nav>
    )
}
import Link from "next/link";
import styles from "../styles/Home.module.css";
import HeadWrapper from "../components/HeadWrapper"
import Nav from "../components/Nav";

export default function About() {
  return (
   
      <main className={styles.main}>
        <HeadWrapper />
        <Nav />
        <article className={styles.article}>
          <p>
            My name is Vivek and I am a digital artist based in
            Indianapolis IN. This site is a portfolio for different
            projects that I've worked on. I've worked in web development
            professionally for 3 years. In 2021 I graduated with a B.S. in
            Computer Science from IUPUI. In 2018 I graduated with a B.A. in Fine
            Arts from Indiana University Bloomington. Besides web development I am
            also interested in art, music, graphic design, and indie game development.
          </p>
        </article>
        <nav className={styles.nav}>
          <Link className={styles.navLink} href="https://github.com/vivekbigelow" target="_blank">
            Github
          </Link>
          <Link className={styles.navLink}
            href="https://www.linkedin.com/in/vivek-bigelow-555089122/"
            target="_blank"
          >
            LinkedIn
          </Link>
        </nav>
      </main>
 
  );
}

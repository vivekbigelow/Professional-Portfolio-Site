import styles from "../../styles/Home.module.css";
import HeadWrapper from "../../components/HeadWrapper";
import Link from 'next/link';
import Nav from "../../components/Nav";

export default function Logos() {
  return (
    <div className={styles.container}>
      <HeadWrapper />

      <main className={styles.main}>
        <Nav />
        <article className={styles.article}>
          <h1>Logos</h1>
          <div className={styles.imgGrid}>
            <Link href={"/img/work/logos/ttst-logo.jpg"}>
              <img
                src="/img/work/logos/ttst-logo.jpg"
                width="100%"
                alt="Twisted Twinsister Tapes Logo"
              />
            </Link>
            <Link href={"/img/work/logos/haillausch-logo.jpg"}>
              <img
                src="/img/work/logos/haillausch-logo.jpg"
                width="100%"
                alt="Haillausch Law Logo"
              />
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}

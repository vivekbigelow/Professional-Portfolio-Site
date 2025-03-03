import styles from "../../styles/Home.module.css";
import HeadWrapper from "../../components/HeadWrapper";
import Nav from "../../components/Nav";
import Link from "next/link";

export default function Jcards() {
  return (
    <div className={styles.container}>
      <HeadWrapper />

      <main className={styles.main}>
        <Nav />
        <article className={styles.article}>
          <h1>Jcards</h1>
          <p>Jcards for various cassette releases.</p>
          <div className={styles.imgGrid}>
            <Link href={"/img/work/jcards/ahw-jcard.png"}>
              <img
                src="/img/work/jcards/ahw-jcard.png"
                width="100%"
                alt="Aerial Headwound Jcard"
              />
            </Link>
            <Link href={"/img/work/jcards/dc-jcard.jpg"}>
              <img
                src="/img/work/jcards/dc-jcard.jpg"
                width="100%"
                alt="Dr.Chum Jcard"
              />
            </Link>
            <Link href={"/img/work/jcards/sb-jcard.jpg"}>
              <img
                src="/img/work/jcards/sb-jcard.jpg"
                width="100%"
                alt="Spastic Bombastic Jcard"
              />
            </Link>
            <Link href={"/img/work/jcards/hw-jcard.jpg"}>
              <img
                src="/img/work/jcards/hw-jcard.jpg"
                width="100%"
                alt="Hoodwink Jcard"
              />
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}

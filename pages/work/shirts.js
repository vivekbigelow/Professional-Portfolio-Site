import styles from "../../styles/Home.module.css";
import HeadWrapper from "../../components/HeadWrapper";
import Link from "next/link";
import Nav from "../../components/Nav";

export default function Shirts() {
  return (
    <div className={styles.container}>
      <HeadWrapper />

      <main className={styles.main}>
        <Nav />
        <article className={styles.article}>
          <h1>Shirts</h1>
        </article>
        <div className={styles.imgGrid}>
        <Link href={"/img/work/shirts/happyhappysmileysmiley.jpg"}>
              <img
                src="/img/work/shirts/happyhappysmileysmiley.jpg"
                width="100%"
                alt="Happy Happy Smiley Smiley Shirt"
              />
            </Link>
            <Link href={"/img/work/shirts/majik_hand_big.jpg"}>
              <img
                src="/img/work/shirts/majik_hand_big.jpg"
                width="100%"
                alt="Majik Hand Shirt"
              />
            </Link>
        </div>
      </main>
    </div>
  );
}

import styles from "../../styles/Home.module.css";
import HeadWrapper from "../../components/HeadWrapper";
import Link from "next/link";
import Nav from "../../components/Nav";

export default function Fliers() {
  return (
    <div className={styles.container}>
      <HeadWrapper />

      <main className={styles.main}>
        <Nav />
        <article className={styles.article}>
          <h1>Fliers</h1>
          <p>Fliers for shows in Indianapolis.</p>
          <div className={styles.imgGrid}>
          <Link href={"/img/work/fliers/nylon-flyer.jpg"}>
              <img
                src="/img/work/fliers/nylon-flyer.jpg"
                width="100%"
                alt="Nylon Flier"
              />
            </Link>
            <Link href={"/img/work/fliers/chess-flyer.jpg"}>
              <img
                src="/img/work/fliers/chess-flyer.jpg"
                width="100%"
                alt="Chess Flier"
              />
            </Link>
            <Link href={"/img/work/fliers/fakies-necromoon.jpg"}>
              <img
                src="/img/work/fliers/fakies-necromoon.jpg"
                width="100%"
                alt="Fakies Necromoon Flier"
              />
            </Link>
            <Link href={"/img/work/fliers/advertisement.jpg"}>
              <img
                src="/img/work/fliers/advertisement.jpg"
                width="100%"
                alt="Advertisement Flier"
              />
            </Link>
            <Link href={"/img/work/fliers/unclemuscle.jpg"}>
              <img
                src="/img/work/fliers/unclemuscle.jpg"
                width="100%"
                alt="Uncle Muscle Flier"
              />
            </Link>
            <Link href={"/img/work/fliers/corker-flier.jpg"}>
              <img
                src="/img/work/fliers/corker-flier.jpg"
                width="100%"
                alt="Corker Flier"
              />
            </Link>
            <Link href={"/img/work/fliers/blanky-flier.jpg"}>
              <img
                src="/img/work/fliers/blanky-flier.jpg"
                width="100%"
                alt="Blanky Flier"
              />
            </Link>
            <Link href={"/img/work/fliers/fakies-tundra.jpg"}>
              <img
                src="/img/work/fliers/fakies-tundra.jpg"
                width="100%"
                alt="Fakies Tundra Flier"
              />
            </Link>
            <Link href={"/img/work/fliers/blanky-fakies-hoodwink-flyer.jpg"}>
              <img
                src="/img/work/fliers/blanky-fakies-hoodwink-flyer.jpg"
                width="100%"
                alt="Blanky Fakies and Hoodwink Flier"
              />
            </Link>
            <Link href={"/img/work/fliers/spastic-flyer.jpg"}>
              <img
                src="/img/work/fliers/spastic-flyer.jpg"
                width="100%"
                alt="Spastic Bombastic Flier"
              />
            </Link>
            <Link href={"/img/work/fliers/spastic-run.jpg"}>
              <img
                src="/img/work/fliers/spastic-run.jpg"
                width="100%"
                alt="Spastic Bombastic Tour Flier"
              />
            </Link>
            <Link href={"/img/work/fliers/skullcult-flyer.jpg"}>
              <img
                src="/img/work/fliers/skullcult-flyer.jpg"
                width="100%"
                alt="Skullcult Flier"
              />
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}

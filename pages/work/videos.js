import styles from "../../styles/Home.module.css";
import HeadWrapper from "../../components/HeadWrapper";
import Link from "next/link";
import Nav from "../../components/Nav";

export default function Videos() {
  return (
    <div className={styles.container}>
      <HeadWrapper />

      <main className={styles.main}>
        <Nav />
        <article className={styles.article}>
          <h1>Videos</h1>
        </article>
        <div className={styles.imgGrid}>
          <iframe
            className={styles.videoFrame}
            width="466"
            height="315"
            src="https://www.youtube.com/embed/2m3r9rWgRhU?si=PqmUo6ZZjwytq7bl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen="true"
          ></iframe>
          <iframe
            className={styles.videoFrame}
            width="466"
            height="315"
            src="https://www.youtube.com/embed/98-3-Pgt83E?si=-p-bnMnStimaBzna"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen="true"
          ></iframe>
        </div>
      </main>
    </div>
  );
}

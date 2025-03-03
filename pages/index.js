//import Head from 'next/head'
import styles from "../styles/Home.module.css";
import Face from "../components/Face";
import HeadWrapper from "../components/HeadWrapper";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <HeadWrapper />

      <h1>VIVEK</h1>
      <h1>BIGELOW</h1>
      <p className={styles.aboutParagraph}>
        Vivek Bigelow is a multidisciplinary digital artist and designer based
        in Indianapolis Indiana. This site acts as a portfolio to showcase some
        of his work. Some of his areas of interest include web design, graphic
        design, video editing, music production, and photography.
      </p>
      <Nav />

      <Face />
    </div>
  );
}

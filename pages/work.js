import styles from "../styles/Home.module.css";
import HeadWrapper from "../components/HeadWrapper";
import Nav from "../components/Nav";
import ProjectGrid from "../components/ProjectGrid";

export default function Work() {
  return (
    <main className={styles.main}>
      <HeadWrapper />
      <Nav />

      <ProjectGrid />
    </main>
  );
}

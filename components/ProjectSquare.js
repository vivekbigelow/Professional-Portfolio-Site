import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ProjectGrid.module.css";

export default function ProjectSquare({ title }) {
  return (
   
        <Link
          href={"/work/" + title.split(" ").join("").toLowerCase()}
          className={styles.projectSquare}
        >
          <Image
            className={styles.projectImage}
            src={"/img/work/" + title.split(" ").join("") + "-cover.jpg"}
            width={466}
            height={466}
            alt={title}
          />
          <h2 className={styles.projectTitle}>{title}</h2>
        </Link>
       
     
  );
}

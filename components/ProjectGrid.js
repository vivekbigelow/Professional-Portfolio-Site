import ProjectSquare from "./ProjectSquare";
import styles from "../styles/ProjectGrid.module.css";

export default function ProjectGrid({ category }) {
  const projects = [
    { title: "Fliers", id: 4 },
    { title: "Jcards", id: 2 },
    { title: "Videos", id: 6 },
    { title: "Logos", id: 1 },
    { title: "Shirts", id: 3 },
    { title: "Collages", id: 5 },
  ];
  return (
    <div className={styles.grid}>
      {projects.map((project) => {
        return <ProjectSquare key={project.id} title={project.title} />;
      })}
    </div>
  );
}

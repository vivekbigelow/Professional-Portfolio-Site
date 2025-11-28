import { useEffect, useState, React } from "react";
import styles from "../styles/Home.module.css";
export default function HoverImage({
  imgSrc,
  imgAlt,
  content,
}) {
  const [showParagraph, setShowParagraph] = useState(false);
  const [paragraphPosition, setParagraphPosition] = useState({ x: 0, y: 0 });
 

  

  const handleMouseEnter = () => {
    setShowParagraph(true);
  };

  const handleMouseLeave = () => {
    setShowParagraph(false);
  };

  const handleMouseMove = (e) => {
    setParagraphPosition({ x: e.clientX - 150, y: e.clientY + 10 });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img
        className={styles.hoverImg}
        src={imgSrc}
        alt={imgAlt}
      />
      {showParagraph && (window.innerWidth > 1000) && (
        <p
          style={{
            position: "fixed", // Fixed positioning relative to the viewport
            top: paragraphPosition.y,
            left: paragraphPosition.x,
            backgroundColor: "orangered",
            color: "black",
            padding: "5px",
            pointerEvents: "none", // Prevents the paragraph from interfering with mouse events
            zIndex: 1000,
            width: "300px",
          }}
          className={styles.sectionParagraph}
        >
          {content}
        </p>
      )}
    </div>
  );
}

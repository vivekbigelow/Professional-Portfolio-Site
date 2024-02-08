import { useEffect, useState, React } from "react";
import Image from "next/image";

export default function Face() {
  const [mousePos, setMousePos] = useState({});
  const [faceImg, setFaceImg] = useState("front.jpg");

  useEffect(() => {
    const updateFace = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
      const h = document.body.clientHeight;
      const w = document.body.clientWidth;

      //check upper half
      if (mousePos.y / h < 0.25) {
        //top left
        if (mousePos.x / w < 0.25) {
          setFaceImg("top-left.jpg");
        }

        //up
        if ((mousePos.x / w > 0.25) & (mousePos.x / w < 0.75)) {
          setFaceImg("up.jpg");
        }

        //top right
        if (mousePos.x / w > 0.75) {
          setFaceImg("top-right.jpg");
        }
      }

      //check middle
      if ((mousePos.y / h > 0.25) & (mousePos.y / h < 0.75)) {
        //left
        if (mousePos.x / w < 0.25) {
          setFaceImg("left.jpg");
        }

        //center
        if ((mousePos.x / w > 0.25) & (mousePos.x / w < 0.75)) {
          setFaceImg("front.jpg");
        }

        //right
        if (mousePos.x / w > 0.75) {
          setFaceImg("right.jpg");
        }
      }

      //check bottom
      if (mousePos.y / h > 0.75) {
        //bottom-left
        if (mousePos.x / w < 0.25) {
          setFaceImg("bottom-left.jpg");
        }

        //down
        if ((mousePos.x / w > 0.25) & (mousePos.x / w < 0.75)) {
          setFaceImg("down.jpg");
        }

        //bottom-right
        if (mousePos.x / w > 0.75) {
          setFaceImg("bottom-right.jpg");
        }
      }
    };
    window.addEventListener("mousemove", updateFace);
    return () => {
      window.removeEventListener("mousemove", updateFace);
    };
  }, [mousePos]);

  return (
    <main>
      <Image
        id="face"
        className="face"
        src={"/img/face/" + faceImg}
        width={300}
        height={380}
        alt="face"
      />
    </main>
  );
}

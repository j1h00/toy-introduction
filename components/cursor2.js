import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import styles from "../styles/Cursor.module.css";

function Cursor() {
  const cursorDOM = useRef();

  useEffect(async () => {
    const cursorTag = cursorDOM.current;
    const balls = cursorTag.querySelector("div");

    if (typeof window !== "undefined") {
      document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        gsap.set(cursorTag, {
          x: mouseX,
          y: mouseY,
        });
      });
    }
  }, []);
  return (
    <div className={styles.cursor} ref={cursorDOM}>
      <div></div>
    </div>
  );
}

export default Cursor;

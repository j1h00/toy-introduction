import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import styles from "../styles/Shape.module.css";

function Shape() {
  const shapesDOM = useRef();

  useEffect(() => {
    const shapeTag = shapesDOM.current;

    if (typeof window !== "undefined") {
      document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        gsap.to(shapeTag, {
          x: mouseX,
          y: mouseY,
          stagger: -1,
        });
      });
    }
  }, []);
  return (
    <div className={styles.shapes} ref={shapesDOM}>
      <div className={(styles.shape, styles.shape1)}></div>
      <div className={(styles.shape, styles.shape2)}></div>
      <div className={(styles.shape, styles.shape3)}></div>
    </div>
  );
}

export default Shape;

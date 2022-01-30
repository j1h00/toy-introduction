import { useEffect, useRef } from "react";
import styles from "../styles/Cursor.module.css";

function Cursor() {
  const ref = useRef();

  useEffect(async () => {
    const cursorTag = await ref.current;
    const balls = await cursorTag.querySelectorAll("div");

    let aimX = 0;
    let aimY = 0;

    const animate = ({ ball, currentX, currentY, speed }) => {
      currentX += (aimX + currentX) * speed;
      currentY += (aimY + currentY) * speed;

      ball.style.left = currentX + "px";
      ball.style.top = currentY + "py";

      ref.current = requestAnimationFrame(animate);
    };

    balls.forEach((ball, idx) => {
      let currentX = 0;
      let currentY = 0;
      let speed = 0.2 - idx * 0.01;

      animate(ball, currentX, currentY, speed);
    });

    ref.current = requestAnimationFrame(animate);
    if (typeof window !== "undefined") {
      document.addEventListener("mousemove", (e) => {
        aimX = e.pageX;
        aimY = e.pageY;
      });
    }

    document.add;
  }, []);
  return (
    <div className={styles.cursor} ref={ref}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Cursor;

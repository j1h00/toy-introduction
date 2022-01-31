import Landing from "../components/landing";
import Description from "../components/Description";
import Cursor from "../components/cursor";
import { useEffect, useRef } from "react";

export default function Home() {
  // const indexDOM = useRef();
  // useEffect(() => {
  //   const indexBox = indexDOM.current;
  //   const cursor = indexBox.querySelector(".cursor");

  //   const svgTags = indexBox.querySelectorAll("svg");
  //   const pTags = indexBox.querySelectorAll("p");

  //   pTags.forEach((p) => {
  //     console.log(p);
  //     p.addEventListener("mouseleave", () => {
  //       cursor.classList.remove("link-grow");
  //       p.classList.remove("hovered-link");
  //       console.log("out");
  //     });
  //     p.addEventListener("mouseover", () => {
  //       cursor.classList.add("link-grow");
  //       p.classList.add("hovered-link");
  //       console.log("in");
  //     });
  //   });
  // }, []);

  return (
    // <div className="h-full bg-black" ref={indexDOM}>
    <div className="h-full bg-black">
      <Cursor />
      <div className="container mx-auto">
        <Landing />;
        <Description />
      </div>
    </div>
  );
}

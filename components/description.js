import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import cn from "classnames";
import styles from "../styles/Description.module.css";
import photo1 from "../public/photo1.jpg";
import photo2 from "../public/photo2.jpg";
import photo3 from "../public/photo3.jpg";
import photo4 from "../public/photo4.jpg";

export default function Description() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef();

  useEffect(() => {
    const descriptionPageDOM = ref.current;
    const p1 = descriptionPageDOM.querySelector(".p1");
    const p2 = descriptionPageDOM.querySelector(".p2");
    const p3 = descriptionPageDOM.querySelector(".p3");
    const p4 = descriptionPageDOM.querySelector(".p4");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: p1,
        start: "50%",
        end: "100%",
        scrub: 1,
      },
    });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: p2,
        start: "50%",
        end: "100%",
        scrub: 1,
      },
    });

    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: p3,
        start: "50%",
        end: "100%",
        scrub: 1,
      },
    });

    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: p4,
        start: "50%",
        end: "100%",
        scrub: 1,
      },
    });

    tl.fromTo(p1, { opacity: "100%" }, { opacity: "0%" });
    tl2.fromTo(p2, { opacity: "100%" }, { opacity: "0%" });
    tl3.fromTo(p3, { opacity: "100%" }, { opacity: "0%" });
    tl4.fromTo(p4, { opacity: "100%" }, { opacity: "0%" });
  }, [ref]);

  return (
    <div className={cn(styles.dScreen, "text-white")} ref={ref}>
      {/* page 1 */}
      <div className={cn("p1", styles.pScreen, "relative")}>
        <div className="sticky top-0">
          <div className={cn(styles.d1, "absolute", "text-2xl")}>I'm</div>
          <div className={cn(styles.d2, "absolute", "text-2xl")}>
            from Seoul, Korea.
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-start-5 col-span-8 flex flex-col gap-3 mt-32">
            <div className="w-full h-96 flex text-xs">
              <div className="w-1/3 flex flex-col items-center">
                <div className="w-full">
                  <Image
                    src={photo1}
                    alt="me"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
                Heewoojeongro 38, Mapo-gu
              </div>
              <div className="w-1/3 flex flex-col items-center">
                <div className="w-full">
                  <Image
                    src={photo2}
                    alt="me"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
                Cafe TERTRE, Naksan 5-gil, Jongno-gu
              </div>
              <div className="w-1/3 flex flex-col items-center">
                <div className="w-full">
                  <Image
                    src={photo3}
                    alt="me"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
                Achasan Sunrise Park
              </div>
            </div>
          </div>
          <Image
            src={photo1}
            alt="me"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
          <Image
            src={photo2}
            alt="me"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
          <Image
            src={photo3}
            alt="me"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
          <div className="col-start-4 md:col-start-8 col-span-4 flex flex-col gap-3 mt-32">
            <div className="h-96 bg-indigo-900">2</div>
            <div className="h-96 bg-red-900">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1EUMDoJuT8yJsl?utm_source=generator"
                width="100%"
                height="380"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* page 2 */}
      <div className={cn("p2", styles.pScreen, "relative")}>
        <div className="sticky top-0">
          <div className={cn(styles.d1, "absolute", "text-2xl")}></div>
          <div className={cn(styles.d2, "absolute", "text-2xl")}>
            <p>graduated SNU</p>
            <br />
            <p>major in biological science</p>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-start-4 md:col-start-8 flex flex-col gap-3 mt-20">
            <div className="w-96 h-96 bg-white">1</div>
            <div className="w-96 h-96 bg-indigo-900">2</div>
            <div className="w-96 h-96 bg-red-900">3</div>
          </div>
        </div>
      </div>
      {/* page 3 */}
      <div className={cn("p3", styles.pScreen, "relative")}>
        <div className="sticky top-0">
          <div className={cn(styles.d1, "absolute", "text-2xl")}></div>
          <div className={cn(styles.d2, "absolute", "text-2xl")}>skills</div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-start-4 md:col-start-8 flex flex-col gap-3 mt-20">
            <div className="w-96 h-96 bg-white">1</div>
            <div className="w-96 h-96 bg-indigo-900">2</div>
            <div className="w-96 h-96 bg-red-900">3</div>
          </div>
        </div>
      </div>
      {/* page 4 */}
      <div className={cn("p4", styles.pScreen, "relative")}>
        <div className="sticky top-0">
          <div className={cn(styles.d1, "absolute", "text-2xl")}></div>
          <div className={cn(styles.d2, "absolute", "text-2xl")}>projects</div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-start-4 md:col-start-8 flex flex-col gap-3 mt-20">
            <div className="w-96 h-96 bg-white">1</div>
            <div className="w-96 h-96 bg-indigo-900">2</div>
            <div className="w-96 h-96 bg-red-900">3</div>
          </div>
        </div>
      </div>
      {/* page last */}
      <div className={cn("p5", "h-screen", "relative")}>
        <div className="grid grid-cols-12">
          <div className="col-start-4 md:col-start-8 flex flex-col gap-3 mt-20">
            <div className="w-96 h-96 bg-white">1</div>
            <div className="w-96 h-96 bg-indigo-900">2</div>
          </div>
          <div className="col-start-8 col-span-4">written by jihoo</div>
        </div>
      </div>
    </div>
  );
}

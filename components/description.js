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
import photo5 from "../public/photo5.jpg";
import cLogo from "../public/C.png";
import pythonLogo from "../public/python.png";
import javascriptLogo from "../public/javascript.png";
import reactLogo from "../public/react.png";
import nextLogo from "../public/next.png";
import django from "../public/django.png";
import pandas from "../public/pandas.png";

export default function Description() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef();

  useEffect(() => {
    const descriptionPageDOM = ref.current;
    const p1a = descriptionPageDOM.querySelector(".p1a");
    const p1b = descriptionPageDOM.querySelector(".p1b");
    const p2a = descriptionPageDOM.querySelector(".p2a");
    const p2b = descriptionPageDOM.querySelector(".p2b");
    const p2c = descriptionPageDOM.querySelector(".p2c");
    const p3 = descriptionPageDOM.querySelector(".p3");
    const p4 = descriptionPageDOM.querySelector(".p4");

    let tl1a = gsap.timeline({
      scrollTrigger: {
        trigger: p1a,
        start: "70%",
        end: "100%",
        scrub: 1,
      },
    });

    let tl1b = gsap.timeline({
      scrollTrigger: {
        trigger: p1b,
        start: "70%",
        end: "100%",
        scrub: 1,
      },
    });

    let tl2a = gsap.timeline({
      scrollTrigger: {
        trigger: p2a,
        start: "60%",
        end: "100%",
        scrub: 1,
      },
    });

    let tl2b = gsap.timeline({
      scrollTrigger: {
        trigger: p2b,
        start: "60%",
        end: "100%",
        scrub: 1,
      },
    });

    let tl2c = gsap.timeline({
      scrollTrigger: {
        trigger: p2c,
        start: "30%",
        end: "80%",
        scrub: 1,
      },
    });

    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: p3,
        start: "60%",
        end: "100%",
        scrub: 1,
      },
    });

    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: p4,
        start: "60%",
        end: "100%",
        scrub: 1,
      },
    });

    tl1a.fromTo(p1a, { opacity: "100%" }, { opacity: "0%" });
    tl1b.fromTo(p1b, { opacity: "100%" }, { opacity: "0%" });
    tl2a.fromTo(p2a, { opacity: "100%" }, { opacity: "0%" });
    tl2b.fromTo(p2b, { opacity: "100%" }, { opacity: "0%" });
    tl2c.fromTo(p2c, { opacity: "100%" }, { opacity: "0%" });
    tl3.fromTo(p3, { opacity: "100%" }, { opacity: "0%" });
    tl4.fromTo(p4, { opacity: "100%" }, { opacity: "0%" });
  }, [ref]);

  return (
    <div className={cn(styles.dScreen, "text-white")} ref={ref}>
      {/* page 1a */}
      <div className={cn("p1a", styles.pScreen1a, "relative")}>
        <div className="sticky top-0 title">
          <div className={cn(styles.d1, "absolute", "text-2xl")}>
            <p>I'm</p>
          </div>
          <div className={cn(styles.d2, "absolute", "text-2xl")}>
            <p>from Seoul, Korea.</p>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-start-4 md:col-start-8 flex flex-col gap-5 mt-32 text-xs">
            <div className="relative w-96 h-96">
              <div className="absolute z-0 w-96 h-96">
                <Image
                  src={photo1}
                  alt="me"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  priority={true}
                />
              </div>
              <div className="absolute -bottom-4 w-full flex justify-center">
                <p>Heewoojeongro 38, Mapo-gu</p>
              </div>
            </div>
            <div className="relative w-96 h-96">
              <div className="absolute z-0 w-96 h-96">
                <Image
                  src={photo2}
                  alt="me"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  priority={true}
                />
              </div>
              <div className="absolute -bottom-4 w-full flex justify-center">
                <p>TERTRE, Naksan 5-gil, Jongno-gu</p>
              </div>
            </div>
            <div className="relative w-96 h-96">
              <div className="absolute z-0 w-96 h-96">
                <Image
                  src={photo3}
                  alt="me"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  priority={true}
                />
              </div>
              <div className="absolute -bottom-4 w-full flex justify-center">
                <p>Achasan Sunrise Park</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page 1b */}
      <div className={cn("p1b", styles.pScreen1b, "relative")}>
        <div className="sticky top-0 title">
          <div className={cn(styles.d1, "absolute", "text-xl", "-ml-2")}>
            <p>well,</p>
          </div>
          <div className={cn(styles.d2, "absolute", "text-2xl")}>
            <p>loves music, try this playlist!</p>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-start-4 md:col-start-8 flex flex-col gap-5 mt-32 text-xs">
            <div className="relative w-96 h-96">
              <div className="absolute w-full iframe">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/playlist/1yRcHG3d0iYhPxPHTgKu9d?utm_source=generator"
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
      </div>
      {/* page 2a */}
      <div className={cn("p2a", styles.pScreen2a, "relative")}>
        <div className="sticky top-0 title">
          <div className={cn(styles.d2, "absolute", "text-2xl")}>
            <p>Graduated from SNU</p>
            <p>majoring in biological science</p>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-start-4 md:col-start-8 flex flex-col gap-3 mt-32">
            <div className="relative w-96 h-96">
              <div className="absolute z-0 w-96 h-96">
                <Image
                  src={photo4}
                  alt="me"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page 2b */}
      <div className={cn("p2b", styles.pScreen2b, "relative")}>
        <div className="sticky top-0 title">
          <div className={cn(styles.d2, "absolute", "text-2xl")}>
            <p>Also learned computer science</p>
            <p>and language</p>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-start-4 md:col-start-8 flex flex-col gap-3 mt-32">
            <div className="w-96 h-32 flex">
              <div className="w-32 h-32">
                <Image src={cLogo} alt="c-logo" />
              </div>
              <div className="w-32 h-32">
                <Image src={pythonLogo} alt="python-logo" />
              </div>
            </div>
            <div className="w-96 h-48">
              <p>Introduction to Computer Science for Biologists</p>
              <p>Concept of Computer and Practice</p>
              <p>Programmgin Practice</p>
              <p>Introduction to Bioinformatics</p>
              <p>Data Structure </p>
            </div>
          </div>
        </div>
      </div>
      {/* page 2c */}
      <div className={cn("p2c", styles.pScreen2c, "relative")}>
        <div className="sticky top-0 title">
          <div className={cn(styles.d2, "absolute", "text-2xl")}>
            <p>now in SSAFY since 07.2021 </p>
          </div>
        </div>
      </div>

      {/* page 3 */}
      <div className={cn("p3", styles.pScreen, "relative")}>
        <div className="sticky top-0">
          <div className={cn(styles.d1, "absolute", "text-2xl")}></div>
          <div className={cn(styles.d2, "absolute", "text-2xl")}>'s skills</div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-start-4 md:col-start-8 flex flex-col gap-3 mt-20">
            <div className="w-96 h-32 bg-white"></div>
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
        <div className="sticky top-0">
          <div className={cn(styles.d1, "absolute", "text-2xl")}></div>
          <div className={cn(styles.d2, "absolute", "text-2xl")}>contacts</div>
        </div>
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

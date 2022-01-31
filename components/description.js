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
        start: "70%",
        end: "100%",
        scrub: 1,
      },
    });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: p2,
        start: "60%",
        end: "100%",
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

    tl.fromTo(p1, { opacity: "100%" }, { opacity: "0%" });
    tl2.fromTo(p2, { opacity: "100%" }, { opacity: "0%" });
    tl3.fromTo(p3, { opacity: "100%" }, { opacity: "0%" });
    tl4.fromTo(p4, { opacity: "100%" }, { opacity: "0%" });
  }, [ref]);

  return (
    <div className={cn(styles.dScreen, "text-white")} ref={ref}>
      {/* page 1 */}
      <div className={cn("p1", styles.pScreen1, "relative")}>
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

            <div className="w-96 h-96 bg-indigo-900">2</div>
            <div className="relative w-96 h-96 bg-red-900">
              <div className="absolute w-full iframe">
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
      </div>
      {/* page 2 */}
      <div className={cn("p2", styles.pScreen, "relative")}>
        <div className="grid grid-cols-12">
          <div className="relative col-start-3 col-span-10 flex flex-col gap-3 mt-32">
            <div className="sticky top-0 title">
              <div className={cn(styles.d3, "absolute", "text-2xl")}>
                <p>experience</p>
                <br />
                <p>Graduated from SNU majoring in biological science</p>
              </div>
            </div>
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
            <div className="relative w-96 h-96">
              <div className="absolute z-0 w-96 h-96">
                <Image
                  src={photo5}
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
          <div className="col-start-4 md:col-start-8 flex flex-col gap-3 mt-32">
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
          <div className="sticky top-0">
            <div className={cn(styles.d1, "absolute", "text-2xl")}></div>
            <div className={cn(styles.d2, "absolute", "text-2xl")}>
              contacts
            </div>
          </div>
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

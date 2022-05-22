import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import cn from "classnames";
import styles from "../styles/Landing.module.css";

export default function Landing() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef();

  useEffect(() => {
    const landingPageDOM = ref.current;
    const slidingText = landingPageDOM.querySelector(".sliding-text");
    const logo = landingPageDOM.querySelector(".logo");
    const gotoTopButton = landingPageDOM.querySelector(".scrollTop");

    if (typeof window !== undefined) {
      gotoTopButton.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: landingPageDOM,
        start: "0%",
        end: "80%",
        scrub: 1,
      },
    });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: landingPageDOM,
        start: "0%",
        end: "80%",
        scrub: 1,
      },
    });

    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: landingPageDOM,
        start: "700%",
        end: "800%",
        scrub: 1,
      },
    });

    tl.fromTo(slidingText, { y: 0 }, { y: -400 });
    tl2.fromTo(logo, { scale: 1 }, { scale: 0.5, top: "5rem", left: "10rem" });

    tl3.to(logo, { scale: 1, top: "50%", left: "50%" });
    tl3.fromTo(gotoTopButton, { y: 1000 }, { y: 800 });

    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: landingPageDOM,
        start: "0%",
        end: "900%",
        scrub: 1,
        pin: true,
        pinSpacing: false,
      },
    });
  }, [ref]);

  return (
    <div className={cn(styles.home, "h-screen")} ref={ref}>
      <svg
        className={cn(styles.logo, "logo", "md:scale-150")}
        width="356"
        height="158"
        viewBox="0 0 356 158"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.9905 22.3965L19.015 22.4225L19.0402 22.4478C21.2482 24.6557 24.0008 25.772 27.144 25.772C30.277 25.772 33.0022 24.6607 35.1289 22.4226C37.3202 20.2189 38.428 17.4752 38.428 14.344C38.428 11.2128 37.3202 8.46911 35.1289 6.26543C33.0023 4.02729 30.277 2.91599 27.144 2.91599C24.0008 2.91599 21.2482 4.03226 19.0402 6.24022L19.015 6.26547L18.9905 6.29143C16.8965 8.50855 15.86 11.245 15.86 14.344C15.86 17.443 16.8965 20.1794 18.9905 22.3965ZM2.612 152.44V154.94H5.112H12.744C19.9281 154.94 25.8139 153.22 29.9876 149.385C34.2514 145.467 36.124 139.522 36.124 132.136V36.088V33.588H33.624H20.52H18.02V36.088V131.848C18.02 135.039 17.2943 136.629 16.5061 137.368L16.4767 137.396L16.4482 137.424C15.7326 138.14 14.0492 138.852 10.584 138.852H5.112H2.612V141.352V152.44ZM71.4108 36.088V33.588H68.9108H55.8068H53.3068V36.088V115V117.5H55.8068H68.9108H71.4108V115V36.088ZM161.948 117.5H164.448V115V68.488C164.448 60.8859 162.999 54.2635 159.974 48.7276C157.068 43.2346 152.978 39.07 147.711 36.3269C142.518 33.5265 136.733 32.148 130.412 32.148C124.415 32.148 118.904 33.319 113.924 35.7055L113.915 35.7099L113.905 35.7144C111.26 37.0088 108.905 38.6008 106.848 40.4892V8.43999V5.93999H104.348H91.2442H88.7442V8.43999V115V117.5H91.2442H104.348H106.848V115V71.368C106.848 63.5002 108.766 57.9213 112.214 54.2207C115.794 50.4796 120.616 48.524 126.956 48.524C133.215 48.524 137.878 50.4396 141.255 54.0643L141.265 54.0748L141.275 54.0852C144.622 57.5956 146.488 62.883 146.488 70.36V115V117.5H148.988H161.948ZM196.381 113.433L196.388 113.437L196.396 113.441C202.84 117.022 209.983 118.796 217.77 118.796C225.647 118.796 232.88 117.024 239.417 113.449C245.967 109.868 251.145 104.789 254.922 98.2575C258.82 91.5882 260.734 83.9433 260.734 75.4C260.734 66.8729 258.875 59.2808 255.077 52.7054C251.399 46.1715 246.315 41.1313 239.851 37.6393C233.404 34.0611 226.217 32.292 218.346 32.292C210.474 32.292 203.287 34.0611 196.841 37.6394C190.368 41.1358 185.239 46.228 181.469 52.8512L181.463 52.8623C177.768 59.4316 175.958 66.9693 175.958 75.4C175.958 83.9106 177.712 91.5292 181.296 98.1852L181.307 98.2055L181.319 98.2256C184.991 104.754 190.018 109.841 196.381 113.433ZM238.798 90.2625L238.787 90.2801L238.777 90.2979C236.494 94.337 233.513 97.2938 229.839 99.2595C226.075 101.273 222.064 102.276 217.77 102.276C213.464 102.276 209.56 101.315 206.013 99.4163C202.548 97.4674 199.708 94.5298 197.512 90.4967C195.447 86.5295 194.35 81.5333 194.35 75.4C194.35 69.3744 195.491 64.432 197.646 60.4658C199.844 56.4225 202.681 53.5365 206.136 51.6829L206.145 51.6778L206.154 51.6727C209.802 49.6754 213.802 48.668 218.202 48.668C222.496 48.668 226.45 49.6712 230.105 51.6727L230.125 51.6838L230.146 51.6946C233.703 53.5581 236.634 56.4557 238.921 60.5021C241.158 64.4603 242.342 69.3892 242.342 75.4C242.342 81.3959 241.117 86.3115 238.798 90.2625ZM288.49 113.433L288.497 113.437L288.505 113.441C294.95 117.022 302.092 118.796 309.879 118.796C317.756 118.796 324.989 117.024 331.527 113.449C338.077 109.867 343.255 104.788 347.033 98.255C350.93 91.5863 352.843 83.9422 352.843 75.4C352.843 66.8725 350.985 59.28 347.186 52.7044C343.508 46.1711 338.425 41.1315 331.961 37.6397C325.514 34.0612 318.327 32.292 310.455 32.292C302.583 32.292 295.396 34.0611 288.949 37.6396C282.477 41.1361 277.348 46.2281 273.578 52.8512L273.572 52.8623C269.877 59.4316 268.067 66.9693 268.067 75.4C268.067 83.9106 269.822 91.5292 273.406 98.1852L273.417 98.2055L273.428 98.2256C277.101 104.754 282.128 109.841 288.49 113.433ZM330.907 90.2625L330.897 90.2801L330.887 90.2979C328.604 94.337 325.623 97.2938 321.948 99.2595C318.184 101.273 314.174 102.276 309.879 102.276C305.573 102.276 301.669 101.315 298.122 99.4161C294.657 97.4672 291.817 94.5297 289.622 90.4967C287.557 86.5295 286.459 81.5333 286.459 75.4C286.459 69.3744 287.6 64.432 289.756 60.4658C291.953 56.4225 294.791 53.5365 298.245 51.6829L298.254 51.6778L298.264 51.6727C301.911 49.6754 305.911 48.668 310.311 48.668C314.605 48.668 318.559 49.6712 322.214 51.6727L322.234 51.6838L322.255 51.6946C325.813 53.5581 328.743 56.4557 331.031 60.5021C333.268 64.4603 334.451 69.3892 334.451 75.4C334.451 81.3959 333.226 86.3115 330.907 90.2625ZM54.471 22.4478C56.6789 24.6557 59.4316 25.772 62.5747 25.772C65.643 25.772 68.31 24.639 70.4157 22.4225C72.6069 20.2188 73.7148 17.4752 73.7148 14.344C73.7148 11.2128 72.607 8.46914 70.4157 6.26546C68.31 4.04902 65.643 2.91599 62.5747 2.91599C59.4316 2.91599 56.6789 4.03226 54.471 6.24022C52.263 8.44818 51.1468 11.2008 51.1468 14.344C51.1468 17.4871 52.263 20.2398 54.471 22.4478Z"
          stroke="white"
          strokeWidth="5"
        />
      </svg>
      <h1 className={cn(styles.smallLogo, "sliding-text", "text-white")}>
        <div className="flex flex-col items-center">
          scroll down
          <span className="material-icons -mt-1 animate-bounce">
            expand_more
          </span>
        </div>
      </h1>
      <h1 className={cn(styles.scrollTop, "scrollTop", "text-white")}>
        <div className="flex flex-col items-center">
          <span className="material-icons -mt-1 animate-bounce">
            expand_less
          </span>
          move to top
        </div>
      </h1>
    </div>
  );
}
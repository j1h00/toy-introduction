(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{223:function(A,e,s){"use strict";s.r(e),s.d(e,{default:function(){return Q}});var t=s(7294),i=s(9521),l=s(6546),r=s(4184),a=s.n(r),c=s(8277),n=s.n(c),o=s(5893);function d(){i.gsap.registerPlugin(l.ScrollTrigger);var A=(0,t.useRef)();return(0,t.useEffect)((function(){var e=A.current,s=e.querySelector(".sliding-text"),t=e.querySelector(".logo"),l=e.querySelector(".scrollTop");l.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));var r=i.gsap.timeline({scrollTrigger:{trigger:e,start:"0%",end:"80%",scrub:1}}),a=i.gsap.timeline({scrollTrigger:{trigger:e,start:"0%",end:"80%",scrub:1}}),c=i.gsap.timeline({scrollTrigger:{trigger:e,start:"700%",end:"800%",scrub:1}});r.fromTo(s,{y:0},{y:-400}),a.fromTo(t,{scale:1},{scale:.5,top:"5rem",left:"10rem"}),c.to(t,{scale:1,top:"50%",left:"50%"}),c.fromTo(l,{y:1e3},{y:800});i.gsap.timeline({scrollTrigger:{trigger:e,start:"0%",end:"900%",scrub:1,pin:!0,pinSpacing:!1}})}),[A]),(0,o.jsxs)("div",{className:a()(n().home,"h-screen"),ref:A,children:[(0,o.jsx)("svg",{className:a()(n().logo,"logo","md:scale-150"),width:"356",height:"158",viewBox:"0 0 356 158",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M18.9905 22.3965L19.015 22.4225L19.0402 22.4478C21.2482 24.6557 24.0008 25.772 27.144 25.772C30.277 25.772 33.0022 24.6607 35.1289 22.4226C37.3202 20.2189 38.428 17.4752 38.428 14.344C38.428 11.2128 37.3202 8.46911 35.1289 6.26543C33.0023 4.02729 30.277 2.91599 27.144 2.91599C24.0008 2.91599 21.2482 4.03226 19.0402 6.24022L19.015 6.26547L18.9905 6.29143C16.8965 8.50855 15.86 11.245 15.86 14.344C15.86 17.443 16.8965 20.1794 18.9905 22.3965ZM2.612 152.44V154.94H5.112H12.744C19.9281 154.94 25.8139 153.22 29.9876 149.385C34.2514 145.467 36.124 139.522 36.124 132.136V36.088V33.588H33.624H20.52H18.02V36.088V131.848C18.02 135.039 17.2943 136.629 16.5061 137.368L16.4767 137.396L16.4482 137.424C15.7326 138.14 14.0492 138.852 10.584 138.852H5.112H2.612V141.352V152.44ZM71.4108 36.088V33.588H68.9108H55.8068H53.3068V36.088V115V117.5H55.8068H68.9108H71.4108V115V36.088ZM161.948 117.5H164.448V115V68.488C164.448 60.8859 162.999 54.2635 159.974 48.7276C157.068 43.2346 152.978 39.07 147.711 36.3269C142.518 33.5265 136.733 32.148 130.412 32.148C124.415 32.148 118.904 33.319 113.924 35.7055L113.915 35.7099L113.905 35.7144C111.26 37.0088 108.905 38.6008 106.848 40.4892V8.43999V5.93999H104.348H91.2442H88.7442V8.43999V115V117.5H91.2442H104.348H106.848V115V71.368C106.848 63.5002 108.766 57.9213 112.214 54.2207C115.794 50.4796 120.616 48.524 126.956 48.524C133.215 48.524 137.878 50.4396 141.255 54.0643L141.265 54.0748L141.275 54.0852C144.622 57.5956 146.488 62.883 146.488 70.36V115V117.5H148.988H161.948ZM196.381 113.433L196.388 113.437L196.396 113.441C202.84 117.022 209.983 118.796 217.77 118.796C225.647 118.796 232.88 117.024 239.417 113.449C245.967 109.868 251.145 104.789 254.922 98.2575C258.82 91.5882 260.734 83.9433 260.734 75.4C260.734 66.8729 258.875 59.2808 255.077 52.7054C251.399 46.1715 246.315 41.1313 239.851 37.6393C233.404 34.0611 226.217 32.292 218.346 32.292C210.474 32.292 203.287 34.0611 196.841 37.6394C190.368 41.1358 185.239 46.228 181.469 52.8512L181.463 52.8623C177.768 59.4316 175.958 66.9693 175.958 75.4C175.958 83.9106 177.712 91.5292 181.296 98.1852L181.307 98.2055L181.319 98.2256C184.991 104.754 190.018 109.841 196.381 113.433ZM238.798 90.2625L238.787 90.2801L238.777 90.2979C236.494 94.337 233.513 97.2938 229.839 99.2595C226.075 101.273 222.064 102.276 217.77 102.276C213.464 102.276 209.56 101.315 206.013 99.4163C202.548 97.4674 199.708 94.5298 197.512 90.4967C195.447 86.5295 194.35 81.5333 194.35 75.4C194.35 69.3744 195.491 64.432 197.646 60.4658C199.844 56.4225 202.681 53.5365 206.136 51.6829L206.145 51.6778L206.154 51.6727C209.802 49.6754 213.802 48.668 218.202 48.668C222.496 48.668 226.45 49.6712 230.105 51.6727L230.125 51.6838L230.146 51.6946C233.703 53.5581 236.634 56.4557 238.921 60.5021C241.158 64.4603 242.342 69.3892 242.342 75.4C242.342 81.3959 241.117 86.3115 238.798 90.2625ZM288.49 113.433L288.497 113.437L288.505 113.441C294.95 117.022 302.092 118.796 309.879 118.796C317.756 118.796 324.989 117.024 331.527 113.449C338.077 109.867 343.255 104.788 347.033 98.255C350.93 91.5863 352.843 83.9422 352.843 75.4C352.843 66.8725 350.985 59.28 347.186 52.7044C343.508 46.1711 338.425 41.1315 331.961 37.6397C325.514 34.0612 318.327 32.292 310.455 32.292C302.583 32.292 295.396 34.0611 288.949 37.6396C282.477 41.1361 277.348 46.2281 273.578 52.8512L273.572 52.8623C269.877 59.4316 268.067 66.9693 268.067 75.4C268.067 83.9106 269.822 91.5292 273.406 98.1852L273.417 98.2055L273.428 98.2256C277.101 104.754 282.128 109.841 288.49 113.433ZM330.907 90.2625L330.897 90.2801L330.887 90.2979C328.604 94.337 325.623 97.2938 321.948 99.2595C318.184 101.273 314.174 102.276 309.879 102.276C305.573 102.276 301.669 101.315 298.122 99.4161C294.657 97.4672 291.817 94.5297 289.622 90.4967C287.557 86.5295 286.459 81.5333 286.459 75.4C286.459 69.3744 287.6 64.432 289.756 60.4658C291.953 56.4225 294.791 53.5365 298.245 51.6829L298.254 51.6778L298.264 51.6727C301.911 49.6754 305.911 48.668 310.311 48.668C314.605 48.668 318.559 49.6712 322.214 51.6727L322.234 51.6838L322.255 51.6946C325.813 53.5581 328.743 56.4557 331.031 60.5021C333.268 64.4603 334.451 69.3892 334.451 75.4C334.451 81.3959 333.226 86.3115 330.907 90.2625ZM54.471 22.4478C56.6789 24.6557 59.4316 25.772 62.5747 25.772C65.643 25.772 68.31 24.639 70.4157 22.4225C72.6069 20.2188 73.7148 17.4752 73.7148 14.344C73.7148 11.2128 72.607 8.46914 70.4157 6.26546C68.31 4.04902 65.643 2.91599 62.5747 2.91599C59.4316 2.91599 56.6789 4.03226 54.471 6.24022C52.263 8.44818 51.1468 11.2008 51.1468 14.344C51.1468 17.4871 52.263 20.2398 54.471 22.4478Z",stroke:"white",strokeWidth:"5"})}),(0,o.jsx)("h1",{className:a()(n().smallLogo,"sliding-text","text-white"),children:(0,o.jsxs)("div",{className:"flex flex-col items-center",children:["scroll down",(0,o.jsx)("span",{className:"material-icons -mt-1 animate-bounce",children:"expand_more"})]})}),(0,o.jsx)("h1",{className:a()(n().scrollTop,"scrollTop","text-white"),children:(0,o.jsxs)("div",{className:"flex flex-col items-center",children:[(0,o.jsx)("span",{className:"material-icons -mt-1 animate-bounce",children:"expand_less"}),"move to top"]})})]})}var g=s(5675),h=s(8016),x=s.n(h),p={src:"/portfolio//_next/static/media/photo1.e3d2e85b.jpg",height:3024,width:4032,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAKxD/8QAGxAAAQQDAAAAAAAAAAAAAAAAAgEEBREAA3L/2gAIAQEAAT8Ak48lNk4PbdOCSuc//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEx/9oACAECAQE/AHT/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwCv/9k="},m={src:"/portfolio//_next/static/media/photo2.90019e2a.jpg",height:3089,width:2048,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAALxY/8QAHhAAAAQHAAAAAAAAAAAAAAAAAAECBAMFBhIictL/2gAIAQEAAT8AjVU0wtljxGpo6H//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwCP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="},j={src:"/portfolio//_next/static/media/photo3.53ddf491.jpg",height:3024,width:4032,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAlDn/AP/EAB4QAAICAAcAAAAAAAAAAAAAAAECAwQABQYRITFi/9oACAEBAAE/ANS5zbplUSOJQLL+9wgHY4x//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIAEf/aAAgBAgEBPwCwqupv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEhAv/aAAgBAwEBPwDMUP/Z"},u={src:"/portfolio//_next/static/media/photo4.920d73a7.jpg",height:3024,width:4032,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAwX/2gAMAwEAAhADEAAAALRMD//EAB0QAAICAQUAAAAAAAAAAAAAAAECAwUABBESEyH/2gAIAQEAAT8AnYamwsUDyp1SoDsfCeAOf//EABoRAAAHAAAAAAAAAAAAAAAAAAABAgMEE3H/2gAIAQIBAT8AkqO9zR//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="},v={src:"/portfolio//_next/static/media/C.bf01edf4.png",height:599,width:564,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA0klEQVR42mOAAc+m7awMDPNlGBjmAnErI1xi+trjcM6U1ccKJ68+Vte26BAziD9nwwlGhhU7z4A4IHraql1nrgPxSSB7EgMDA0yuHWzC8h2nfy3dftoZxF62/bQ1iHZp2IawCqhz8cpdZ84D8ZZVu89MgEtolG9WYshYL+Zcv0187sYTtUDcUTBlrwZD8jox/cot4gwSJZuMFEo3OwkUb3Jn8F1pyaC3VJuhYKOnQtlmD/GSTSoMICBWsklIrXyzvGPdVlWvpu0yIFOBYhIMDAwMAPfwVXM2h9Y/AAAAAElFTkSuQmCC"},C={src:"/portfolio//_next/static/media/python3.62eb91ec.png",height:144,width:486,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATElEQVR4nGMsmbB8na/a/U+3T09v3HnbR0yA45fQfwbGb//////FwMDwjPH6kdoKDfFLnxhVxTdlpP8T+/vv/4f//xm/AxVwABW8BgCIeiOAubh6qQAAAABJRU5ErkJggg=="},f={src:"/portfolio//_next/static/media/javascript.15da7f96.png",height:1052,width:1052,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAb1BMVEX+51L34VD24VD03lDz3U/y3U/w21Lw21Hw21Dw20/w207v2lDv2k/v2k7u2U7u2U3k0Eziz03ey0vax0rSwEjKuEbHtkbHtkXGtUXCsUbCsUW/r0S/rkS9rUO5qUK1pUKxokGfkT2MgTqBdjh+dDhk6tgEAAAARUlEQVR42h3BhxGAIBAEwDMgvHCYBXPsv0Zn3IX+mQJkSbIyEGGustSAVG3dBQv65Djf3UI81mW4GlDivcVnglP97MagP29PA8M34FWLAAAAAElFTkSuQmCC"},w={src:"/portfolio//_next/static/media/vue.48974786.png",height:555,width:640,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAXVBMVEWk//9BvIRBu4RAuINBt4NAt4JAtYEAAABAt4JAt4JAt4I+pXtAsoAzSF4zSF1At4JAt4JBuYNBu4RAt4IzOFpBvYVBvYVBuINAtYI/rn47lHQ6h280UV80UF8zSF3Ui4XIAAAAF3RSTlMAAAAAAAAAAAEEBRExUFBYbo+/3N3v+4+VxwcAAAA+SURBVHjaBUCHEYAgDHzQIE3pXdl/TA9x7PvZI8LWlfOqFiz07+2BQZgyZzECmnxrnjTkxVPikDgUOUfq/AF7RwNLFNoACAAAAABJRU5ErkJggg=="},E={src:"/portfolio//_next/static/media/react.674a043c.png",height:445,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAclBMVEVh2vtg2vth2ftg2ftg2vph2fph2vtg2vtg2vph2fth2vtg2fth2vtg2vth2vth2fph2vth2vpg2vph2fth2vtg2vtg2vph2vtg2vtg2vth2vtg2vth2vth2vph2fth2vpg2vth2fth2fpg2fth2vtg2vv72rohAAAAJnRSTlMAAAAAExMhISEhMDA6Ok9PVlZWVmJiYmpqcXR0d3d3h4eHlJSsrONGDzcAAABBSURBVHjaBUAJFkAgEP3ZDTO2qIgsdf8rekCvp2VlhWxo7qcWBTqTscl3OAr3fq7cQT4aGy8CpA2hEkCxHueN8x972gPsEKQmmwAAAABJRU5ErkJggg=="},N={src:"/portfolio//_next/static/media/next.eb6dc049.svg",height:124,width:207},B={src:"/portfolio//_next/static/media/django2.d50958cd.png",height:546,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAX0lEQVR42mMAgpKqcjsfVwY0MGXGtKvXrm7etnXPvr1AcsOmjfsO7O/q62GYOHXy8ZMnjp04vn3njnUbN9y4dfPg4UNd/T0MQOAR4mfgaMnAwMCpp9DZ183AycDAwAAAk48nh+kaxmsAAAAASUVORK5CYII="},b={src:"/portfolio//_next/static/media/pandas.122c9b29.svg",height:331,width:819};function S(){i.gsap.registerPlugin(l.ScrollTrigger);var A=(0,t.useRef)();return(0,t.useEffect)((function(){console.log(p);var e=A.current,s=e.querySelector(".p1a"),t=e.querySelector(".p1b"),l=e.querySelector(".p2a"),r=e.querySelector(".p2b"),a=e.querySelector(".p2c"),c=e.querySelector(".p3"),n=e.querySelector(".p4"),o=i.gsap.timeline({scrollTrigger:{trigger:s,start:"70%",end:"100%",scrub:1}}),d=i.gsap.timeline({scrollTrigger:{trigger:t,start:"70%",end:"100%",scrub:1}}),g=i.gsap.timeline({scrollTrigger:{trigger:l,start:"60%",end:"100%",scrub:1}}),h=i.gsap.timeline({scrollTrigger:{trigger:r,start:"60%",end:"100%",scrub:1}}),x=i.gsap.timeline({scrollTrigger:{trigger:a,start:"30%",end:"80%",scrub:1}}),m=i.gsap.timeline({scrollTrigger:{trigger:c,start:"60%",end:"100%",scrub:1}}),j=i.gsap.timeline({scrollTrigger:{trigger:n,start:"60%",end:"100%",scrub:1}});o.fromTo(s,{opacity:1},{opacity:0}),d.fromTo(t,{opacity:1},{opacity:0}),g.fromTo(l,{opacity:1},{opacity:0}),h.fromTo(r,{opacity:1},{opacity:0}),x.fromTo(a,{opacity:1},{opacity:0}),m.fromTo(c,{opacity:1},{opacity:0}),j.fromTo(n,{opacity:1},{opacity:0})}),[A]),(0,o.jsxs)("div",{className:a()(x().dScreen,"text-white"),ref:A,children:[(0,o.jsxs)("div",{className:a()("p1a",x().pScreen1a,"relative"),children:[(0,o.jsxs)("div",{className:"sticky top-0 title",children:[(0,o.jsx)("div",{className:a()(x().d1,"absolute","text-2xl"),children:(0,o.jsx)("p",{children:"I'm"})}),(0,o.jsx)("div",{className:a()(x().d2,"absolute","text-2xl"),children:(0,o.jsx)("p",{children:"from Seoul, Korea."})})]}),(0,o.jsx)("div",{className:"grid grid-cols-12",children:(0,o.jsxs)("div",{className:"sm:col-start-4 md:col-start-8 flex flex-col gap-5 mt-40 text-xs",children:[(0,o.jsxs)("div",{className:"relative w-96 h-96",children:[(0,o.jsx)("div",{className:"absolute z-0 w-96 h-96",children:(0,o.jsx)(g.default,{src:p,alt:"me",width:"100%",height:"100%",layout:"responsive",objectFit:"contain",priority:!0})}),(0,o.jsx)("div",{className:"absolute -bottom-4 w-full flex justify-center",children:(0,o.jsx)("p",{children:"Heewoojeongro 38, Mapo-gu"})})]}),(0,o.jsxs)("div",{className:"relative w-96 h-96",children:[(0,o.jsx)("div",{className:"absolute z-0 w-96 h-96",children:(0,o.jsx)(g.default,{src:m,alt:"me",width:"100%",height:"100%",layout:"responsive",objectFit:"contain",priority:!0})}),(0,o.jsx)("div",{className:"absolute -bottom-4 w-full flex justify-center",children:(0,o.jsx)("p",{children:"TERTRE, Naksan 5-gil, Jongno-gu"})})]}),(0,o.jsxs)("div",{className:"relative w-96 h-96",children:[(0,o.jsx)("div",{className:"absolute z-0 w-96 h-96",children:(0,o.jsx)(g.default,{src:j,alt:"me",width:"100%",height:"100%",layout:"responsive",objectFit:"contain",priority:!0})}),(0,o.jsx)("div",{className:"absolute -bottom-4 w-full flex justify-center",children:(0,o.jsx)("p",{children:"Achasan Sunrise Park"})})]})]})})]}),(0,o.jsxs)("div",{className:a()("p1b",x().pScreen1b,"relative"),children:[(0,o.jsxs)("div",{className:"sticky top-0 title",children:[(0,o.jsx)("div",{className:a()(x().d1,"absolute","text-xl","-ml-2"),children:(0,o.jsx)("p",{children:"well,"})}),(0,o.jsx)("div",{className:a()(x().d2,"absolute","text-2xl"),children:(0,o.jsx)("p",{children:"loves music, try this playlist!"})})]}),(0,o.jsx)("div",{className:"grid grid-cols-12",children:(0,o.jsx)("div",{className:"sm:col-start-4 md:col-start-8 flex flex-col gap-5 mt-40 text-xs",children:(0,o.jsx)("div",{className:"relative w-96 h-96 flex justify-center",children:(0,o.jsx)("div",{className:x().iframe,children:(0,o.jsx)("iframe",{style:{borderRadius:"12px"},src:"https://open.spotify.com/embed/playlist/1yRcHG3d0iYhPxPHTgKu9d?utm_source=generator",width:"100%",height:"380",frameBorder:"0",allowFullScreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"})})})})})]}),(0,o.jsxs)("div",{className:a()("p2a",x().pScreen2a,"relative"),children:[(0,o.jsx)("div",{className:"sticky top-0 title",children:(0,o.jsxs)("div",{className:a()(x().d2,"absolute","text-2xl"),children:[(0,o.jsx)("p",{children:"Graduated from SNU"}),(0,o.jsx)("p",{children:"majoring in biological science"})]})}),(0,o.jsx)("div",{className:"grid grid-cols-12",children:(0,o.jsx)("div",{className:"sm:col-start-4 md:col-start-8 flex flex-col gap-3 mt-56",children:(0,o.jsx)("div",{className:"relative w-96 h-96",children:(0,o.jsx)("div",{className:"absolute z-0 w-96 h-96",children:(0,o.jsx)(g.default,{src:u,alt:"me",width:"100%",height:"100%",layout:"responsive",objectFit:"contain",priority:!0})})})})})]}),(0,o.jsxs)("div",{className:a()("p2b",x().pScreen2b,"relative"),children:[(0,o.jsx)("div",{className:"sticky top-0 title",children:(0,o.jsxs)("div",{className:a()(x().d2,"absolute","text-2xl"),children:[(0,o.jsx)("p",{children:"Also learned computer science"}),(0,o.jsx)("p",{children:"and language"})]})}),(0,o.jsx)("div",{className:"grid grid-cols-12",children:(0,o.jsxs)("div",{className:"sm:col-start-4 md:col-start-8 flex flex-col gap-5 mt-56",children:[(0,o.jsxs)("div",{className:"w-96 h-32 flex justify-center",children:[(0,o.jsx)("div",{className:"w-32 h-32",children:(0,o.jsx)(g.default,{src:v,alt:"c-logo"})}),(0,o.jsx)("div",{className:"w-32 h-32 flex items-center",children:(0,o.jsx)(g.default,{src:C,alt:"python-logo"})})]}),(0,o.jsxs)("div",{className:"w-96 h-48 text-indigo-400 text-center",children:[(0,o.jsx)("p",{children:"Introduction to Computer Science for Biologists"}),(0,o.jsx)("p",{children:"Concept of Computer and Practice"}),(0,o.jsx)("p",{children:"Programmgin Practice"}),(0,o.jsx)("p",{children:"Introduction to Bioinformatics"}),(0,o.jsx)("p",{children:"Data Structure "}),(0,o.jsx)("p",{children:"."}),(0,o.jsx)("p",{children:"."}),(0,o.jsx)("p",{children:"."})]})]})})]}),(0,o.jsx)("div",{className:a()("p2c",x().pScreen2c,"relative"),children:(0,o.jsx)("div",{className:"sticky top-0 title",children:(0,o.jsx)("div",{className:a()(x().d2,"absolute","text-2xl"),children:(0,o.jsx)("p",{children:"now in SSAFY since 07.2021 "})})})}),(0,o.jsxs)("div",{className:a()("p3",x().pScreen3,"relative"),children:[(0,o.jsxs)("div",{className:"sticky top-0",children:[(0,o.jsx)("div",{className:a()(x().d1,"absolute","text-2xl")}),(0,o.jsx)("div",{className:a()(x().d2,"absolute","text-2xl"),children:"'s skills"})]}),(0,o.jsx)("div",{className:"grid grid-cols-12",children:(0,o.jsxs)("div",{className:"sm:col-start-4 md:col-start-8 flex flex-col gap-3 mt-40",children:[(0,o.jsx)("div",{className:"w-96 h-32 flex justify-center",children:(0,o.jsx)("div",{className:"w-32 h-32 flex items-center",children:(0,o.jsx)(g.default,{src:f,alt:"js-logo"})})}),(0,o.jsx)("div",{className:"w-96 h-32 flex justify-center",children:(0,o.jsx)("div",{className:"w-32 h-32 flex items-center",children:(0,o.jsx)(g.default,{src:w,alt:"vue-logo"})})}),(0,o.jsx)("div",{className:"w-96 h-32 flex justify-center",children:(0,o.jsx)("div",{className:"w-32 h-32 flex items-center",children:(0,o.jsx)(g.default,{src:E,alt:"react-logo"})})}),(0,o.jsx)("div",{className:"w-96 h-32 flex justify-center",children:(0,o.jsx)("div",{className:"w-48 h-32 flex items-center",children:(0,o.jsx)(g.default,{src:N,alt:"next-logo"})})}),(0,o.jsx)("div",{className:"w-96 h-32 flex justify-center",children:(0,o.jsx)("div",{className:"w-48 h-32 flex items-center",children:(0,o.jsx)(g.default,{src:B,alt:"django-logo"})})}),(0,o.jsx)("div",{className:"w-96 h-32 flex justify-center",children:(0,o.jsx)("div",{className:"w-48 h-32 flex items-center",children:(0,o.jsx)(g.default,{src:b,alt:"pandas-logo"})})})]})})]}),(0,o.jsxs)("div",{className:a()("p4",x().pScreen4,"relative"),children:[(0,o.jsxs)("div",{className:"sticky top-0",children:[(0,o.jsx)("div",{className:a()(x().d1,"absolute","text-2xl")}),(0,o.jsx)("div",{className:a()(x().d2,"absolute","text-2xl"),children:"projects"})]}),(0,o.jsx)("div",{className:"grid grid-cols-12",children:(0,o.jsxs)("div",{className:"sm:col-start-4 md:col-start-8 flex flex-col gap-3 mt-40",children:[(0,o.jsxs)("div",{className:"w-96 h-96 bg-indigo-900 text-white",children:[(0,o.jsx)("p",{children:"Movie platform web-app"}),(0,o.jsx)("p",{children:"featuring"}),(0,o.jsx)("p",{children:"1. user account/login"}),(0,o.jsx)("p",{children:"2. movie details"}),(0,o.jsx)("p",{children:"3. reviews / comment"}),(0,o.jsx)("p",{children:"4. movie recommendation based on rating"}),(0,o.jsx)("p",{className:"text-yellow-200",children:"2021-11-18 ~ 2021-11-26"})]}),(0,o.jsxs)("div",{className:"w-96 h-96 bg-rose-800 text-white",children:[(0,o.jsx)("p",{children:"Survey platform web-app with kiosk"}),(0,o.jsx)("p",{children:"for patient caregivers"}),(0,o.jsx)("p",{children:"who need medical self-check"}),(0,o.jsx)("p",{className:"text-lime-100",children:"2022-01-10 ~ 2022-02-18"})]})]})})]}),(0,o.jsxs)("div",{className:a()("p5",x().pScreen5,"relative"),children:[(0,o.jsxs)("div",{className:"sticky top-0",children:[(0,o.jsx)("div",{className:a()(x().d1,"absolute","text-2xl")}),(0,o.jsx)("div",{className:a()(x().d2,"absolute","text-2xl"),children:"contacts"})]}),(0,o.jsxs)("div",{className:"grid grid-cols-12",children:[(0,o.jsxs)("div",{className:"sm:col-start-4 md:col-start-8 flex flex-col gap-3 mt-20",children:[(0,o.jsx)("div",{className:"w-96 h-32 bg-yellow-300 text-black",children:(0,o.jsx)("p",{className:"text-lg",children:"guruboy@snu.ac.kr"})}),(0,o.jsxs)("div",{className:"w-96 h-32 bg-cyan-800",children:[(0,o.jsxs)("p",{className:"text-lg",children:["TODAY I LEARNED"," public"]}),(0,o.jsx)("p",{children:"algoritms, Front-end notes, Toy projects"})]}),(0,o.jsxs)("div",{className:"w-96 h-32 bg-sky-800",children:[(0,o.jsxs)("p",{className:"text-lg",children:["TODAY I LEARNED"," Private"]}),(0,o.jsx)("p",{children:"python, java, vue, django notes"}),(0,o.jsx)("p",{children:"*email me to gain authorization"})]}),(0,o.jsxs)("div",{className:"w-96 h-32 bg-purple-800",children:[(0,o.jsx)("p",{children:"this portfolio"}),(0,o.jsx)("p",{children:"made with next.js, gsap animation library"}),(0,o.jsx)("p",{children:"this portfolio"})]}),(0,o.jsx)("div",{className:"w-96 h-32 bg-violet-800"})]}),(0,o.jsx)("div",{className:"col-start-8 col-span-4",children:"written by jihoo"})]})]})]})}var _=s(4084),y=s.n(_);var D=function(){var A=(0,t.useRef)();return(0,t.useEffect)((function(){var e=A.current;e.querySelector("div");document.addEventListener("mousemove",(function(A){var s=A.clientX,t=A.clientY;i.gsap.set(e,{x:s,y:t})}))}),[]),(0,o.jsx)("div",{className:a()(y().cursor,"cursor"),ref:A,children:(0,o.jsx)("div",{})})};function Q(){return(0,o.jsxs)("div",{className:"h-full bg-black",children:[(0,o.jsx)(D,{}),(0,o.jsxs)("div",{className:"container mx-auto",children:[(0,o.jsx)(d,{}),";",(0,o.jsx)(S,{})]})]})}},8581:function(A,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(223)}])},4084:function(A){A.exports={cursor:"Cursor_cursor__cKeBj"}},8016:function(A){A.exports={dScreen:"Description_dScreen__gqUeg",pScreen:"Description_pScreen__2H2Av",pScreen1a:"Description_pScreen1a__8YG2_",pScreen1b:"Description_pScreen1b__t0_yG",pScreen2a:"Description_pScreen2a__4xwR_",pScreen2b:"Description_pScreen2b__3SYL3",pScreen2c:"Description_pScreen2c__liZSF",pScreen3:"Description_pScreen3__QHsum",pScreen4:"Description_pScreen4__bkOlO",pScreen5:"Description_pScreen5__R3Cw2",d1:"Description_d1__ZCnAQ",d2:"Description_d2__3Xq7h",d3:"Description_d3__F_Zr1",posterBox:"Description_posterBox__SnoV4",iframe:"Description_iframe__Xm5l_"}},8277:function(A){A.exports={home:"Landing_home__gHcaR",smallLogo:"Landing_smallLogo___IdMh",show:"Landing_show__p_LVR",scrollTop:"Landing_scrollTop__U4cab",logo:"Landing_logo__LuIEi",fill:"Landing_fill__sxSwz","line-anim":"Landing_line-anim__5EgOl"}}},function(A){A.O(0,[67,774,888,179],(function(){return e=8581,A(A.s=e);var e}));var e=A.O();_N_E=e}]);
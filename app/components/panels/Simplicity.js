import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Image from "next/image";

export default function Simplicity() {
  const panel = useRef();
  useGSAP(
    () => {
      const title = new SplitType("#section6 .title", { types: "chars" });
      gsap.set(title.chars, {
        transformOrigin: "bottom",
      });
      gsap.from(title.chars, {
        scaleY: 0,
        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "center bottom",
        },
        stagger: 0.1,
      });
    },
    { scope: panel },
  );
  return (
    <div
      ref={panel}
      id="section6"
      className={`panel bg-[#ff9191] shadow-[0_0_30px_0_rgba(0,0,0,0.25)]`}
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(240px) rotateX(1deg)",
        transformOrigin: "top",
      }}
    >
      <div className="trigger !mx-auto h-[300vh]">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-start">
          <h2 className="title my-[3vw] text-center text-[4vw] text-black">
            5. Simplicity
          </h2>
          <div className="flex h-full items-center justify-center">
            <div className="relative">
              <div className="absolute left-0 top-0 h-[13vw] w-[13vw] -translate-x-1/2 -translate-y-1/2 rounded-full border-[#ff9191] bg-black transition-all duration-500 hover:z-[10] hover:border-[0.5vw] hover:bg-white"></div>

              <svg
                className="relative h-auto w-[24vw] hover:z-[10]"
                width="481"
                height="299"
                viewBox="0 0 481 299"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  className="stroke-0 transition-all duration-500 hover:fill-white hover:stroke-[0.5vw]"
                  points="10,10 471,10 240,289"
                  fill="#171717"
                  stroke="#ff9191"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="absolute right-0 top-0 h-[13vw] w-[13vw] -translate-y-1/2 translate-x-1/2 rounded-full border-[#ff9191] bg-black transition-all duration-500 hover:z-[10] hover:border-[0.5vw] hover:bg-white"></div>
              <div className="absolute bottom-0 left-1/2 h-[6vw] w-[6vw] -translate-x-1/2 translate-y-1/2 rounded-full border-[#ff9191] bg-black transition-all duration-500 hover:z-[10] hover:border-[0.5vw] hover:bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

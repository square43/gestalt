import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

export default function Welcome() {
  const panel = useRef();
  useGSAP(
    () => {
      const title = new SplitType(".title", { types: "chars" });
      gsap.set(title.chars, {
        transformOrigin: "bottom",
      });
      gsap.from(title.chars, {
        duration: 0.7,
        scaleY: 0,
        stagger: 0.1,
        delay: 1,
        onComplete: () => {
          gsap.to(title.chars.reverse(), {
            scaleY: 0,
            scrollTrigger: {
              trigger: ".trigger",
              scrub: true,
              start: "top top",
              end: "bottom bottom",
            },
            stagger: 0.1,
          });
        },
      });
    },
    { scope: panel },
  );
  return (
    <div
      ref={panel}
      id="section1"
      className={`panel bg-[#28AFB0] shadow-[0_0_30px_0_rgba(0,0,0,0.25)]`}
      style={{
        transformOrigin: "top",
      }}
    >
      <div className="trigger !mx-auto h-[300vh]">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-center">
          <h1 className="title mb-[-2vw] text-center text-[18vw] leading-[1] text-black">
            GESTALT
          </h1>
          <h1 className="title text-center text-[13.2vw] leading-[1] text-black">
            PRINCIPLES
          </h1>
        </div>
      </div>
    </div>
  );
}

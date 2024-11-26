import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

export default function Similarity() {
  const panel = useRef();
  useGSAP(
    () => {
      const title = new SplitType("#section2 .title", { types: "chars" });
      gsap.set(title.chars, {
        transformOrigin: "bottom",
      });
      gsap.from(title.chars, {
        scaleY: 0,
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
          start: "top top",
          end: "center bottom",
        },
        stagger: 0.1,
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "80% bottom",
          scrub: true,
        },
      });
      tl.to(".row1 .square", {
        background: "#EE964B",
      })
        .to(".row2 .square", {
          background: "#28AFB0",
        })
        .to(".row3 .square", {
          background: "#F06860",
        })
        .to(".row3 .square, .row2 .square, .row1 .square", {
          background: "#171717",
        })
        .to(".circle", {
          rotate: "45deg",
        })
        .to(".circle", {
          borderRadius: "50%",
        });
    },
    { scope: panel },
  );
  return (
    <div
      ref={panel}
      id="section2"
      className={`panel bg-[#F4D35E] shadow-[0_0_30px_0_rgba(0,0,0,0.25)]`}
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(240px) rotateX(1deg)",
        transformOrigin: "top",
      }}
    >
      <div className="trigger !mx-auto h-[300vh]">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-start">
          <h2 className="title my-[3vw] text-center text-[4vw] text-black">
            1. Similarity
          </h2>
          <div className="squares flex flex-col gap-[2.5vw]">
            <div className="row1 flex gap-[2.5vw]">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className={`square h-[5vw] w-[5vw] bg-black ${index > 4 && index < 8 ? "circle" : null}`}
                ></div>
              ))}
            </div>
            <div className="row2 flex gap-[2.5vw]">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className={`square h-[5vw] w-[5vw] bg-black ${index > 4 && index < 8 ? "circle" : null}`}
                ></div>
              ))}
            </div>
            <div className="row3 flex gap-[2.5vw]">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className={`square h-[5vw] w-[5vw] bg-black ${index > 4 && index < 8 ? "circle" : null}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

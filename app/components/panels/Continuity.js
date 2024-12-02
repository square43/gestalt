import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Lottie from "react-lottie-player";
import animationData from "@/public/continuity.json"; // Replace with your Lottie JSON path

export default function Continuity() {
  const panel = useRef();
  const lottieRef = useRef(null);
  const sliderRef = useRef(null);

  useGSAP(
    () => {
      const title = new SplitType("#section4 .title", { types: "chars" });
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
  let currentFrame = 0; // Keep track of the current frame globally or in a closure

  const handleLottieChange = ({ target }) => {
    const targetFrame = parseInt(target.value);

    if (lottieRef.current) {
      gsap.to(
        { frame: currentFrame },
        {
          frame: targetFrame, // Animate from current frame to the target frame
          duration: 0.5, // Adjust duration as needed
          ease: "power2.out",
          onUpdate: function () {
            lottieRef.current.goToAndStop(targetFrame, true);
          },
          onComplete: () => {
            currentFrame = targetFrame; // Update current frame after the animation completes
          },
        },
      );
    }
  };
  return (
    <div
      ref={panel}
      id="section4"
      className={`panel bg-[#F786AA] shadow-[0_0_30px_0_rgba(0,0,0,0.25)]`}
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(240px) rotateX(1deg)",
        transformOrigin: "top",
      }}
    >
      <div className="trigger !mx-auto h-[300vh]">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-start">
          <h2 className="title my-[3vw] text-center text-[4vw] text-black">
            3. Continuity
          </h2>
          <div className="absolute left-1/2 top-1/2 w-[60vw] -translate-x-1/2 -translate-y-1/2">
            <Lottie
              ref={lottieRef}
              animationData={animationData}
              play={false}
              loop={false}
            />
          </div>
          <div className="absolute bottom-[60px] left-1/2 flex w-full max-w-[400px] -translate-x-1/2 items-center rounded-full bg-white px-[20px] py-[30px]">
            <input
              ref={sliderRef}
              type="range"
              min="0"
              max="120"
              step="1"
              defaultValue={0}
              onChange={handleLottieChange}
              className="slider h-[15px] w-full appearance-none rounded-full bg-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

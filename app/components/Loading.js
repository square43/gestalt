import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function Loading({ setLoadingFinished }) {
  const [progress, setProgress] = useState(0); // Initialize progress
  const [loading, setLoading] = useState(true); // Initialize progress
  const progressRef = useRef(null); // Reference for GSAP animation

  useEffect(() => {
    const totalDuration = 4;
    const totalNumbers = 99;

    const tl = gsap.timeline({
      onUpdate: () => {
        const roundedProgress = Math.floor(progressRef.current);
        setProgress(roundedProgress);
      },
      onComplete: () => {
        setLoading(false);
        setLoadingFinished(true);
      },
      delay: 1,
    });

    tl.to(progressRef, {
      current: totalNumbers,
      duration: totalDuration,
      ease: "power1.inOut", // Ensure even timing
    });

    return () => {
      tl.kill(); // Cleanup GSAP animation on component unmount
    };
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 z-[1001] h-screen w-full transition-all duration-500 ${!loading && "pointer-events-none opacity-0"}`}
    >
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-night-purple">
        <span className="font-pretorian text-[15.625rem] leading-[1.05] text-orange lg:text-[17.857rem] md:text-[15.385rem]">
          {progress < 10 && "0"}
          {progress}
        </span>
        <span className="font-pretorian text-[4rem] uppercase leading-[1.1] tracking-[0.1em] text-orange lg:text-[4.571rem] md:text-[3.692rem]">
          Loading
        </span>
      </div>
      <div
        style={{
          clipPath: `polygon(0 0, ${progress + 3}% 0, ${progress + 3}% 100%, 0 100%)`,
        }}
        className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-orange transition-all duration-300"
      >
        <span className="font-pretorian text-[15.625rem] leading-[1.05] text-white lg:text-[17.857rem] md:text-[15.385rem]">
          {progress < 10 && "0"}
          {progress}
        </span>
        <span className="font-pretorian text-[4rem] uppercase leading-[1.1] tracking-[0.1em] text-white lg:text-[4.571rem] md:text-[3.692rem]">
          Loading
        </span>
      </div>
    </div>
  );
}

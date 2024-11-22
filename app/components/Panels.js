"use client"; // For app directory or use `useEffect` in pages directory
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Nav from "./Nav";

gsap.registerPlugin(ScrollTrigger);

const Panels = () => {
  const main = useRef();

  useGSAP(() => {
    const panels = gsap.utils.toArray(".panel");
    const dots = gsap.utils.toArray(".dot");

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
      });

      if (i != 0) {
        gsap.fromTo(
          panel,
          {
            scale: 0.8,
            borderRadius: "150px",
          }, // starting state
          {
            scale: 1,
            borderRadius: "0px",

            rotateX: "0",
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: panel,
              start: "-33.33% top",
              end: "top top",
              scrub: true,
            },
          },
        );
        gsap.to(dots[i], {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "-100% top",
            end: "top top",
            scrub: true,
          },
        });
      }
    });
  });
  const principles = [
    { color: "bg-[#28AFB0]", name: "Emergence" },
    { color: "bg-[#F4D35E]", name: "Closure (Reification)" },
    { color: "bg-[#EE964B]", name: "Common Region" },
    { color: "bg-[#F786AA]", name: "Continuity or Continuation" },
    { color: "bg-[#B0D4B6]", name: "Proximity" },
    { color: "bg-[#F06860]", name: "Multistability" },
    { color: "bg-[#F4D35E]", name: "Figure/Ground" },
    { color: "bg-[#28AFB0]", name: "Invariance" },
    { color: "bg-[#EE964B]", name: "Pragnanz" },
    { color: "bg-[#F786AA]", name: "Similarity" },
    { color: "bg-[#F06860]", name: "Symmetry and Order" },
    { color: "bg-[#F4D35E]", name: "Common Fate" },
  ];
  return (
    <div ref={main}>
      <div className="scroller">
        {principles.map((principle, index) => (
          <div
            id={`section${index}`}
            key={index}
            className={`panel !mx-auto h-[300vh] ${principle.color} shadow-[0_0_30px_0_rgba(0,0,0,0.25)]`}
            style={{
              transformStyle: "preserve-3d",
              transform: index != 0 && "perspective(240px) rotateX(1deg)",
              transformOrigin: "top",
            }}
          >
            <div className="sticky left-0 top-0 flex h-screen w-full items-center justify-center">
              <h1 className="text-center text-[128px] text-black">
                {index + 1}. {principle.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <Nav principles={principles} />
    </div>
  );
};

export default Panels;

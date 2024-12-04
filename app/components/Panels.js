"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Nav from "./Nav";
import Welcome from "./panels/Welcome";
import Similarity from "./panels/Similarity";
import Closure from "./panels/Closure";
import Continuity from "./panels/Continuity";
import Figure from "./panels/Figure";
import Simplicity from "./panels/Simplicity";
import Symmetry from "./panels/Symmetry";
import PersistenceOfVision from "./panels/PersistenceOfVision";

gsap.registerPlugin(ScrollTrigger);

const Panels = () => {
  const main = useRef();

  useGSAP(
    () => {
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
          if (dots[i]) {
            gsap.to(dots[i], {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: panels[i],
                start: "-100% top",
                end: "top top",
                scrub: true,
              },
            });
          }
        }
      });
    },
    { scope: main },
  );

  return (
    <div ref={main}>
      <div className="scroller">
        <Welcome />
        <div>
          <Similarity />
          <Closure />
          <Continuity />
          {/* <Figure /> */}
          {/* <Simplicity /> */}
          {/* <Symmetry /> */}
          {/* <PersistenceOfVision /> */}
        </div>
      </div>
      {/* <Nav
        principles={[
          { color: "bg-[#28AFB0]", name: "" },
          { color: "bg-[#F4D35E]", name: "Similarity" },
          { color: "bg-[#EE964B]", name: "Closure" },
          { color: "bg-[#F786AA]", name: "Continuity" },
          { color: "bg-[#86dc7d]", name: "Figure-Ground" },
          { color: "bg-[#ff9191]", name: "Simplicity" },
          { color: "bg-[#28AFB0]", name: "Symmetry" },
          { color: "bg-[#F4D35E]", name: "Persistence of Vision" },
        ]}
      /> */}
    </div>
  );
};

export default Panels;

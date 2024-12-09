"use client";
import React, { useRef, useEffect, useState } from "react";
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
import Footer from "./panels/Footer";
import FocalPoint from "./panels/FocalPoint";

gsap.registerPlugin(ScrollTrigger);

const Panels = () => {
  const main = useRef();
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 1100 : false,
  );
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    // Check initial width
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useGSAP(
    () => {
      const panels = gsap.utils.toArray(".panel");
      const dots = gsap.utils.toArray(".dot");

      panels.forEach((panel, i) => {
        if (window && window.innerWidth > 1100) {
          ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: i != panels.length - 1,
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
          }
        }
        if (dots[i]) {
          gsap.to(dots[i], {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panels[i],
              start: isMobile ? "start bottom" : "-100% top",
              end: isMobile ? "bottom bottom" : "top top",
              scrub: true,
            },
          });
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
          <Similarity isMobile={isMobile} />
          <Closure isMobile={isMobile} />
          <Continuity isMobile={isMobile} />
          <Figure isMobile={isMobile} />
          <Simplicity isMobile={isMobile} />
          <Symmetry isMobile={isMobile} />
          <PersistenceOfVision isMobile={isMobile} />
          <FocalPoint isMobile={isMobile} />
          <Footer />
        </div>
      </div>

      <Nav
        isMobile={isMobile}
        principles={[
          { color: "bg-orange", name: "" },
          { color: "bg-teal", name: "Similarity" },
          { color: "bg-green", name: "Closure" },
          { color: "bg-yellow", name: "Continuity" },
          { color: "bg-rose", name: "Figure Ground" },
          { color: "bg-red", name: "Simplicity" },
          { color: "bg-blue", name: "Symmetry" },
          { color: "bg-ochre", name: "Persistence of Vision" },
          { color: "bg-purple", name: "Focal Point" },
        ]}
      />
    </div>
  );
};

export default Panels;

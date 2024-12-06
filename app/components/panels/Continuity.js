import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

export default function Continuity() {
  const panel = useRef();
  const sliderRef = useRef(null);

  const [dotLottie, setDotLottie] = useState(null);

  useGSAP(
    () => {
      const title = new SplitType("#section4 .title", { types: "chars" });
      const subtitle = new SplitType("#section4 .subtitle", { types: "words" });
      const paragraph = new SplitType("#section4 .paragraph", {
        types: "words",
      });
      gsap.set(title.chars, {
        transformOrigin: "bottom",
      });
      gsap.set(subtitle.words, {
        transformOrigin: "bottom",
      });
      gsap.set(paragraph.words, {
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
        ease: "elastic.out(1.2,1)",
      });

      gsap.from(subtitle.words, {
        scaleY: 0,
        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "center bottom",
        },
        stagger: 0.1,
        ease: "elastic.out(1.2,1)",
      });
      gsap.from(paragraph.words, {
        delay: 1,
        scaleY: 0,
        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "center bottom",
        },
        stagger: 0.01,
      });

      gsap.to(".continuity-circles", {
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "center bottom",
        },
        ease: "power1.inOut",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      });
    },
    { scope: panel },
  );

  const dotLottieRefCallback = (dotLottie) => {
    setDotLottie(dotLottie);
  };

  const handleLottieChange = ({ target }) => {
    if (dotLottie) {
      dotLottie.setFrame(parseFloat(target.value));
    }
  };
  return (
    <div
      ref={panel}
      id="section4"
      className={`panel bg-yellow shadow-[0_0_30px_0_rgba(0,0,0,0.25)]`}
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(240px) rotateX(1deg)",
        transformOrigin: "top",
      }}
    >
      <div className="trigger !mx-auto h-[300vh]">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-start">
          <div className="container py-[3.5rem]">
            <div className="mx-auto flex h-full w-10/12 flex-col justify-between">
              <div className="flex w-full justify-between">
                <div className="w-1/2 text-black">
                  <h2 className="title heading-2 mb-[2rem]">Continuity</h2>
                  <p className="subtitle heading-3 mb-[1.5rem]">
                    Making your eye move like a needle on a record!
                  </p>
                  <p className="paragraph mb-[2rem]">
                    Smooth lines, flowing paths, a melody that just won't
                    quit—that's continuity, baby. This gestalt groove leads the
                    eye along a visual composition that feels as natural as a
                    Coltrane solo. Continuity gives us the sense that one
                    element flows into the next, creating a rhythm that pulls us
                    in and carries us through.
                  </p>
                  <p className="paragraph">
                    Continuity isn't just about lines, though—it's about
                    direction. Whether it's the swoop of a psychedelic poster or
                    the clean elegance of mid-century modern layouts, it's the
                    unbroken visual rhythm that keeps the composition tight.
                  </p>
                  <div className="mt-[2rem] rounded-[2rem] bg-white px-[2rem] py-[1.5rem]">
                    <p className="heading-4 mb-[1rem] text-center">
                      SLIDE TO ARRANGE NOTES
                    </p>
                    <input
                      ref={sliderRef}
                      type="range"
                      min="1"
                      max="60"
                      step="1"
                      defaultValue={0}
                      onInput={handleLottieChange}
                      className="slider h-[3px] w-full appearance-none rounded-full bg-black"
                    />
                  </div>
                </div>
                <div className="flex w-2/5 items-center gap-[1rem]">
                  <Image
                    src="/continuity/circles.svg"
                    alt="Decorative object"
                    width={562}
                    height={343}
                    className="continuity-circles"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Treba srediti lottie */}
          <div className="pointer-events-none absolute bottom-0 h-[18.75rem] w-full">
            <DotLottieReact
              dotLottieRefCallback={dotLottieRefCallback}
              src="/continuity/notes-new.json"
              className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

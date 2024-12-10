import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

export default function Continuity({ isMobile }) {
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
          start: isMobile ? "top center" : "top top",
          end: isMobile ? "bottom center" : "center bottom",
        },
        stagger: 0.1,
        ease: "elastic.out(1.2,1)",
      });

      gsap.from(subtitle.words, {
        scaleY: 0,
        scrollTrigger: {
          trigger: ".trigger",
          start: isMobile ? "top center" : "top top",
          end: isMobile ? "bottom center" : "center bottom",
        },
        stagger: 0.1,
        ease: "elastic.out(1.2,1)",
      });
      gsap.from(paragraph.words, {
        delay: 1,
        scaleY: 0,
        scrollTrigger: {
          trigger: ".trigger",
          start: isMobile ? "top center" : "top top",
          end: isMobile ? "bottom center" : "center bottom",
        },
        stagger: 0.01,
      });

      gsap.to(".continuity-circles", {
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: ".trigger",
          start: isMobile ? "top center" : "top top",
          end: isMobile ? "bottom center" : "center bottom",
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
      className={`panel bg-yellow shadow-[0_0_30px_0_rgba(0,0,0,0.25)] lg:shadow-none`}
      style={{
        transformStyle: isMobile && "preserve-3d",
        transform: isMobile && "perspective(240px) rotateX(1deg)",
        transformOrigin: isMobile && "top",
      }}
    >
      <div className="trigger !mx-auto h-[300vh] pb-[5.714rem] lg:h-auto md:pb-0">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-start lg:relative lg:h-full">
          <div className="container py-[3.5rem] lg:pb-[0] lg:pt-[4.571rem]">
            <div className="mx-auto flex h-full w-10/12 flex-col justify-between lg:w-full">
              <div className="flex w-full justify-between lg:gap-[1.25rem]">
                <div className="w-1/2 text-black lg:w-[55%] md:w-full">
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
                  <div className="mt-[2rem] rounded-[2rem] bg-white px-[2rem] py-[1.5rem] lg:hidden">
                    <p className="heading-4 mb-[1rem] text-center">
                      SLIDE TO ARRANGE NOTES
                    </p>
                    <input
                      ref={sliderRef}
                      type="range"
                      min="1"
                      max="60"
                      step="1"
                      defaultValue={1}
                      onInput={handleLottieChange}
                      className="slider h-[3px] w-full appearance-none rounded-full bg-black"
                    />
                  </div>
                </div>
                <div className="flex w-2/5 items-center gap-[1rem] lg:w-1/3 md:hidden">
                  <Image
                    src="/continuity/circles.svg"
                    alt="Decorative object"
                    width={562}
                    height={343}
                    className="continuity-circles lg:hidden"
                  />
                  <Image
                    src="/continuity/circlesM.svg"
                    alt="Decorative object"
                    width={436}
                    height={270}
                    className="continuity-circles hidden h-auto w-[31.143rem] lg:block"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Treba srediti lottie */}
          <div className="pointer-events-none absolute bottom-0 h-[18.75rem] w-full lg:pointer-events-auto lg:static lg:h-auto md:px-[]">
            <DotLottieReact
              dotLottieRefCallback={dotLottieRefCallback}
              src="/continuity/notes-new.json"
              className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 lg:hidden"
            />
            <DotLottieReact
              dotLottieRefCallback={dotLottieRefCallback}
              src="/continuity/notes-newT.json"
              className="pointer-events-none hidden max-h-[21.429rem] lg:block"
            />
            <div className="mt-[2rem] hidden rounded-[2rem] bg-white px-[2rem] py-[1.5rem] lg:mx-[1.714rem] lg:block md:mt-0 md:p-[1.2rem] md:pb-[1.7rem]">
              <p className="heading-4 mb-[1rem] text-center text-black">
                SLIDE TO ARRANGE NOTES
              </p>
              <input
                ref={sliderRef}
                type="range"
                min="1"
                max="60"
                step="1"
                defaultValue={1}
                onInput={handleLottieChange}
                className="slider h-[3px] w-full appearance-none rounded-full bg-black"
              />
            </div>
            <Image
              src="/continuity/circles.svg"
              alt="Decorative object"
              width={562}
              height={343}
              className="continuity-circles hidden h-auto w-full max-w-none md:my-[4rem] md:block md:px-[1.538rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

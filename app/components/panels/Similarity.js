import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Image from "next/image";

export default function Similarity({ isMobile }) {
  const panel = useRef();
  useGSAP(
    () => {
      const title = new SplitType("#section2 .title", { types: "chars" });
      const subtitle = new SplitType("#section2 .subtitle", { types: "words" });
      const paragraph = new SplitType("#section2 .paragraph", {
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
      gsap.from(".circles", {
        delay: 1,
        y: -20,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "center bottom",
        },
        stagger: 0.2,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger",
          start: isMobile ? "top center" : "top top",
          end: isMobile ? "center center" : "80% bottom",
          scrub: true,
        },
      });
      tl.from(".colored", {
        autoAlpha: 0,
        ease: "power1.inOut",
        stagger: 0.2,
      });
    },
    { scope: panel },
  );
  return (
    <div
      ref={panel}
      id="section2"
      className={`panel bg-teal shadow-[0_0_30px_0_rgba(0,0,0,0.25)] lg:shadow-none`}
      style={{
        transformStyle: isMobile && "preserve-3d",
        transform: isMobile && "perspective(240px) rotateX(1deg)",
        transformOrigin: isMobile && "top",
      }}
    >
      <div className="trigger !mx-auto h-[300vh] lg:h-auto">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-start lg:static lg:h-full">
          <div className="container py-[3.5rem] pt-[4.571rem] lg:pb-[6.786rem] md:pb-[4.308rem] md:pt-[4.308rem]">
            <div className="mx-auto flex h-full w-10/12 flex-col justify-start gap-[4.688rem] lg:w-full md:gap-[3.692rem]">
              <div className="flex w-full justify-between gap-[1rem] lg:gap-[0.347rem]">
                {Array.from({ length: 14 }).map((_, index) => (
                  <div
                    key={index}
                    className={`relative ${index >= 7 ? "md:hidden" : null}`}
                  >
                    <Image
                      src={`/similarity/tile${index + 1}.svg`}
                      alt="piano tile"
                      width={93.55}
                      height={325}
                    />
                    {index % 2 == 0 && (
                      <Image
                        src={`/similarity/tile${index + 1}b.svg`}
                        alt="piano colored"
                        width={93.55}
                        height={325}
                        className="colored absolute left-0 top-0"
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex w-full justify-between lg:flex-col lg:gap-[4rem]">
                <div className="w-1/2 lg:w-full">
                  <h2 className="title heading-2 mb-[2rem]">Similarity</h2>
                  <p className="subtitle heading-3 mb-[1.5rem]">
                    It's a groove we can't resist! It simplifies complexity.
                  </p>
                  <p className="paragraph mb-[2rem]">
                    Picture this: shapes and hues grooving together in unison,
                    moving like a jazz quartet locked in perfect rhythm. That's
                    the gestalt principle of similarity—it's all about how our
                    minds dig the connections between things that look alike. Be
                    it color, shape, size, or texture, we instinctively group
                    similar elements, like notes in a riff.
                  </p>
                  <p className="paragraph">
                    This principle is a bebop of perception, creating order from
                    visual chaos. When elements echo each other in style, our
                    brains click their fingers, grouping them as part of the
                    same ensemble.
                  </p>
                </div>
                <div className="flex w-2/5 flex-col justify-end gap-[1rem] lg:w-full">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Image
                      src={`/similarity/${index % 2 == 0 ? "white.svg" : "blue.svg"}`}
                      alt="Circles"
                      width={544}
                      height={40}
                      className="circles lg:hidden"
                      key={index}
                    />
                  ))}
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index}>
                      <Image
                        src={`/similarity/${index % 2 == 0 ? "whiteT.svg" : "blueT.svg"}`}
                        alt="Circles"
                        width={704}
                        height={88}
                        className="circles hidden h-auto w-full max-w-none lg:block md:hidden"
                      />
                      <Image
                        src={`/similarity/${index % 2 == 0 ? "whiteM.svg" : "blueM.svg"}`}
                        alt="Circles"
                        width={350}
                        height={32}
                        className="circles hidden h-auto w-full max-w-none md:block"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

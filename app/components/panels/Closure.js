import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import SplitType from "split-type";

export default function Closure({ isMobile }) {
  const panel = useRef();
  useGSAP(
    () => {
      const title = new SplitType("#section3 .title", { types: "chars" });
      const subtitle = new SplitType("#section3 .subtitle", { types: "words" });
      const paragraph = new SplitType("#section3 .paragraph", {
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
      gsap.from(".objects", {
        delay: 1,
        autoAlpha: 0,
        rotate: -45,
        ease: "power1.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".trigger",
          start: isMobile ? "top center" : "top top",
          end: isMobile ? "bottom center" : "center bottom",
        },
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger",
          start: isMobile ? "top center" : "top top",
          end: isMobile ? "center center" : "65% bottom",
          scrub: true,
        },
      });

      tl.from(".part1", {
        x: "-10%",
        y: "10%",
        rotate: "56deg",
      })
        .from(
          ".part2",
          {
            x: "10%",
            rotate: "20deg",
          },
          "<",
        )
        .from(
          ".part3",
          {
            x: "-50%",
            y: "20%",
            rotate: "-45deg",
          },
          "<",
        )
        .from(
          ".part4",
          {
            x: "70%",
            y: "-10%",
            rotate: "45deg",
          },
          "<",
        )
        .from(
          ".part5",
          {
            x: "60%",
            y: "-100%",
          },
          "<",
        )
        .from(
          ".part6",
          {
            x: "-20%",
            y: "10%",
            rotate: "42deg",
          },
          "<",
        )
        .from(
          ".part7",
          {
            y: "35%",
            rotate: "76deg",
          },
          "<",
        )
        .from(
          ".part8",
          {
            x: "-5%",
            y: "-5%",
            rotate: "26deg",
          },
          "<",
        )
        .from(
          ".part9",
          {
            x: "-200%",
            rotate: "37deg",
          },
          "<",
        )
        .from(
          ".part10",
          {
            y: "-150%",
            rotate: "48deg",
          },
          "<",
        );
    },
    { scope: panel },
  );
  return (
    <div
      ref={panel}
      id="section3"
      className={`panel bg-green shadow-[0_0_30px_0_rgba(0,0,0,0.25)] lg:shadow-none`}
      style={{
        transformStyle: isMobile && "preserve-3d",
        transform: isMobile && "perspective(240px) rotateX(1deg)",
        transformOrigin: isMobile && "top",
      }}
    >
      <div className="trigger !mx-auto h-[300vh] lg:h-auto">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-start lg:static lg:h-full">
          <div className="container py-[3.5rem] md:pb-[4rem]">
            <div className="mx-auto flex h-full w-10/12 items-center justify-between lg:w-full lg:gap-[1.25rem] md:flex-col-reverse md:gap-[4rem]">
              <div className="relative flex w-[30%] flex-wrap items-center justify-center gap-[2rem] lg:w-1/2 md:w-full">
                {Array.from({ length: 8 }).map((_, index) => (
                  <Image
                    src={`/closure/part${index + 1}.svg`}
                    alt="Closure part"
                    width={192}
                    height={192}
                    key={index}
                    className={`part${index + 1} w-[calc(50%-2rem)] md:w-[calc(50%-1rem)]`}
                  />
                ))}
                <Image
                  src={`/closure/part9.svg`}
                  alt="Closure part"
                  width={92}
                  height={140}
                  className="part9 absolute bottom-[25%] left-[20%] h-auto w-[22%] max-w-none"
                />
                <Image
                  src={`/closure/part10.svg`}
                  alt="Closure part"
                  width={92}
                  height={140}
                  className="part10 absolute bottom-[25%] right-[20%] h-auto w-[22%] max-w-none"
                />
              </div>
              <div className="flex h-full w-1/2 flex-col justify-center md:w-full">
                <h2 className="title heading-2 mb-[2rem]">Closure</h2>
                <p className="subtitle heading-3 mb-[1.5rem]">
                  A visual improv session that never fails to mesmerize!
                </p>
                <p className="paragraph mb-[2rem]">
                  Imagine an unfinished melody where your mind fills in the
                  notes, a tune completed by imagination. That's the principle
                  of closure—a psychological jazz riff where the mind swings to
                  fill the gaps. We see part of a shape, and bam, our brains bop
                  to complete the rest.
                </p>
                <p className="paragraph">
                  A few strokes of a pen can suggest a circle, a triangle, or a
                  face. It's this interplay between the seen and the unseen that
                  makes closure so groovy.
                </p>
                <div className="mt-[4rem] flex justify-end gap-[1rem] lg:hidden">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <Image
                      src={`/closure/object${index + 1}.svg`}
                      alt="objects"
                      width={126}
                      height={126}
                      className="objects h-auto w-[7.875rem]"
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-[3.214rem] hidden w-full justify-center gap-[4.286rem] lg:flex md:gap-[1.3rem]">
              {Array.from({ length: 3 }).map((_, index) => (
                <Image
                  src={`/closure/object${index + 1}.svg`}
                  alt="objects"
                  width={126}
                  height={126}
                  className="objects h-auto w-[11.429rem] lg:w-[10rem] md:w-[7.385rem]"
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

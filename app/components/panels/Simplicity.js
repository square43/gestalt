import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Image from "next/image";
import Saxophone from "../Saxophone";
export default function Simplicity() {
  const panel = useRef();
  useGSAP(
    () => {
      const title = new SplitType("#section6 .title", {
        types: ["chars", "words"],
      });
      const subtitle = new SplitType("#section6 .subtitle", { types: "words" });
      const paragraph = new SplitType("#section6 .paragraph", {
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
      gsap.from(".saxophone", {
        delay: 0.5,
        autoAlpha: 0,
        duration: 1.2,
        x: "50%",
        ease: "power1.inOut",

        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "center bottom",
        },
      });
      gsap.from(".camera", {
        autoAlpha: 0,
        duration: 1.2,
        y: "50%",
        ease: "power1.inOut",

        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "center bottom",
        },
      });
    },
    { scope: panel },
  );
  return (
    <div
      ref={panel}
      id="section6"
      className={`panel bg-red shadow-[0_0_30px_0_rgba(0,0,0,0.25)]`}
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(240px) rotateX(1deg)",
        transformOrigin: "top",
      }}
    >
      <div className="trigger !mx-auto h-[300vh]">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-start">
          <div className="container pb-[3.5rem] pt-[7.5rem]">
            <div className="mx-auto flex h-full w-10/12 items-start justify-between gap-[1.25rem]">
              <div className="flex h-full w-1/2 flex-col justify-start">
                <h2 className="title heading-2 mb-[2rem]">Simplicity</h2>
                <p className="subtitle heading-3 mb-[1.5rem] w-[80%]">
                  Simplicity is the cool, clean groove that conducts every great
                  design.
                </p>
                <p className="paragraph mb-[2rem]">
                  Simplicity is about stripping down to the essentials, finding
                  the core rhythm, and letting it swing. Gestalt's principle of
                  simplicity whispers to us to seek clarity in the complex, to
                  find a tune we can follow in the cacophony of visual noise.
                </p>
                <p className="paragraph">
                  A few well-placed lines could suggest a skyline, a face, or a
                  movement. It's like bebop, where every note mattered and every
                  gap left room for improvisation. Simplicity creates order. It
                  makes the complex approachable, like a melody you hum long
                  after the record's spun out.
                </p>
                <Image
                  src="/simplicity/camera.svg"
                  alt="Decorative object"
                  width={272}
                  height={240}
                  className="camera mt-[4rem] w-[40%]"
                />
              </div>

              <div className="flex w-1/2 justify-end gap-[1.5rem]">
                <div className="relative">
                  <div className="absolute bottom-[15%] left-0 flex -translate-x-full items-center justify-start gap-[1rem]">
                    <span className="heading-6 max-w-[19.25rem]">
                      Hover over the saxophone pieces to see it's parts!
                    </span>
                    <Image
                      src="/simplicity/triangle.svg"
                      alt="Carret icon"
                      width={36}
                      height={36}
                      className="h-auto w-[2.25rem]"
                    />
                  </div>
                  <Saxophone />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Image from "next/image";

export default function Symmetry() {
  const circles = useRef([]);
  const panel = useRef();
  const wrapper = useRef();

  useGSAP(
    () => {
      const title = new SplitType("#section7 .title", {
        types: ["chars", "words"],
      });
      const subtitle = new SplitType("#section7 .subtitle", { types: "words" });
      const paragraph = new SplitType("#section7 .paragraph", {
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
      gsap.from(".circle", {
        delay: 0.5,
        autoAlpha: 0,
        y: "-20px",
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

  useEffect(() => {
    const updatePositions = (event) => {
      if (wrapper) {
        const { width, height } = wrapper.current.getBoundingClientRect();

        const mappedValueX = (event.offsetX / width) * 2 - 1;
        const mappedValueY = (event.offsetY / height) * 2 - 1;
        const mouseOnRight = event.offsetX > width / 2;
        const mouseOnBottom = event.offsetY > height / 2;
        const intensity = 200;

        const calculateOffset = (isPositive, value, strength) =>
          isPositive
            ? value * intensity * strength
            : -value * intensity * strength;

        circles.current.forEach((circle, index) => {
          const strengthX =
            parseFloat(circle.getAttribute("data-strength-x")) || 1;
          const strengthY =
            parseFloat(circle.getAttribute("data-strength-y")) || 1;

          const isRightCircle = index % 4 >= 2;
          const isBottomCircle = index < 8;

          const offset = {
            x: calculateOffset(
              mouseOnRight === isRightCircle,
              mappedValueX,
              strengthX,
            ),
            y: calculateOffset(
              mouseOnBottom === isBottomCircle,
              mappedValueY,
              strengthY,
            ),
          };

          gsap.to(circle, {
            x: offset.x,
            y: -offset.y,
            duration: 1,
            ease: "power3.out",
          });
        });
      }
    };

    if (wrapper) {
      // Attach the mousemove event
      wrapper.current.addEventListener("mousemove", updatePositions);
    }

    // Cleanup event listener
    return () => {
      if (wrapper) {
        wrapper.current.removeEventListener("mousemove", updatePositions);
      }
    };
  }, []);

  return (
    <div
      ref={panel}
      id="section7"
      className={`panel bg-blue shadow-[0_0_30px_0_rgba(0,0,0,0.25)]`}
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(240px) rotateX(1deg)",
        transformOrigin: "top",
      }}
    >
      <div className="trigger !mx-auto h-[300vh]">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-start">
          <div className="container pb-[3.5rem] pt-[7.5rem]">
            <div className="mx-auto flex h-full w-full items-center justify-between gap-[1.25rem]">
              <div className="flex w-1/2 justify-center gap-[1.5rem]">
                <div
                  ref={wrapper}
                  className="relative grid grid-cols-4 grid-rows-4 items-center gap-[3rem]"
                >
                  {Array.from({ length: 16 }).map((_, index) => {
                    const selectedIndex = [0, 3, 5, 6, 9, 10, 12, 15];
                    let isRed = selectedIndex.includes(index);
                    return (
                      <Image
                        data-strength-x={
                          index % 4 === 1 || index % 4 === 2 ? 1 : 0.5
                        }
                        data-strength-y={
                          Math.floor(index / 4) === 0 ||
                          Math.floor(index / 4) === 3
                            ? 0.5
                            : 1
                        }
                        id={index}
                        key={index}
                        ref={(el) => (circles.current[index] = el)}
                        src={
                          isRed ? "/symmetry/red.svg" : "/symmetry/yellow.svg"
                        }
                        alt="vinyl"
                        width={120}
                        height={120}
                        className={`pointer-events-none self-center justify-self-center mix-blend-overlay`}
                      />
                    );
                  })}
                  <Image
                    src="/symmetry/plus.svg"
                    alt="center"
                    width={80}
                    height={80}
                    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
              <div className="flex h-full w-1/2 gap-[1.5rem]">
                <div className="h-full w-1/6"></div>
                <div className="flex h-full w-5/6 flex-col justify-center">
                  <h2 className="title heading-2 mb-[2rem]">Symmetry</h2>
                  <p className="subtitle heading-3 mb-[1.5rem] w-[80%]">
                    A sense of balance that's as timeless as a Miles Davis tune.
                  </p>
                  <p className="paragraph mb-[2rem]">
                    Simplicity is about stripping down to the essentials,
                    finding the core rhythm, and letting it swing. Gestalt's
                    principle of simplicity whispers to us to seek clarity in
                    the complex, to find a tune we can follow in the cacophony
                    of visual noise.
                  </p>
                  <p className="paragraph">
                    A few well-placed lines could suggest a skyline, a face, or
                    a movement. It's like bebop, where every note mattered and
                    every gap left room for improvisation. Simplicity creates
                    order. It makes the complex approachable, like a melody you
                    hum long after the record's spun out.
                  </p>
                  <div className="heading-6 mt-[2rem] flex items-center gap-[1rem]">
                    <Image
                      src="/symmetry/triangle.svg"
                      alt="Carret left"
                      width={36}
                      height={36}
                      className="h-auto w-[2.25rem]"
                    />
                    Hover to move the records!
                  </div>
                  <div className="mt-[4rem] flex justify-end">
                    <div className="relative flex flex-col items-center">
                      <Image
                        src="/symmetry/black.svg"
                        alt="circles"
                        width={276}
                        height={106}
                        className="circle h-auto w-[17.25rem]"
                      />
                      <Image
                        src="/symmetry/blue.svg"
                        alt="circles"
                        width={369}
                        height={106}
                        className="circle my-[-5rem] h-auto w-[23.063rem]"
                      />
                      <Image
                        src="/symmetry/white.svg"
                        alt="circles"
                        width={276}
                        height={106}
                        className="circle h-auto w-[17.25rem]"
                      />
                      <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-teal"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

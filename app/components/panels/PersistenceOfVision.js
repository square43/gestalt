import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Image from "next/image";

export default function PersistenceOfVision({ isMobile }) {
  const panel = useRef();
  const image = useRef();
  const [frame, setFrame] = useState(0);
  const [delay, setDelay] = useState(82);

  useEffect(() => {
    const switchFrame = () => {
      setFrame((prevFrame) => (prevFrame < 7 ? prevFrame + 1 : 0));
    };

    const interval = setInterval(switchFrame, delay);

    return () => clearInterval(interval);
  }, [delay]);

  useGSAP(
    () => {
      const title = new SplitType("#section8 .title", {
        types: ["chars", "words"],
      });
      const subtitle = new SplitType("#section8 .subtitle", { types: "words" });
      const paragraph = new SplitType("#section8 .paragraph", {
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
      if (isMobile) {
        gsap.from(".circles", {
          delay: 1,
          autoAlpha: 0,
          y: "-4.286rem",
          scrollTrigger: {
            trigger: ".trigger",
            start: isMobile ? "top center" : "top top",
            end: isMobile ? "bottom center" : "center bottom",
          },
          stagger: 0.1,
        });
      } else {
        gsap.from(".circles", {
          delay: 1,
          autoAlpha: 0,
          x: "-7.5rem",
          scrollTrigger: {
            trigger: ".trigger",
            start: isMobile ? "top center" : "top top",
            end: isMobile ? "bottom center" : "center bottom",
          },
          stagger: 0.1,
        });
      }
      gsap.from(".circlesM", {
        delay: 1,
        autoAlpha: 0,
        x: "-7.5rem",
        scrollTrigger: {
          trigger: ".trigger",
          start: isMobile ? "top center" : "top top",
          end: isMobile ? "bottom center" : "center bottom",
        },
        stagger: 0.1,
      });
    },
    { scope: panel },
  );

  return (
    <div
      ref={panel}
      id="section8"
      className="panel bg-ochre shadow-[0_0_30px_0_rgba(0,0,0,0.25)] lg:shadow-none"
      style={{
        transformStyle: isMobile && "preserve-3d",
        transform: isMobile && "perspective(240px) rotateX(1deg)",
        transformOrigin: isMobile && "top",
      }}
    >
      <div className="trigger !mx-auto h-[300vh] lg:h-auto">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-start lg:static lg:h-full">
          <div className="container flex gap-[1.25rem] pb-[3.5rem] pt-[7.5rem] lg:flex-col lg:pb-[5.714rem] lg:pt-[4.571rem] md:pt-[4rem]">
            <div className="w-1/12 lg:hidden"></div>
            <div className="w-5/12 text-black lg:w-full">
              <h2 className="title heading-2 mb-[2rem] lg:w-2/3 md:w-full">
                Persistence of vision
              </h2>
              <p className="subtitle heading-3 mb-[1.5rem] w-[80%] md:w-2/3">
                Pictures that make us move!
              </p>
              <p className="paragraph mb-[2rem]">
                Ever catch a flickering light that leaves an afterimage, like a
                flash lingering in your mind? That's persistence of vision, the
                groovy trick our eyes play to create continuous motion from
                static frames. It's the magic behind movies, animations, and the
                flicker of a neon sign.
              </p>
              <p className="paragraph mb-[2rem]">
                Twelve consecutive frames per second usually do the trick, while
                complete fluidity requires twenty four frames per second.
                Increase the speed of consecutive frames and the image will
                appear faster, like it's rushing somewhere!
              </p>
              <p className="paragraph">
                From flipbooks to cartoons, it creates the illusion of life in
                static images. It's like a jazz standard where every note builds
                on the last, weaving a seamless melody that keeps you entranced.
              </p>
              <div className="mt-[4rem] flex items-end lg:hidden">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    style={{
                      outlineWidth: `${index + 5}px`,
                      width: `calc(7.5rem + ${index * 0.5}rem)`,
                      height: `calc(7.5rem + ${index * 0.5}rem)`,
                    }}
                    className={`circles mr-[-4.438rem] rounded-full outline outline-yellow`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex w-1/2 flex-col items-center lg:w-full">
              <div className="lg:flex lg:items-end">
                <div className="mt-[4rem] hidden w-1/5 flex-col items-start lg:flex md:hidden">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      style={{
                        outlineWidth: `${index + 5}px`,
                        width: `calc(4.286rem + ${index * 0.5}rem)`,
                        height: `calc(4.286rem + ${index * 0.5}rem)`,
                      }}
                      className={`circles mb-[-1.786rem] rounded-full outline outline-yellow`}
                    ></div>
                  ))}
                </div>
                <div className="overflow-hidden lg:w-4/5 md:mt-[1rem] md:w-full md:scale-[1.2]">
                  <Image
                    ref={image}
                    src={`/persistence-of-vision/sprite.png`}
                    alt="Animation frame"
                    width={15360}
                    height={1080}
                    className="h-auto w-[800%] max-w-none"
                    style={{ transform: `translateX(-${frame * (100 / 8)}%)` }}
                    priority
                  />
                </div>
              </div>

              <div className="mt-[4rem] rounded-[2rem] bg-white px-[2rem] py-[1rem] lg:flex lg:w-full lg:items-center lg:justify-between md:flex-col">
                <p className="heading-4 mb-[0.75rem] text-center uppercase text-black lg:mb-0 lg:w-1/3 lg:text-left md:mb-[1rem] md:w-full md:text-center">
                  Frames per second
                </p>
                <div className="flex justify-between lg:gap-[1.429rem] md:w-full">
                  {[
                    { label: "2", value: 500 },
                    { label: "12", value: 82 },
                    { label: "24", value: 41 },
                    { label: "48", value: 20 },
                  ].map(({ label, value }) => (
                    <label key={value} className="flex flex-col items-center">
                      <input
                        type="radio"
                        name="delay"
                        value={value}
                        checked={delay === value}
                        onChange={() => setDelay(value)}
                        className="cursor-pointer"
                        hidden
                      />

                      <div
                        className={`flex h-[5rem] w-[3rem] justify-center rounded-full p-[0.5rem] transition-all duration-500 lg:h-[4rem] lg:w-[2.286rem] lg:p-[0.286rem] md:h-[6.154rem] md:w-[3.692rem] md:p-[0.615rem] ${delay == value ? "bg-yellow" : "bg-ochre"}`}
                      >
                        <div
                          className={`h-[2rem] w-[2rem] bg-black transition-all duration-500 lg:h-[1.714rem] lg:w-[1.714rem] md:h-[2.462rem] md:w-[2.462rem] ${delay === value ? "translate-y-full" : "translate-y-0"} rounded-full`}
                        ></div>
                      </div>

                      <span className="heading-3 text-black">{label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[4rem] hidden w-full scale-[0.8] items-end px-[] md:flex">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                style={{
                  outlineWidth: `${index + 5}px`,
                  width: `calc(6.154rem + ${index * 0.5}rem)`,
                  height: `calc(6.154rem + ${index * 0.5}rem)`,
                }}
                className={`circlesM mr-[-2.538rem] rounded-full outline outline-yellow`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

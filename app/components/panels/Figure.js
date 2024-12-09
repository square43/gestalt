import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Image from "next/image";

export default function Figure({ isMobile }) {
  const panel = useRef();
  useGSAP(
    () => {
      const title = new SplitType("#section5 .title", {
        types: ["chars", "words"],
      });
      const subtitle = new SplitType("#section5 .subtitle", { types: "words" });
      const paragraph = new SplitType("#section5 .paragraph", {
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
          start: "top top",
          end: "center bottom",
        },
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger",
          start: isMobile ? "top top" : "top top",
          end: isMobile ? "80% center" : "70% bottom",
          scrub: true,
        },
      });

      tl.from(".first", {
        yPercent: isMobile ? 10 : 100,
        autoAlpha: 0,
        ease: "power2.inOut",
      })
        .from(
          ".second",
          {
            yPercent: isMobile ? 10 : 100,
            autoAlpha: 0,
            ease: "power2.inOut",
          },
          "-=0.3",
        )
        .from(
          ".third",
          {
            yPercent: isMobile ? 10 : 100,
            autoAlpha: 0,
            ease: "power2.inOut",
          },
          "-=0.3",
        );
    },
    { scope: panel },
  );
  return (
    <div
      ref={panel}
      id="section5"
      className={`panel bg-white shadow-[0_0_30px_0_rgba(0,0,0,0.25)] lg:shadow-none`}
      style={{
        transformStyle: isMobile && "preserve-3d",
        transform: isMobile && "perspective(240px) rotateX(1deg)",
        transformOrigin: isMobile && "top",
      }}
    >
      <div className="trigger !mx-auto h-[300vh] lg:h-auto">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-start lg:static lg:h-full">
          <div className="container pb-[3.5rem] pt-[7.5rem] lg:py-[4.571rem]">
            <div className="mx-auto flex h-full w-full items-start justify-between gap-[1.25rem] lg:flex-col-reverse lg:gap-[2.857rem]">
              <div className="relative flex w-5/12 items-start justify-between gap-[1.5rem] lg:mx-auto lg:w-2/3 lg:justify-center">
                <div>
                  <Image
                    src="/figure/red.svg"
                    alt="Figure ground"
                    width={204}
                    height={791}
                    className="first"
                  />
                </div>
                <div>
                  <Image
                    src="/figure/blue.svg"
                    alt="Figure ground"
                    width={252}
                    height={791}
                    className="second"
                  />
                </div>
                <div>
                  <Image
                    src="/figure/red.svg"
                    alt="Figure ground"
                    width={204}
                    height={791}
                    className="third"
                  />
                </div>
              </div>
              <div className="spacer h-full w-1/12 lg:hidden"></div>
              <div className="flex h-full w-5/12 flex-col justify-center text-black lg:w-full">
                <h2 className="title heading-2 mb-[2rem]">Figure Ground</h2>
                <p className="subtitle heading-3 mb-[1.5rem] lg:w-5/6">
                  This Visual Principle isn't static. It's dynamic, man!
                </p>
                <p className="paragraph mb-[2rem]">
                  Every jazz solo needs its backdrop—a space for it to shine.
                  That's the figure-ground principle in action, a dance between
                  what's in the spotlight and what plays rhythm in the shadows.
                </p>
                <p className="paragraph">
                  Our minds instinctively separate the main attraction (the
                  figure) from its surroundings (the ground), creating a dynamic
                  environment that keeps us guessing. This dance kept viewers
                  engaged, their eyes darting between figure and ground,
                  savoring the visual interplay.
                </p>
                <div className="mt-[4rem] flex justify-end gap-[4rem] lg:hidden">
                  <Image
                    src={`/figure/small-red.svg`}
                    alt="objects"
                    width={100}
                    height={160}
                    className="objects h-auto w-[6.25rem]"
                  />
                  <Image
                    src={`/figure/small-blue.svg`}
                    alt="objects"
                    width={100}
                    height={160}
                    className="objects h-auto w-[6.25rem]"
                  />
                  <Image
                    src={`/figure/small-red.svg`}
                    alt="objects"
                    width={100}
                    height={160}
                    className="objects h-auto w-[6.25rem]"
                  />
                </div>
              </div>
              <div className="spacer h-full w-1/12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

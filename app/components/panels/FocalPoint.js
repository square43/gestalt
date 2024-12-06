import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Image from "next/image";

export default function FocalPoint() {
  const panel = useRef();

  useGSAP(
    () => {
      const title = new SplitType("#section9 .title", {
        types: ["chars", "words"],
      });
      const subtitle = new SplitType("#section9 .subtitle", { types: "words" });
      const paragraph = new SplitType("#section9 .paragraph", {
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

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "80% bottom",
          scrub: true,
        },
      });
      tl.from(".building", {
        yPercent: 100,
        stagger: 0.1,
      }).from(".light", {
        autoAlpha: 0,
      });
    },
    { scope: panel },
  );
  return (
    <div
      ref={panel}
      id="section9"
      className="panel shadow-[0_0_30px_0_rgba(0,0,0,0.25)]"
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(240px) rotateX(1deg)",
        transformOrigin: "top",
      }}
    >
      <div className="trigger !mx-auto h-[300vh]">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-start bg-gradient-to-b from-[#18042D] via-[#440089] via-65% to-[#8000FF]">
          <div className="absolute bottom-0 left-0 h-full w-full overflow-hidden">
            <Image
              priority
              src={`/focal-point/8.png`}
              alt="Decorative background"
              width={1920}
              height={1373}
              className={`lifeParallax absolute bottom-0 left-0 z-[-8] w-full max-w-none`}
            />
            {Array.from({ length: 7 }).map((_, index) => (
              <Image
                priority
                src={`/focal-point/${index + 1}.png`}
                alt="Decorative background"
                key={index}
                width={1920}
                height={1373}
                className={`lifeParallax absolute bottom-0 left-0 w-full max-w-none ${index == 6 ? "light" : "building"}`}
                style={{ zIndex: -index }}
              />
            ))}
          </div>
          <div className="container pt-[7.75rem]">
            <div className="mx-auto flex w-10/12 justify-end">
              <div className="w-1/2">
                <h2 className="title heading-2 mb-[2rem]">Focal Point</h2>
                <p className="subtitle heading-3 mb-[1.5rem] w-[80%]">
                  The spotlight should always be on the star!
                </p>
                <p className="paragraph mb-[2rem]">
                  In every composition, there's a lead instrument—a focal point
                  that grabs your attention and doesn't let go. This gestalt
                  principle is the anchor, the spotlight, the center of the
                  visual stage. Without it, images feel like a band with no
                  soloist, aimless and lost.
                </p>
                <p className="paragraph">
                  Focal points create harmony in the visual noise, guiding the
                  viewer through the composition. They keep the beat steady,
                  ensuring that even the most experimental designs have a rhythm
                  to follow. In the world of perception, the focal point is the
                  melody that keeps the crowd swinging.
                </p>
                <div className="mt-[4rem] flex justify-end">
                  <Image
                    src="/focal-point/focal.svg"
                    alt="Decorative object"
                    width={224}
                    height={224}
                    className="relative h-auto w-[14rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

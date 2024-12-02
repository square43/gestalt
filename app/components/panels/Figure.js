import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Image from "next/image";

export default function Figure() {
  const panel = useRef();
  useGSAP(
    () => {
      const title = new SplitType("#section5 .title", { types: "chars" });
      gsap.set(title.chars, {
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
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "80% bottom",
          scrub: true,
        },
      });

      tl.from(".first", {
        yPercent: 100,
        ease: "power2.inOut",
      })
        .from(
          ".second",
          {
            yPercent: 100,
            ease: "power2.inOut",
          },
          "-=0.3",
        )
        .from(
          ".third",
          {
            yPercent: 100,
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
      className={`panel bg-[#86dc7d] shadow-[0_0_30px_0_rgba(0,0,0,0.25)]`}
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(240px) rotateX(1deg)",
        transformOrigin: "top",
      }}
    >
      <div className="trigger !mx-auto h-[300vh]">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-start">
          <h2 className="title my-[3vw] text-center text-[4vw] text-black">
            4. Figure-Ground
          </h2>
          <div className="mb-[-0.8vw] flex h-full items-end">
            <Image
              src="/figure/first.svg"
              alt="Decorative object"
              width={218}
              height={844}
              className="third h-auto w-[8vw]"
            />
            <Image
              src="/figure/second.svg"
              alt="Decorative object"
              width={367}
              height={868}
              className="second h-auto w-[13.5vw]"
            />
            <Image
              src="/figure/first.svg"
              alt="Decorative object"
              width={218}
              height={844}
              className="first h-auto w-[8vw]"
            />
            <Image
              src="/figure/second.svg"
              alt="Decorative object"
              width={367}
              height={868}
              className="second h-auto w-[13.5vw]"
            />
            <Image
              src="/figure/first.svg"
              alt="Decorative object"
              width={218}
              height={844}
              className="third h-auto w-[8vw]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

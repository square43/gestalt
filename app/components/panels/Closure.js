import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function Closure() {
  const panel = useRef();
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
      tl.from(".part1", {
        x: "210%",
        y: "220%",
        rotate: "-95deg",
      })
        .from(
          ".part2",
          {
            x: "-110%",
            y: "420%",
            rotate: "85deg",
          },
          "<",
        )
        .from(
          ".part3",
          {
            x: "310%",
            y: "-50%",
            rotate: "-105deg",
          },
          "<",
        )
        .from(
          ".part4",
          {
            x: "-210%",
            y: "-50%",
            rotate: "55deg",
          },
          "<",
        )
        .from(
          ".part5",
          {
            x: "50%",
            y: "-250%",
            rotate: "55deg",
          },
          "<",
        )
        .from(
          ".part6",
          {
            x: "-250%",
            y: "50%",
            rotate: "35deg",
          },
          "<",
        )
        .from(
          ".part7",
          {
            x: "-150%",
            y: "-150%",
            rotate: "-155deg",
          },
          "<",
        )
        .from(
          ".part8",
          {
            x: "150%",
            y: "150%",
            rotate: "-35deg",
          },
          "<",
        );
    },
    { scope: panel },
  );
  return (
    <div
      ref={panel}
      id="section2"
      className={`panel bg-[#EE964B] shadow-[0_0_30px_0_rgba(0,0,0,0.25)]`}
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(240px) rotateX(1deg)",
        transformOrigin: "top",
      }}
    >
      <div className="trigger !mx-auto h-[300vh]">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-start">
          <h2 className="mb-[5vw] text-center text-[128px] text-black">
            2. Closure
          </h2>
          <div className="cube">
            <div className="row ml-[130px] flex justify-start gap-[116px]">
              <Image
                src="/closure/1.svg"
                alt="Part of cube"
                width={130}
                height={130}
                className="part1"
              />
              <Image
                src="/closure/2.svg"
                alt="Part of cube"
                width={130}
                height={130}
                className="part2"
              />
            </div>
            <div className="row flex justify-start gap-[116px]">
              <Image
                src="/closure/3.svg"
                alt="Part of cube"
                width={130}
                height={130}
                className="part3"
              />
              <Image
                src="/closure/4.svg"
                alt="Part of cube"
                width={130}
                height={130}
                className="part4"
              />
            </div>
            <div className="row ml-[130px] flex justify-start gap-[116px]">
              <Image
                src="/closure/5.svg"
                alt="Part of cube"
                width={130}
                height={130}
                className="part5"
              />
              <Image
                src="/closure/6.svg"
                alt="Part of cube"
                width={130}
                height={130}
                className="part6"
              />
            </div>
            <div className="row flex justify-start gap-[116px]">
              <Image
                src="/closure/7.svg"
                alt="Part of cube"
                width={130}
                height={130}
                className="part7"
              />
              <Image
                src="/closure/8.svg"
                alt="Part of cube"
                width={130}
                height={130}
                className="part8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

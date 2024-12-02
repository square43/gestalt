import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Image from "next/image";

export default function PersistenceOfVision() {
  const panel = useRef();
  const image = useRef();
  const [frame, setFrame] = useState(1);
  const [delay, setDelay] = useState(50);

  useEffect(() => {
    const switchFrame = () => {
      setFrame((prevFrame) => (prevFrame < 8 ? prevFrame + 1 : 1));
    };

    const interval = setInterval(switchFrame, delay);

    return () => clearInterval(interval);
  }, [delay]);

  useGSAP(
    () => {
      const title = new SplitType("#section8 .title", { types: "chars" });
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
    },
    { scope: panel },
  );

  return (
    <div
      ref={panel}
      id="section8"
      className="panel bg-[#F4D35E] shadow-[0_0_30px_0_rgba(0,0,0,0.25)]"
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(240px) rotateX(1deg)",
        transformOrigin: "top",
      }}
    >
      <div className="trigger !mx-auto h-[300vh]">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-start">
          <h2 className="title my-[3vw] text-center text-[4vw] text-black">
            7. Persistence of Vision
          </h2>
          <div className="w-[40vw]">
            <Image
              ref={image}
              src={`/persistence-of-vision/horse${frame}.png?t=${frame}`}
              alt="Animation frame"
              width={1920}
              height={1080}
              unoptimized
              className="h-auto w-full"
            />
          </div>

          <div className="mt-[3vw] flex gap-[20px] rounded-[20px] bg-white p-[20px]">
            {[
              { label: "x2", value: 25 },
              { label: "x1", value: 50 },
              { label: "x0.5", value: 100 },
              { label: "x0.25", value: 150 },
            ].map(({ label, value }) => (
              <label
                key={value}
                className="flex h-full w-[46px] flex-col items-center"
              >
                <input
                  type="radio"
                  name="delay"
                  value={value}
                  checked={delay === value}
                  onChange={() => setDelay(value)}
                  className="cursor-pointer"
                  hidden
                />
                <div className="relative h-[70px]">
                  <div className="h-full w-[10px] rounded-full bg-black"></div>
                  <div
                    className={`absolute left-1/2 top-0 transition-all duration-500 ${
                      delay === value
                        ? "translate-y-full bg-[#28afb0]"
                        : "translate-y-0 bg-[#EE964B]"
                    } h-1/2 w-[20px] -translate-x-1/2 rounded-full`}
                  ></div>
                </div>
                <span className="text-[14px]">{label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

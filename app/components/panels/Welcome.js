import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useLenis } from "lenis/react";
import Image from "next/image";
export default function Welcome() {
  const panel = useRef();
  const lenis = useLenis();
  const eyes = useRef();

  // Lock scrolling at the start
  useEffect(() => {
    if (lenis) lenis.stop();
    setTimeout(() => {
      if (lenis) lenis.start();
    }, 4000);
  }, [lenis]);

  useGSAP(
    () => {
      const title = new SplitType("#section1 .title", { types: "chars" });
      const subtitle = new SplitType("#section1 .subtitle", { types: "words" });
      gsap.set([title.chars, subtitle.words], {
        transformOrigin: "bottom",
      });

      gsap.to(".imageWrap", {
        ease: "power1.inOut",
        clipPath: "circle(60% at 50% 77%)",
        duration: 2,
        delay: 1,
      });
      gsap.from(title.chars, {
        duration: 0.7,
        scaleY: 0,
        stagger: 0.1,
        delay: 1,
        ease: "elastic.out(1.2,1)",
        onComplete: () => {
          gsap.to(title.chars.reverse(), {
            scaleY: 0,
            scrollTrigger: {
              trigger: ".trigger",
              scrub: true,
              start: "top top",
              end: "bottom bottom",
            },
            stagger: 0.1,
          });
        },
      });
      gsap.from(subtitle.words, {
        duration: 0.7,
        scaleY: 0,
        stagger: 0.1,
        delay: 1,
        ease: "elastic.out(1.2,1)",
        onComplete: () => {
          gsap.to(subtitle.words.reverse(), {
            scaleY: 0,
            scrollTrigger: {
              trigger: ".trigger",
              scrub: true,
              start: "top top",
              end: "bottom bottom",
            },
            stagger: 0.1,
          });
        },
      });
    },
    { scope: panel },
  );

  useEffect(() => {
    const updateEyes = ({ clientX, clientY }) => {
      const mappedValueX = (clientX / window.innerWidth) * 2 - 1;
      const mappedValueY = (clientY / window.innerHeight) * 2 - 1;
      const intensity = 20;

      const offset = {
        x: mappedValueX * intensity,
        y: mappedValueY * intensity,
      };

      gsap.to(eyes.current, {
        x: offset.x,
        y: offset.y,
        duration: 1,
        ease: "power3.out",
      });
    };

    // Attach the mousemove event
    window.addEventListener("mousemove", updateEyes);

    // Cleanup event listener
    return () => {
      window.removeEventListener("mousemove", updateEyes);
    };
  }, []);

  return (
    <div
      ref={panel}
      id="section1"
      className={`panel bg-orange shadow-[0_0_30px_0_rgba(0,0,0,0.25)]`}
      style={{
        transformOrigin: "top",
      }}
    >
      <div className="trigger !mx-auto h-[300vh]">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-center">
          <div className="container flex items-end">
            <div className="mx-auto w-10/12">
              <div className="absolute left-1/2 top-1/2 z-[2] flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <h1 className="title heading-1 text-center">Perception</h1>
                <h1 className="title heading-1 text-center">Playhouse</h1>
                <p className="subtitle heading-3 mt-[2rem] text-center">
                  A mixtape of visual quirks and principles!
                </p>
              </div>
              <div className="imageWrap relative">
                <div className="absolute bottom-[4.3%] left-1/2 z-[0] h-[12%] w-[27%] -translate-x-1/2">
                  <div ref={eyes} className="relative h-full w-full bg-white">
                    <div className="left-eye absolute left-[14.3%] top-1/2 h-[53%] w-[15.5%] -translate-y-1/2 rounded-full bg-gradient-to-b from-[#02260C] to-[#00A674]"></div>
                    <div className="left-eye absolute right-[14.3%] top-1/2 h-[53%] w-[15.5%] -translate-y-1/2 rounded-full bg-gradient-to-b from-[#02260C] to-[#00A674]"></div>
                  </div>
                </div>
                <Image
                  src="/intro/intro.png"
                  alt="Decorative background"
                  width={1370}
                  height={895}
                  priority
                  className="relative z-[1] h-auto w-full max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

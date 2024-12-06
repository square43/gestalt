import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

export default function Footer() {
  const footer = useRef();
  useGSAP(
    () => {
      const title = new SplitType("#footer .title", {
        types: ["chars", "words"],
      });

      const paragraph = new SplitType("#footer .paragraph", {
        types: "words",
      });
      gsap.set(title.chars, {
        transformOrigin: "bottom",
      });

      gsap.set(paragraph.words, {
        transformOrigin: "bottom",
      });
      gsap.from(title.chars, {
        scaleY: 0,
        scrollTrigger: {
          trigger: ".trigger",
          start: "top center",
          end: "bottom center",
        },
        stagger: 0.1,
        ease: "elastic.out(1.2,1)",
      });

      gsap.from(paragraph.words, {
        delay: 1,
        scaleY: 0,
        scrollTrigger: {
          trigger: ".trigger",
          start: "top center",
          end: "bottom center",
        },
        stagger: 0.01,
      });
    },
    { scope: footer },
  );
  return (
    <div
      id="footer"
      ref={footer}
      className="relative z-[100] bg-gradient-to-b from-[#147995] to-[#20A4CA] py-[5rem]"
    >
      <div className="trigger container">
        <div className="mx-auto flex w-2/3 flex-col items-center">
          <h2 className="title heading-2 mb-[2rem] text-center">
            ...And many more!
          </h2>
          <div className="w-3/4">
            <p className="paragraph mb-[2rem]">
              The world of visual principles stretches far beyond the few we've
              explored here. The world is brimming with visual
              curiosities—patterns in the sand, shadows that stretch and dance,
              and the interplay of light on a rainy street. It's a feast for the
              eyes, an infinite playground for the curious and creative.
            </p>
            <p className="paragraph">
              Dive deeper, and you'll find that every corner of the visual world
              holds a story, a lesson, a spark of wonder. So, keep your eyes
              wide open and your imagination tuned in, because the visual rhythm
              of the universe is always swinging.
            </p>
          </div>
          <div className="relative mt-[4rem]">
            <Image
              src="/footer/player.svg"
              alt="Record player"
              width={1160}
              height={871}
            />
            <Image
              src="/footer/real.svg"
              alt="Real"
              width={572}
              height={572}
              className="absolute left-0 top-0 h-[65.6%] w-[49.3%] animate-spin-slow"
            />
            <Image
              src="/footer/real.svg"
              alt="Real"
              width={572}
              height={572}
              className="absolute right-0 top-0 h-[65.6%] w-[49.3%] animate-spin-slow"
            />
            <Link
              href="https://lab.square43.com"
              className="heading-6 absolute bottom-[22.3%] left-1/2 flex -translate-x-1/2 items-center gap-[1rem] rounded-full bg-black p-[1rem] pr-[1.5rem] transition duration-500 hover:bg-white hover:text-black"
            >
              <Image
                src="/footer/buttonIcon.svg"
                alt="Button icon"
                width={64}
                height={64}
                className="h-auto w-[4rem] max-w-none"
              />
              Back to the lab
            </Link>
          </div>
        </div>
        <footer className="container flex justify-between gap-[1.25rem] pt-[2rem]">
          <div className="w-1/6">
            <Image src="/footer/logo.svg" alt="Logo" width={271} height={93} />
          </div>
          <div className="flex w-1/6 flex-col items-center justify-center">
            <div className="flex gap-[1rem]">
              <Link
                href="https://www.instagram.com/square43studio/"
                target="_blank"
                className="relative"
              >
                <Image
                  src="/footer/instagram.svg"
                  alt="instagram"
                  width={32}
                  height={32}
                  className="h-auto w-[2rem]"
                />
                <Image
                  src="/footer/instagramY.svg"
                  alt="instagram"
                  width={32}
                  height={32}
                  className="absolute left-0 top-0 h-auto w-[2rem] opacity-0 transition duration-500 hover:opacity-100"
                />
              </Link>
              <Link
                className="relative"
                href="https://www.linkedin.com/company/square43"
                target="_blank"
              >
                <Image
                  src="/footer/linkedin.svg"
                  alt="linkedin"
                  width={32}
                  height={32}
                  className="h-auto w-[2rem]"
                />
                <Image
                  src="/footer/linkedinY.svg"
                  alt="instagram"
                  width={32}
                  height={32}
                  className="absolute left-0 top-0 h-auto w-[2rem] opacity-0 transition duration-500 hover:opacity-100"
                />
              </Link>
              <Link
                className="relative"
                href="mailto:studio@square43.com"
                target="_blank"
              >
                <Image
                  src="/footer/mail.svg"
                  alt="mail"
                  width={32}
                  height={32}
                  className="h-auto w-[2rem]"
                />
                <Image
                  src="/footer/mailY.svg"
                  alt="instagram"
                  width={32}
                  height={32}
                  className="absolute left-0 top-0 h-auto w-[2rem] opacity-0 transition duration-500 hover:opacity-100"
                />
              </Link>
            </div>
          </div>
          <div className="w-1/6">
            <Link href="https://square43.com" target="_blank">
              <Image
                src="/footer/square-logo.svg"
                alt="Logo"
                width={271}
                height={95}
              />
            </Link>
          </div>
        </footer>
        <p className="paragraph mt-[1.5rem] text-center">
          ©MMXXIV &#8226; Square43 Studio
        </p>
      </div>
    </div>
  );
}

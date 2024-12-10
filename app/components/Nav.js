import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import Image from "next/image";
import Popup from "./Popup";
export default function Nav({ principles, isMobile }) {
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);
  const [directionNum, setDirectionNum] = useState(0);

  const handleScroll = ({ direction }) => {
    if (directionNum != direction) {
      setDirectionNum(direction);
    }
  };

  if (lenis) {
    lenis.on("scroll", handleScroll);
  }

  return (
    <>
      <div className="fixed right-[6rem] top-1/2 z-[999] flex -translate-y-1/2 flex-col gap-[1rem] lg:bottom-[1rem] lg:left-1/2 lg:right-auto lg:top-auto lg:-translate-x-1/2 lg:translate-y-0 lg:flex-row lg:items-center">
        <div className="flex flex-col items-center gap-[1rem] rounded-full bg-white p-[1rem] lg:flex-row lg:p-[0.8rem]">
          {principles.map((principle, index) => (
            <button
              key={index}
              className="group relative h-[2rem] w-[2rem] rounded-full bg-black"
              onClick={() => {
                if (isMobile) {
                  lenis.scrollTo(`#section${index + 1}`, {
                    duration: 2,
                    offset: 0,
                  });
                } else {
                  lenis.scrollTo(window.innerHeight * 3 * index, {
                    duration: 2,
                    offset: 0,
                  });
                }
              }}
            >
              <div
                className={`dot h-full w-full ${index == 0 ? "scale-[1]" : "scale-[0]"} rounded-full ${principle.color}`}
              ></div>
              <div className="absolute right-[2rem] top-1/2 w-[0] max-w-none -translate-y-1/2 overflow-hidden pr-[5px] text-black transition-all duration-500 group-hover:w-[18rem] lg:group-hover:w-0">
                {index != 0 && (
                  <div className="heading-6 flex h-[3.5rem] w-[18rem] max-w-none items-center rounded-l-full bg-white p-[1.5rem] text-left">
                    {principle.name}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className="left-0 top-0 flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-full bg-white lg:h-[2.857rem] lg:w-[2.857rem] md:hidden"
        >
          <Image
            src="/info.svg"
            alt="Info popup"
            width={17}
            height={42}
            className="lg:w-[0.75rem]"
          />
        </div>
      </div>
      <Popup setIsOpen={setIsOpen} isOpen={isOpen} />
      <div
        onClick={() => setIsOpen(true)}
        className={`fixed left-[1.846rem] hidden h-[2.462rem] w-[2.462rem] cursor-pointer items-center justify-center rounded-full bg-white transition-all duration-500 md:flex ${directionNum == 1 ? "top-0 -translate-y-full" : "top-[1.538rem] z-[1000] translate-y-0"}`}
      >
        <Image
          src="/info.svg"
          alt="Info popup"
          width={17}
          height={42}
          className="lg:w-[0.75rem]"
        />
      </div>
    </>
  );
}

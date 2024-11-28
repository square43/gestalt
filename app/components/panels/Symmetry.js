import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

export default function Symmetry() {
  const circles = useRef([]);
  const panel = useRef();

  useGSAP(
    () => {
      const title = new SplitType("#section7 .title", { types: "chars" });
      gsap.set(title.chars, {
        transformOrigin: "bottom",
      });
      gsap.from(title.chars, {
        scaleY: 0,
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
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
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      console.log(mouseY);
      const mappedValueX = (event.clientX / window.innerWidth) * 2 - 1;
      const mappedValueY = (event.clientY / window.innerHeight) * 2 - 1;
      const mouseOnRight = mouseX > window.innerWidth / 2;
      const mouseOnBottom = mouseY > window.innerHeight / 2;
      const intensity = 150;
      circles.current.forEach((circle, index) => {
        const strengthX = circle.getAttribute("data-strength-x");
        const strengthY = circle.getAttribute("data-strength-y");

        const isRightCircle = index % 4 >= 2;
        const isBottomCircle = index < 8;
        let offset;
        if (mouseOnRight) {
          offset = isRightCircle
            ? { ...offset, x: mappedValueX * intensity * strengthX }
            : { ...offset, x: -mappedValueX * intensity * strengthX };
        } else {
          offset = isRightCircle
            ? { ...offset, x: -mappedValueX * intensity * strengthX }
            : { ...offset, x: mappedValueX * intensity * strengthX };
        }
        if (mouseOnBottom) {
          offset = isBottomCircle
            ? { ...offset, y: -mappedValueY * intensity * strengthY }
            : { ...offset, y: mappedValueY * intensity * strengthY };
        } else {
          offset = isBottomCircle
            ? { ...offset, y: mappedValueY * intensity * strengthY }
            : { ...offset, y: -mappedValueY * intensity * strengthY };
        }

        gsap.to(circle, {
          x: offset.x,
          y: offset.y,
          duration: 1,
          ease: "power3.out",
        });
      });
    };

    // Attach the mousemove event
    window.addEventListener("mousemove", updatePositions);

    // Cleanup event listener
    return () => {
      window.removeEventListener("mousemove", updatePositions);
    };
  }, []);

  return (
    <div
      ref={panel}
      id="section7"
      className={`panel bg-[#28AFB0] shadow-[0_0_30px_0_rgba(0,0,0,0.25)]`}
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(240px) rotateX(1deg)",
        transformOrigin: "top",
      }}
    >
      <div className="trigger !mx-auto h-[300vh]">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-start">
          <h2 className="title my-[3vw] text-center text-[4vw] text-black">
            6. Symmetry
          </h2>
          <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <div className="grid h-[33vw] w-[33vw] grid-cols-4 grid-rows-4 items-center gap-4">
              {Array.from({ length: 16 }).map((_, index) => {
                return (
                  <div
                    data-strength-x={
                      index % 4 === 1 || index % 4 === 2 ? 1 : 0.5
                    }
                    data-strength-y={
                      Math.floor(index / 4) === 0 || Math.floor(index / 4) === 3
                        ? 0.5
                        : 1
                    }
                    id={index}
                    key={index}
                    ref={(el) => (circles.current[index] = el)}
                    className={`h-[8vw] w-[8vw] self-center justify-self-center rounded-full bg-[#F4D35E] mix-blend-overlay`}
                  ></div>
                );
              })}
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                X
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

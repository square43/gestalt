import { useLenis } from "lenis/react";

export default function Nav({ principles }) {
  const lenis = useLenis();

  return (
    <div className="fixed right-[2%] top-1/2 flex -translate-y-1/2 flex-col items-center gap-[20px] rounded-full bg-white p-[10px]">
      {principles.map((principle, index) => (
        <button
          key={index}
          className="group relative h-[20px] w-[20px] rounded-full bg-black"
          onClick={() => {
            lenis.scrollTo(window.innerHeight * 3 * index, {
              duration: 2,
              offset: 0,
            });
          }}
        >
          <div
            className={`dot h-full w-full ${index == 0 ? "scale-[1]" : "scale-[0]"} rounded-full ${principle.color}`}
          ></div>
          <div className="absolute right-[20px] top-1/2 w-[0] max-w-none -translate-y-1/2 overflow-hidden pr-[5px] text-black transition-all duration-500 group-hover:w-[280px]">
            {index != 0 && (
              <div className="flex h-[30px] w-[280px] max-w-none items-center rounded-l-full bg-white p-[10px] text-left">
                {principle.name}
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}

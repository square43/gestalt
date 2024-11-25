import Panels from "./components/Panels";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <div className="fixed left-[60px] top-[60px] z-[1] h-[50px] w-[50px] rounded-full bg-white text-[32px]">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          G
        </span>
      </div>
      <Panels />
    </main>
  );
}

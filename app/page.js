import Panels from "./components/Panels";
import Image from "next/image";
export default function Home() {
  return (
    <main className="overflow-x-clip">
      <div className="fixed left-[6.5rem] top-[3.5rem] z-[1]">
        <Image src="/logo.svg" alt="logo" width={64} height={64} />
      </div>
      <Panels />
    </main>
  );
}

import Panels from "./components/Panels";

export const metadata = {
  openGraph: {
    title: "Perception Playhouse",
    description: "A mixtape of visual quirks and principles!",
    images: [{ url: "/featured.jpg" }],
    url: "https://perception.cozify.lol",
  },
  title: "Perception Playhouse",
  description: "A mixtape of visual quirks and principles!",
  metadataBase: new URL("https://perception.cozify.lol"),
};
export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Panels />
    </main>
  );
}

import Bento from "@/components/Bento";
import Companies from "@/components/Companies";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="px-4">
      <Hero />
      <Companies />
      <Bento />
    </main>
  );
}

import Bento from "@/components/Bento";
import Clients from "@/components/Clients";
import Companies from "@/components/Companies";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Bento />
      <Features />
      <Clients />
    </main>
  );
}

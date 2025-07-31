import Contact from "@/sections/contact";
import Hero from "@/sections/hero";
import Services from "@/sections/services";
import Team from "@/sections/team";

export default function Home() {
  return (
    <div className="sm:p-4">
      <Hero />
      <Services />
      <div className="h-11"></div>
      <Team />
      <div className="h-11"></div>
      <Contact />
      <h1 className="text-center font-thin text-[#232380]">Made by <span className="text-red-600">Cursed</span></h1>
    </div>
  );
}

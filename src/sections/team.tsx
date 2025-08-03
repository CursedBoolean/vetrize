import TeamCard from "@/components/team-card";

export default function Team() {
    return (
        <section id="equipes" className="p-3 flex justify-center sm:justify-around gap-4 items-center flex-col text-[#171A51] h-full sm:h-full scroll-mt-25">
            <div className="p-3">
                <h1 className="text-3xl font-bold">Nos Docteurs</h1>
            </div>
            <div className="flex flex-col h-full sm:flex-row justify-around gap-3">
                <TeamCard image={"/zaki.jpg"} name="Zaki" description="Because they are clear and simple to read on a white background, simple sans-serif fonts are a popular option for white websites." />
                <TeamCard image={'/rayad.jpg'} name="Ryad" description="Because they are clear and simple to read on a white background, simple sans-serif fonts are a popular option for white websites." />
            </div>
        </section>
    );
}
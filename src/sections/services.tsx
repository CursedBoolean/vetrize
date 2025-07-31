import Servicing from "@/components/service";
import consultationIcon from "../../public/consultation.png"
import gardinageIcon from "../../public/gardinage.png"
import emergencyIcon from "../../public/emergency.png"
import consultation from "../../public/vetcare1.jpg";
import veturg from "../../public/veturg.jpg";
import petsitting from "../../public/petsitting.jpg";



export default function Service() {
    return (
        <section id="services" className="p-3 w-full flex justify-around h-fit sm:h-full gap-y-5 items-center flex-col text-[#171A51] scroll-mt-30">
            <div className="">
                <h1 className="text-3xl font-bold">Services</h1>
            </div>
            <div className="flex flex-col gap-3 justify-evenly h-11/12">
                <Servicing title="Consultations et Vaccinations" description="Examens de santé complets, diagnostics, traitements médicaux et programmes de vaccination personnalisés pour protéger vos animaux contre les maladies courantes." icon={consultationIcon} image={consultation} left={true} />
                <Servicing title="Chirurgie et Urgence" description="Interventions chirurgicales programmées et soins d'urgence 24h/7j pour répondre rapidement aux besoins critiques de vos compagnons." icon={emergencyIcon} image={veturg} left={false}/>
                <Servicing title="Gardinage" description="Services de pension et hébergement temporaire dans un environnement sécurisé et bienveillant pendant vos absences ou déplacements." icon={gardinageIcon} image={petsitting} left={true}/>
            </div>
        </section>
    );
}
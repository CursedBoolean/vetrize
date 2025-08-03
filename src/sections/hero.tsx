import { BLUR_IMAGE_URL } from "@/components/constants";
import Image from "next/image";


export default function Hero() {
    return (
        <section id="hero" className="sm:p-3 w-full h-screen sm:h-full scroll-mt-30">
            <div className="sm:rounded-3xl flex flex-col md:flex-row justify-around w-full h-fit items-center sm:shadow-xl sm:bg-[#141448]">
                <div className="p-4 sm:w-2/5 text-[#141448] sm:text-amber-50 text-center text-balance">
                    <h1 className="text-2xl sm:text-3xl">Votre partenaire de confiance pour le bien-être de vos animaux</h1>
                    <p className="text-base sm:text-lg font-light">{"Chez Vetrize, nous offrons des soins vétérinaires compassionnels et professionnels pour vos chiens, chats et petits compagnons. De la consultation de routine aux urgences, notre équipe expérimentée veille à la santé et au bonheur de vos fidèles amis. Prenez rendez-vous dès aujourd'hui et offrez à votre animal les soins qu'il mérite."}</p>
                </div>
                <div className=" sm:w-1/3 flex">
                    <Image src={'/dogcat.png'} placeholder={BLUR_IMAGE_URL} height={500} width={500} priority alt="Adorable tabby kitten sitting on golden retriever mix dog's head - cute cat and dog friendship portrait on white background" className="block"/>
                </div>
            </div>
        </section>
    );
}
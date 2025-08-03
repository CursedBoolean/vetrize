import Image from "next/image";
import Link from "next/link";
import mail from "../../public/mail.png";
import instagram from "../../public/instagram.png";
import location from "../../public/location.png";
import phone from "../../public/phone.png";
import { BLUR_IMAGE_URL } from "@/components/constants";

export default function Contact() {
    return (
        <section id="contact" className="p-3 w-full flex justify-center gap-y-6 items-center flex-col text-[#171A51] h-screen scroll-mt-10">
            <div className="">
                <h1 className="text-3xl font-bold">Contactez Nous</h1>
            </div>
            <div className="flex flex-col max-h-min justify-between gap-4 items-center">
                <p className=" text-lg text-center max-w-full sm:max-w-1/2 text-balance">
                    {"Une question sur la santé de votre animal ? Besoin d'un rendez-vous ou d'une consultation d'urgence ? Notre équipe est à votre écoute pour vous accompagner et prendre soin de vos compagnons. Nous sommes là pour vous répondre et vous conseiller."}
                </p>
                <div className="flex gap-1.5 sm:space-x-4 sm:flex-row flex-col p-4 items-center">
                    <Link href={"mailto:cabinetvetrize@gmail.com"} className="hover:opacity-90 rounded-lg bg-[#141448] px-4 py-2 text-[#F3F4F6] font-semibold flex flex-row justify-between items-center gap-1" target="_blank"><Image src={mail} placeholder={BLUR_IMAGE_URL} alt="" className="size-6"/>Contact me</Link>
                    <Link href={"https://maps.app.goo.gl/Kyi94QcVJEJ3vCDf9"} className="sm:w-auto w-11/12 px-4 py-2 rounded-lg border-1 border-[#141448] text-[#141448] font-semibold flex flex-row justify-between items-center gap-1" target="_blank">{"Itinéraire"}<Image src={location} placeholder={BLUR_IMAGE_URL} alt="" className="size-6"/></Link>
                    <Link href={"tel:+213 774 98 42 14"} className="sm:w-auto w-11/12 px-4 py-2 rounded-lg border-1 border-[#141448] text-[#141448] font-semibold flex flex-row justify-between items-center gap-1" target="_blank">{"Téléphone"}<Image placeholder={BLUR_IMAGE_URL} src={phone} alt="" className="size-6"/></Link>
                    <Link href={"https://www.instagram.com/cabinetvetrize/"} className="sm:w-auto w-11/12 px-4 py-2 rounded-lg border-1 border-[#141448] text-[#141448] font-semibold flex flex-row justify-between items-center gap-1" target="_blank">{"Instagram"}<Image src={instagram} placeholder={BLUR_IMAGE_URL} alt="" className="size-6"/></Link>
                </div>
            </div>
        </section>
    );
}
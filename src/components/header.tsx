import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import HamburgerMenu from "./hamburgermenu";

export default function Header() {
    return (
        <div className="sticky text-[#171A51] font-semibold text-2xl top-0 z-100 p-2 shadow-xs shadow-[#d6d6fa] bg-[#F3F4F6]">
            <section className="sm:max-w-5/6 w-full mx-auto flex justify-between p-2 sm:p-3 items-center">
                <Link href="#hero" className="hover:opacity-90 flex flex-row items-center">
                    <Image src={logo} alt="logo" className="size-16"/>
                    <h1 className="text-2xl sm:text-3xl font-bold">VetRize</h1>
                </Link>
                <div>
                    <nav className="space-x-8 text-xl sm:block hidden">
                        <Link href="#services" scroll={true} className="hover:opacity-90">Services</Link>
                        <Link href="#equipes" scroll={true} className="hover:opacity-90">Nos Docteurs</Link>
                        <Link href="#contact" scroll={true} className="hover:opacity-90">Contactez Nous</Link>
                    </nav>
                    <HamburgerMenu />
                </div>
            </section>
        </div>
    );
}
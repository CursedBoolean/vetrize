import Image, { StaticImageData } from "next/image";

export default function Servicing(props: { title: string; description: string; icon: string | StaticImageData; image: string | StaticImageData;  left:boolean}) {
    return (
        <div className={props.left == true ? "flex flex-col sm:flex-row-reverse justify-evenly h-full items-center" : "flex flex-col sm:flex-row justify-evenly items-center"}>
            <div className="sm:max-w-1/3 p-4">
                <Image src={props.image} alt="" className="hidden sm:block rounded-3xl shadow-xl shadow-[#9393B9] brightness-75 object-fit"/>
            </div>
            <div className="flex flex-col gap-2 rounded-3xl max-w-sm sm:max-w-xl items-center justify-evenly text-[#141448]">
                <Image src={props.icon} alt="" />
                <h1 className="text-center text-xl sm:text-2xl font-medium">{props.title}</h1>
                <p className="text-center text-sm sm:text-lg font-light">{props.description}</p>
            </div>
        </div>
    );
}
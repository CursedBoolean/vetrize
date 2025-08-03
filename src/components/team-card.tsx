import Image, { StaticImageData } from "next/image";
import { BLUR_IMAGE_URL } from "./constants";


export default function TeamCard(props: { image: string | StaticImageData; name: string; description: string;}) {
    return (
        <div className={ `flex flex-col justify-around gap-y-4 items-center text-center`}>
            <Image src={props.image} height={500} width={500} placeholder={BLUR_IMAGE_URL} alt="" className="max-w-1/2 sm:max-w-xs object-cover rounded-full shadow-xl shadow-[#9393B9]" />
            <div className="max-w-3/4 text-shadow-2xl text-shadow-[#9393B9]">
                <h2 className="text-xl sm:text-2xl font-semibold">{props.name}</h2>
                <p className="text-lg sm:text-xl font-light">{props.description}</p>
            </div>
        </div>
    );
}
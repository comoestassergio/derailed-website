import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
import { useRouter } from "next/router"


export default function Card ({ el }) {

    useEffect(() => {
        AOS.init()
    }, [])

    const router = useRouter()
    
    const handleClick = () => {
        router.push('/categories/' + el?.name)
    }

    return (
        <li data-aos="fade-up" onClick={handleClick} className="shadow-2xl py-12 px-10 bg-white z-20 hover:cursor-pointer hover:shadow-5xl hover:scale-105 transition-transform">
            <div className="relative w-full h-80 mx-auto">
                <Image className=" object-cover" src={'/../public/images/' + el.image} fill={true} alt=''/>
            </div>
            <div className="mt-5 flex flex-col justify-center gap-3">
                <h2 className="text-3xl uppercase">{el.name}</h2>
                <p className="text-lg opacity-70">{el.description}</p>
            </div>
        </li>
    )
}
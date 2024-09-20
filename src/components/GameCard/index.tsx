import { GameProps } from "@/utils/types/game"
import Image from "next/image"
import Link from "next/link"
import { BiRightArrowCircle } from "react-icons/bi"

interface GameCardProps {
    data: GameProps
}

export const GameCard = ({ data }: GameCardProps) => {
    return (
        <Link href={`/game/${data.id}`} >
            <section className="w-full bg-slate-200 rounded-lg p-4 mb-5" >
                <div className="relative w-full h-56 hover:scale-105 transition-all duration-300" >
                    <Image
                        src={data.image_url}
                        alt={data.title}
                        quality={100}
                        fill={true}
                        sizes="(max-width: 760px) 100vw, (max-width: 1200px) 44vw"
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="flex justify-between items-center mt-4" >
                    <p
                        className="text-sm font-bold px-2 text-black text-ellipsis truncate whitespace-nowrap overflow-hidden"
                    >
                        {data.title}
                    </p>
                    <BiRightArrowCircle size={24} color="#000" />
                </div>
            </section>
        </Link>
    )
}
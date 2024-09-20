import { Container } from "@/components/Container";
import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Label } from "./components/label";
import { GameCard } from "@/components/GameCard";
import { Metadata } from "next";

interface PropsParams {
    params: {
        id: string
    }
}

export async function generateMetadata({ params }: PropsParams): Promise<Metadata> {
    try {
        const res: GameProps = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${params.id}`, { cache: "no-store" })
            .then(res => res.json())
            .catch(() => {
                return {
                    title: "DalyGames - descubra jogos incríveis para se divertir"
                }
            })

        return {
            title: res.title,
            description: `${res.description.slice(0, 100)}...`,
            openGraph: {
                title: res.title,
                images: [res.image_url]
            },
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: true,
                    noimageindex: true
                }
            }
        }
    } catch (error) {
        return {
            title: "DalyGames - descubra jogos incríveis para se divertir"
        }
    }
}

async function getGameData(id: string) {
    try {
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, { cache: "no-store" })
        return res.json();
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
}

async function getSortedGame() {
    try {
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { cache: "no-store" });

        return res.json()
    }
    catch (err) {
        throw new Error("Failed to fetch data");
    }
}

export default async function Game({ params: { id } }: { params: { id: string } }) {
    const data: GameProps = await getGameData(id)
    const sortedGame: GameProps = await getSortedGame()

    if (!data) {
        redirect("/")
    }

    return (
        <main className="w-full text-black" >
            <div className="bg-black h-80 sm:h-96 w-full relative " >
                <Image
                    src={data.image_url}
                    alt={data.title}
                    priority={true}
                    quality={100}
                    fill={true}
                    className="object-cover w-full h-80 sm:h-96 opacity-75"
                    sizes="(max-width: 760px) 100vw, (max-width: 1200px) 44vw"
                />
            </div>
            <Container>
                <h1 className="text-xl font-bold my-4">{data.title}</h1>
                <p>{data.description}</p>
                <h2 className="font-bold text-lg mt-7 mb-2">Plataformas</h2>
                <div className="flex gap-2 flex-wrap" >
                    {data.platforms.map((name, index) => (
                        <Label labelProps={name} key={index} />
                    ))}
                </div>
                <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>
                <div className="flex gap-2 flex-wrap" >
                    {data.categories.map((name, index) => (
                        <Label labelProps={name} key={index} />
                    ))}
                </div>
                <p className="mt-7 mb-2">
                    <strong>Data de lançamento: </strong>{data.release}
                </p>

                <h2 className="font-bold text-lg mt-7 mb-2">Jogo recomendado</h2>
                <div className="flex" >
                    <div className="flex-grow" >
                        <GameCard data={sortedGame} />
                    </div>
                </div>
            </Container>
        </main>
    )
} 
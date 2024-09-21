import { Container } from "@/components/Container";
import Image from "next/image";
import userImage from "/public/user.png"
import { FaShareAlt } from "react-icons/fa";
import { FavoriteCard } from "./components/favorite";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Meu Perfil - DalyGames",
    description: "Leonardo Nunes - DalyGames"
}

export default function Profile() {
    return (
        <main className="w-full text-black" >
            <Container>
                <section className="flex flex-col sm:flex-row mt-8 mb-6 items-center justify-between relative gap-3" >
                    <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-start" >
                        <Image
                            src={userImage}
                            alt="Imagem de perfil do usuário"
                            className="rounded-full w-56 h-56 object-cover"
                        />
                        <h1 className="font-bold text-2xl " >Leonardo Nunes</h1>
                    </div>
                    <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center" >
                        <button className="bg-gray-700 px-4 py-3 rounded-lg text-white" >
                            Configurações
                        </button>
                        <button className="bg-gray-700 px-4 py-3 rounded-lg" >
                            <FaShareAlt size={24} color="#FFF" />
                        </button>
                    </div>
                </section>
                <section className="flex flex-wrap gap-5 flex-col md:flex-row" >
                    <div className="flex-grow flex-wrap" >
                        <FavoriteCard />
                    </div>
                    <div className="flex-grow flex-wrap" >
                        <FavoriteCard />
                    </div>
                    <div className="flex-grow flex-wrap" >
                        <FavoriteCard />
                    </div>
                </section>
            </Container>
        </main>
    )
} 
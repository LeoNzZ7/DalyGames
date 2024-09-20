import { Container } from "@/components/Container";
import { GameCard } from "@/components/GameCard";
import { Input } from "@/components/Input";
import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";

async function getDalyGame() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { next: { revalidate: 320 } });

    return res.json()
  }
  catch (e) {
    throw new Error("Failed to fetch data")
  }
}

async function getGamesData() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, { next: { revalidate: 320 } });

    return res.json()
  }
  catch (e) {
    throw new Error("Failed to fetch data")
  }
}

export default async function Home() {
  const dalyGame: GameProps = await getDalyGame()

  const gamesData: GameProps[] = await getGamesData()

  return (
    <main className="flex" >
      <Container >
        <h1
          className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo exclusivo para você
        </h1>
        <Link href={`/game/${dalyGame.id}`} >
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative rounded-lg">
              <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center gap-2" >
                <p className="font-bold text-xl text-white" >{dalyGame.title}</p>
                <BsArrowRightSquare size={24} color="#FFF" />
              </div>
              <Image
                src={dalyGame.image_url}
                alt={dalyGame.title}
                priority={true}
                quality={100}
                fill={true}
                className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
                sizes="(max-width: 760px) 100vw, (max-width: 1200px) 44vw"
              />
            </div>
          </section>
        </Link>
        <Input />
        <h2 className="text-lg font-bold mt-8 mb-5">
          Jogos para conhecer
        </h2>
        <section className="grid gap-2 sm:grid-col-2 md:grid-col-3 lg:grid-cols-4" >
          {gamesData.map((game) => (
            <GameCard data={game} key={game.id} />
          ))}
        </section>
      </Container>
    </main>
  )
}
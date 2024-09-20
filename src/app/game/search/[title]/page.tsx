import { Container } from "@/components/Container";
import { GameCard } from "@/components/GameCard";
import { Input } from "@/components/Input";
import { GameProps } from "@/utils/types/game";

async function getData(title: string) {
    try {
        const decodeTitle = decodeURI(title);
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`)
        return res.json();
    } catch (error) {

    }
}

export default async function Search({
    params: { title }
}: {
    params: { title: string }
}) {
    const games: GameProps[] = await getData(title)

    console.log(games)

    return (
        <main className="w-full text-black" >
            <Container>
                <Input />
                <h1 className="font-bold text-xl mt-8 mb-5" >
                    Veja o que encontramos na nossa base
                </h1>
                {!games && (
                    <p>Esse jogo não foi encontrado!...</p>
                )}

                <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" >
                    {games && games.map((game) => (
                        <GameCard data={game} key={game.id} />
                    ))}
                </section>
            </Container>
        </main>
    )
}
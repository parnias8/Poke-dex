import PokemonCard from "@/components/PokemonCard";
import { Black_And_White_Picture } from "next/font/google";
import Image from "next/image";
const pokemon = [
  {
    id: "0001",
    name: "Bulbasaur",
    image: "/pokemon_jpg/1.jpg",
    types: ["Grass", "Poison"],
  },
  {
    id: "0002",
    name: "Ivysaur",
    image: "/pokemon_jpg/2.jpg",
    types: ["Grass", "Poison"],
  },
  {
    id: "0003",
    name: "Venusaur",
    image: "/pokemon_jpg/3.jpg",
    types: ["Grass", "Poison"],
  },
  {
    id: "0003",
    name: "Mega Venusaur",
    image: "/pokemon_jpg/3-mega.jpg",
    types: ["Grass", "Poison"],
  },
  {
    id: "0004",
    name: "Charmander",
    image: "/pokemon_jpg/4.jpg",
    types: ["Fire"],
  },
  {
    id: "0005",
    name: "Charmeleon",
    image: "/pokemon_jpg/5.jpg",
    types: ["Fire"],
  },
  {
    id: "0006",
    name: "Charizard",
    image: "/pokemon_jpg/6.jpg",
    types: ["Fire", "Flying"],
  },
  {
    id: "0006",
    name: "Mega Charizard X",
    image: "/pokemon_jpg/6-mega-x.jpg",
    types: ["Fire", "Dragon"],
  },
  {
    id: "0006",
    name: "Mega Charizard Y",
    image: "/pokemon_jpg/6-mega-y.jpg",
    types: ["Fire", "Flying"],
  },
  {
    id: "0007",
    name: "Squirtle",
    image: "/pokemon_jpg/7.jpg",
    types: ["Water"],
  },
  {
    id: "0008",
    name: "Wartortle",
    image: "/pokemon_jpg/8.jpg",
    types: ["Water"],
  },
  {
    id: "0009",
    name: "Blastoise",
    image: "/pokemon_jpg/9.jpg",
    types: ["Water"],
  },
  {
    id: "0009",
    name: "Mega Blastoise",
    image: "/pokemon_jpg/9-mega.jpg",
    types: ["Water"],
  },
  {
    id: "0010",
    name: "Caterpie",
    image: "/pokemon_jpg/10.jpg",
    types: ["Bug"],
  },
  {
    id: "0011",
    name: "Metapod",
    image: "/pokemon_jpg/11.jpg",
    types: ["Bug"],
  },
  {
    id: "0012",
    name: "Butterfree",
    image: "/pokemon_jpg/12.jpg",
    types: ["Bug", "Flying"],
  },
  {
    id: "0013",
    name: "Weedle",
    image: "/pokemon_jpg/13.jpg",
    types: ["Bug", "Poison"],
  },
  {
    id: "0014",
    name: "Kakuna",
    image: "/pokemon_jpg/14.jpg",
    types: ["Bug", "Poison"],
  },
  {
    id: "0015",
    name: "Beedrill",
    image: "/pokemon_jpg/15.jpg",
    types: ["Bug", "Poison"],
  },
  {
    id: "0015",
    name: "Mega Beedrill",
    image: "/pokemon_jpg/15-mega.jpg",
    types: ["Bug", "Poison"],
  },
];
export default function Home(){
  return(
    <main className="min-h-screen bg-zinc-50">
      <header className="bg-red-600 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
      
        <h1 className="text-white text-3xl font-bold"> 
          Pokedex
          </h1>
          <input type="text" 
          placeholder="Search Pokemons"
          className="border rounded-lg italic py-1 bg-white text-gray-800 px-4"/>
          </div>
          </div>
        </header>
        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-4 gap-8 justify-center">
            {pokemon.map((poke)=>(
              <PokemonCard
              key={`${poke.id}-${poke.name}`}
              id={poke.id}
              name={poke.name}
              image={poke.image}
              types={poke.types}/>

            )
            )}


          </div>

        </section>
        
      
    </main>
);
}

"use client";

import { useState } from "react";
import PokemonCard from "@/components/PokemonCard";
import pokemon from "@/data/pokemon";
import PageHeader from "@/components/PageHeader";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-zinc-100">
      <PageHeader
        Pokedex="PokedeX"
        search={search}
        setSearch={setSearch}
      />

      <section className="mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {filteredPokemon.map((poke) => (
            <PokemonCard
              key={`${poke.id}-${poke.name}`}
              id={poke.id}
              name={poke.name}
              image={poke.image}
              types={poke.types}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
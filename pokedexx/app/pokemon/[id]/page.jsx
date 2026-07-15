import pokemon from "@/data/pokemon";
import typeColors from "@/data/typeColors";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export default async function PokemonPage({ params }) {
  const { id } = await params;

  const poke = pokemon.find((p) => p.id === id);

  if (!poke) {
    return (
      <h1 className="mt-20 text-center text-3xl">
        Pokémon not found
      </h1>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-100">
      <PageHeader Pokedex="PokedeX" />

      <div className="min-h-screen bg-white px-10 py-12">
        <div className="flex flex-col items-center">

          {/* Image */}
          <Image
            src={poke.image}
            alt={poke.name}
            width={400}
            height={400}
            className="object-contain"
          />

          {/* Name / Category */}
          <div className="mt-16 grid w-full max-w-6xl grid-cols-2 gap-20">

            {/* Left */}
            <div>
              <h1 className="text-6xl font-bold text-gray-800">
                {poke.name}
              </h1>

              <p className="mt-3 text-3xl text-gray-500">
                #{poke.id}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {poke.types.map((type) => (
                  <span
                    key={type}
                    className={`${typeColors[type]} rounded-full px-5 py-2 text-lg font-semibold text-white`}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-end gap-8 text-right">
              <div>
                <h2 className="text-lg font-bold uppercase tracking-wider text-gray-800">
                  Category
                </h2>

                <p className="mt-2 text-3xl text-gray-500">
                  {poke.category}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold uppercase tracking-wider text-gray-800 justify-items-start">
                  Ability
                </h2>

                <p className="mt-2 text-3xl text-gray-500">
                  {poke.ability}
                </p>
              </div>
            </div>

          </div>

          {/* Strengths */}
          <div className="mt-20 w-full max-w-6xl">
            <h2 className="mb-5 text-3xl font-bold text-gray-800">
              Strengths
            </h2>

            <div className="flex flex-wrap gap-4">
              {poke.strengths.map((type) => (
                <span
                  key={type}
                  className={`${typeColors[type]} rounded-full px-5 py-2 text-lg font-semibold text-white`}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Weaknesses */}
          <div className="mt-16 w-full max-w-6xl">
            <h2 className="mb-5 text-3xl font-bold text-gray-800">
              Weaknesses
            </h2>

            <div className="flex flex-wrap gap-4">
              {poke.weaknesses.map((type) => (
                <span
                  key={type}
                  className={`${typeColors[type]} rounded-full px-5 py-2 text-lg font-semibold text-white`}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Evolution */}
          <div className="mt-16 w-full max-w-6xl">
            <h2 className="mb-5 text-3xl font-bold text-gray-800">
              Evolution
            </h2>

            <div className="flex flex-wrap gap-4">
              {poke.evolution.map((evo) => (
                <div
                  key={evo}
                  className="rounded-xl border bg-zinc-50 px-6 py-4 shadow-sm"
                >
                  <p className="text-xl font-semibold text-gray-700">
                    {evo}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
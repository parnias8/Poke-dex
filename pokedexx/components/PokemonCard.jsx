import Image from "next/image";

const typeColors = {
  Grass: "bg-green-700",
  Poison: "bg-purple-700",
  Fire: "bg-orange-500",
  Water: "bg-blue-500",
  Flying: "bg-sky-400",
  Bug: "bg-lime-600",
  Dragon: "bg-indigo-700",
  Electric: "bg-yellow-400",
  Psychic: "bg-pink-500",
  Ice: "bg-cyan-400",
  Rock: "bg-stone-500",
  Ground: "bg-amber-700",
  Ghost: "bg-violet-700",
  Dark: "bg-gray-800",
  Steel: "bg-slate-500",
  Fairy: "bg-pink-300",
  Fighting: "bg-red-700",
  Normal: "bg-gray-400",
};

export default function PokemonCard({id, name, image, types}) {
  return (
    <div className="group h-80 w-64 rounded-3xl bg-white border shadow-lg flex flex-col p-5 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
      <p className="text-sm text-gray-400 font-semibold">
        #{id}
      </p>
      

      <div className="flex items-center justify-center py-2">
        <Image
          src={image}
          alt={name}
          width={150}
          height={160}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h2 className="mt-4 text-xl font-bold text-center text-gray-500">
        {name}
      </h2>

      <div className="mt-3 flex justify-center gap-2">
 {types.map((type) => (
    <span
      key={type}
      className={`rounded-full ${typeColors[type]} px-3 py-1 text-sm font-semibold text-white`}
    >
      {type}
    </span>
  ))}
</div>
    </div>
  );}

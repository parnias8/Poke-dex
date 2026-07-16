import Link from "next/link";
import Image from "next/image";
import typeColors from "@/data/typeColors";
export default function PokemonCard({id, name, image, types}) {
  return (
    <Link href={`/pokemon/${id}`}>
    <div className="group h-80 w-64 rounded-3xl bg-white border shadow-lg flex flex-col p-5 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
      <p className="text-sm text-gray-400 font-semibold">
        #{id}
      </p>
      

      <div className="flex items-center justify-center py-2">
     <img
       src={image}
        alt={name}
        width={150}
        height={160}
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
    </Link>
  );}

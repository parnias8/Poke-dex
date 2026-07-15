import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <PageHeader Pokedex="PokedeX" />

<Image
  src="/banner/banner.jpg"
  alt="Pokemon Banner"

  width={1920}
  height={500}
  className="w-full h-80 object-cover "
  priority
/>

      <main className="min-h-screen bg-zinc-100">
        <h1 className="pt-20 text-center text-4xl font-bold text-gray-800">
  About PokedeX
</h1>

<div className="mx-auto max-w-4xl px-6 py-10">
  <p className="mb-6 text-lg leading-8 text-gray-700">
    PokedeX is a personal frontend project built as part of my journey to
    improve my React, Next.js, and Tailwind CSS skills. The goal of this
    project was to recreate a modern Pokédex interface while practicing
    component-based architecture, responsive layouts, and dynamic routing.
  </p>

  <p className="mb-6 text-lg leading-8 text-gray-700">
    The application allows users to browse Pokémon, search by name, and view
    detailed information including Pokémon types, abilities, strengths,
    weaknesses, and evolution chains. Each Pokémon has its own dedicated page
    generated through Next.js dynamic routes.
  </p>

  <p className="text-lg leading-8 text-gray-700">
    This project was created purely for educational purposes to strengthen my
    frontend development skills and gain hands-on experience with modern web
    technologies such as Next.js, React, Tailwind CSS, reusable components,
    state management, and responsive design.
  </p>
</div>
</main>
</>
  );
}
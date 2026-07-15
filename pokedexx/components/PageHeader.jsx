"use client";

import Link from "next/link";

export default function PageHeader({
  Pokedex,
  search = "",
  setSearch,
}) {
  return (
    <header className="bg-red-600 py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6">

        <div>
          <Link href="/">
            <h1 className="cursor-pointer text-4xl font-bold text-white">
              {Pokedex}
            </h1>
          </Link>
        </div>

        <div className="flex justify-center">
          {setSearch ? (
            <input
              type="text"
              placeholder="Search Pokémon..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md rounded-lg border bg-white px-4 py-2 italic text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          ) : (
            <div className="w-full max-w-md" />
          )}
        </div>

        <nav className="flex justify-end gap-8">
          <Link
            href="/"
            className="text-lg font-semibold text-white hover:text-gray-200"
          >
            Home
          </Link>

          <Link
            href="/About"
            className="text-lg font-semibold text-white hover:text-gray-200"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
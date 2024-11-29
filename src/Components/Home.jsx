import React, { useState } from "react";
import Search from "./Search";
import SearchMenu from "./SearchMenu";
import CountriesContainer from "./CountriesContainer";

export default function Home() {
  const [query, setQuery] = useState("")
  return (
    <main className="dark:bg-gray-900 min-h-[calc(100vh-72px)]">
      <div className="flex flex-col sm:flex-row gap-7 sm:gap-0 justify-between py-10 sm:py-14 px-6">
        <SearchMenu setQuery={setQuery} />
        <Search setQuery={setQuery} />
      </div>
      <CountriesContainer query={query}/>
    </main>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function CountryCard({
  name,
  population,
  region,
  capital,
  flag,
  data,
}) {
  return (
    <Link
      className="country-card hover:scale-[1.02] dark:bg-gray-800 dark:text-white  cursor-pointer inline-block rounded-lg overflow-hidden shadow-md transition-all duration-200 ease-in-out bg-[#e1e1e1]"
      to={`/${name}`}
      state={data}
    >
      <div className="w-full h-[200px] md:h-[175px]">
        <img className=" object-cover w-full h-full" src={flag} alt={name} />
      </div>
      <div className="p-6 ">
        <h3 className="card-title text-2xl mb-3 font-semibold">{name}</h3>
        <div className="flex flex-col text-base gap-1">
          <p>
            <b>Population: </b>
            {population.toLocaleString("en-IN")}
          </p>
          <p>
            <b>Region: </b>
            {region}
          </p>
          <p>
            <b>Capital: </b>
            {capital}
          </p>
        </div>
      </div>
    </Link>
  );
}

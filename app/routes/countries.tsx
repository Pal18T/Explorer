import { Link } from "react-router";
import type { Route } from "./+types/countries";
import { useState } from "react";

export async function clientLoader() {
    // call the server loader
    const res = await fetch("https://restcountries.com/v3.1/all");
    // And/or fetch data on the client
    const data = await res.json();
    // Return the data to expose through useLoaderData()
    return data;
  }
  

export default function Countries({loaderData}: Route.ComponentProps){
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");

    const filteredCountries = loaderData.filter((country: any) => {
        const matchedRegion = !region || country.region.toLowerCase()===region.toLowerCase()
        const matchedSearch = !search || country.name.common.toLowerCase().includes(search.toLowerCase());
        return matchedSearch && matchedRegion
    })
    return (
    <div className="p-6"> <h2 className="text-2xl font-bold mb-6 text-gray-900">Country</h2>
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input type="text" placeholder="Search your country here..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-400"
        />
        <select  
        value={region} 
        onChange={(e) => {setRegion(e.target.value)}}
        className="border border-gray-300 px-3 rounded-md py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-400"
        >
            <option value="">All Region</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
    {filteredCountries.length===0 ? (
        <div>No countries matched your filter. </div>
    ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredCountries.map((country: any, key: number) => (

                <li key={key} className="bg-white border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition">
                    <Link to={`/countries/${country.name.common}`} className="text-indigo-600 hover:underline text-lg font-semibold">{country.name.common}</Link>
                    <div>
                       Region: {country.region} | Population: {country.population}
                    </div>
                </li>
            ))}
        </ul>
        )}
    </div>
    )
}
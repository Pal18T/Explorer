import { NavLink } from "react-router";
import About from "~/routes/about";

export default function Navbar(){
    return (
        <header className="w-full px-8 text-gray-700 bg-white shadow-sm">
            <div className="container flex flex-col md:flex-row items-center justify-between py-5 mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row items-center">
                    <NavLink to={"/"} className="flex items-center mb-5 md:mb-0">
                    <span className="text-black text-xl font-extrabold select-none">X<span className="text-indigo-900">plorer</span></span>
                    </NavLink>
                    <nav className="flex flex-wrap items-center ml-0 md:ml-8 md:border-1 md:pl-8">
                    <NavLink to={"/"} className="mr-5 font-medium text-gray-600 hover:text-gray-900">Home</NavLink>
                    <NavLink to={"/about"} className="mr-5 font-medium text-gray-600 hover:text-gray-900">About</NavLink>
                    <NavLink to={"/countries"} className="mr-5 font-medium text-gray-600 hover:text-gray-900">Countries</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}
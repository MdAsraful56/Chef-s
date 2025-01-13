import { CgProfile } from "react-icons/cg";
export default function Navber(){
    return (
        <div className="flex flex-row justify-between items-center">
            <div className="">
                <h2 className="text-3xl font-bold">Recipe Calories</h2>
            </div>
            <div className=" hidden md:block lg:block">
                <ul className="flex flex-row space-x-5 text-base font-light">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="flex flex-row space-x-3 items-center">
                <input className="px-3 py-3 rounded-3xl bg-[#150b2b12] placeholder:pl-8" type="text" placeholder="Search" />
                <CgProfile className="text-4xl bg-green-400 rounded-full" />
            </div>
        </div>
    )
}
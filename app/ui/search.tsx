import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search(){
    return(<div className="relative flex items-center cursor-pointer">
        {/* <label htmlFor="search">Search:</label> */}
        <input type="text" name="search" id="search" placeholder="search" className="w-full px-4 py-2 border border-gray-300 rounded-full outline-none" />
        <MagnifyingGlassIcon className="w-6 h-6 absolute top-2 right-2  text-gray-300" />
    </div>)
}
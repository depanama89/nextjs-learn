import Search from "@/app/ui/search";
import { Main } from "next/document";

export default function Page(){
    return(
        <main className="flex flex-col gap-6">
            <h1>Dashboard</h1>
            <Search/>
        </main>
    )

}
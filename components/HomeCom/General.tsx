"use client"

import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import axios from "axios";

const General = () => {
    const [myData,setData] = useState<any[]>([])
    const get = ()=>{
        axios.get("https://api.themoviedb.org/3/genre/movie/list?language=en",{
            headers:{
                "accept": 'application/json',
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTJlNzVlZjNiZjMzZDVlNzRmMjExZWRmNWUwYzQ5ZSIsInN1YiI6IjY2NmNlN2NjZjU1YTA1N2YzYTYxY2ViZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.efMkKg8-QFfIKMPRoGLdzyQFMCoaGOUbMj01rhIoUSo`,
            }
        }).then(response => setData(response.data.genres))
    }
    useEffect(()=>{
        get()
    },[])
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-white dark:bg-[#020617] rounded px-2 h-[2.3rem]">
                    Genre <ChevronDown size={20} className="ml-1" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white dark:bg-[#020617]">
                <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
                <hr />
                {
                    myData.map((ele:any)=>
                        <DropdownMenuCheckboxItem key={ele.id} className="px-2">
                            <Link href={`/Home/general/${ele.id}?name=${ele.name}`}>{ele.name}</Link>
                        </DropdownMenuCheckboxItem>
                    )
                }
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default General;

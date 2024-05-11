"use client"
import Sidebar from "@/components/side/Sidebar";
import Container from "@/components/container/Container";
import {useState} from "react";

export default function Home() {
    const [open, setOpen] = useState(true)
    return (<>
            <div className="flex w-full h-screen">
                <div className={`bg-[#2C2E2F] ${open ? 'w-0 md:w-1/6' : 'w-0'} transform transition-all duration-300 dark:bg-[#111111]`}>
                    <Sidebar/>
                </div>
                <div className={`bg-[#F5F6FA] transform transition-all duration-300 w-5/6 ${open ? 'w-full md:w-5/6' : 'w-full'}`}>
                    <Container open={open} setOpen={setOpen}/>
                </div>
            </div>
        </>);
}

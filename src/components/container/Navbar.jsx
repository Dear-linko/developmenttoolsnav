"use client"
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Navbar({open, setOpen}) {
    const handleClick = () => {
        setOpen(!open)
    }
    return (<>
        <div className="flex items-center justify-between px-4 h-full">
            <div onClick={handleClick}>
                {open ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                </svg>)}
            </div>
            <DarkModeToggle/>
        </div>
    </>)
}
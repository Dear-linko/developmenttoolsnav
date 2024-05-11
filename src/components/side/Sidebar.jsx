import Logo from "@/components/side/Logo";
import Menu from "@/components/side/Menu";

export default function Sidebar() {
    return (<>
            <div className="flex flex-col p-4 space-y-4">
                <div className="w-full h-14 py-2 flex items-center justify-center">
                    <Logo/>
                </div>
                <div className="">
                    <Menu/>
                </div>
            </div>
        </>)
}
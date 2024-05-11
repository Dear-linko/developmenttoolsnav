import Navbar from "@/components/container/Navbar";
import Main from "@/components/container/Main";
import Footer from "@/components/container/Footer";

export default function Container({open, setOpen}) {
    return (
        <div className="h-screen w-full flex justify-center items-center"> {/* 外层包裹 */}
            <div className="h-full w-full overflow-y-auto flex flex-col"> {/* 添加 overflow-y-auto */}
                <div className="h-14 w-full bg-white dark:bg-[#111111] dark:text-white flex-shrink-0 sticky top-0">
                    <Navbar open={open} setOpen={setOpen} />
                </div>
                <div className="flex-1 dark:bg-[#111111] dark:text-white">
                    <Main />
                </div>
                <div className="h-10 bg-white w-full flex-shrink-0 dark:bg-[#111111] dark:text-white">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

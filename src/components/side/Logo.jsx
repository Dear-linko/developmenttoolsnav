import Image from "next/image";

export default function Logo() {
    return (<>
        <a href="/">
            <div className="flex items-center justify-center">
                <Image src="/logo.svg" alt="nextjs" height={80} width={80}/>
            </div>
        </a>
    </>)
}
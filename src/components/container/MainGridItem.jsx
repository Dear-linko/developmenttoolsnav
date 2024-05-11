import Image from "next/image";

export default function MainGridItem({item}) {
    return (<>
        <a href={item.url} target="_blank">
            <div
                className="flex items-center justify-start space-x-1 h-20 rounded-lg p-2 w-full bg-[#FFFFFF] dark:bg-[#232323] dark:text-white">
                <div className="w-1/4 h-full flex items-center justify-center">
                    <Image src={item.imageUrl} alt="nextjs" width={35} height={35} className="rounded-lg"/>
                    {/*<Image src="/next.svg" alt="nextjs" width={35} height={35}/>*/}
                </div>
                <div className="w-3/4 h-full flex flex-col items-start justify-center">
                    <div className="font-semibold text-sm">
                        {item.title}
                    </div>
                    <div className="line-clamp-2 overflow-ellipsis overflow-hidden text-gray-500 text-xs">
                        {item.desc}
                    </div>
                </div>
            </div>
        </a>
    </>)
}
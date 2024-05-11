import {allData} from "@/data/allData";
import MainGridBox from "@/components/container/MainGridBox";

export default function Menu() {
    return (<>
        <div className="flex flex-col space-y-2 ">
            {allData.map((category, index) => (
                <a key={category.id} className="px-4 h-10 flex items-center justify-start rounded-lg text-sm text-gray-300"
                   href={`#${category.title}`}>{category.title}</a>
            ))}

        </div>
    </>)
}
import Image from "next/image";
import MainGridItem from "@/components/container/MainGridItem";

export default function MainGridBox({ category }) {
    return (<>
        <h2 className="font-semibold text-xl" id={`${category.title}`}>{category.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {category.items.map((item, index) => (
                <MainGridItem key={index} item={item}/>
            ))}
        </div>
    </>)
}
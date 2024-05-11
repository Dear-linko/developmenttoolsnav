import Image from "next/image";
import MainGridBox from "@/components/container/MainGridBox";
import {allData} from "@/data/allData";

export default function MainGrid() {
    return (<>
        <div className="flex flex-col space-y-5 w-full">
            {allData.map((category, index) => (
                <MainGridBox key={index} category={category} />
            ))}
        </div>
    </>)
}
import {FC} from "react";

type StatCardProps = {
    title: string,
    value: string,
    helperText: string,

}

const StatCard: FC<StatCardProps> = ({title, value, helperText}) => {

    return (
        <div className={`border bg-white p-4 rounded-md flex items-start  gap-4 w-full `}>
            <div className="space-y-4">
                <h3 className="text-xl text-blue-950 ">{title}</h3>
                <h2 className={"text-4xl text-blue-950 font-semibold"}>{value}</h2>
                <h6 className="text-gray-400 text-sm">{helperText}</h6>
            </div>
            <img src="/graph.png" alt="Graph Img"/>
        </div>
    )
}


export default StatCard
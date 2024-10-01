import {FC} from "react";

export type StatCardProps = {
    title: string,
    value: string | number,
    helperText: string,
    variant: 'blue' | 'pink' | 'orange'
}

const StatCard: FC<StatCardProps> = ({title, value, helperText, variant}) => {

    const bgColor = (variant == 'blue' ? "bg-blue-100" : (variant == 'pink' ? "bg-pink-100" : "bg-red-100"))
    const textColor = (variant == 'blue' ? "text-blue-400" : (variant == 'pink' ? "text-pink-400" : "text-red-400"))

    return (
        <div className={`${bgColor} p-4 rounded-md flex items-start flex-col gap-4 w-full`}>
            <h3 className="text:lg lg:text-xl text-blue-950 ">{title}</h3>
            <h2 className={"text-4xl text-blue-950 font-semibold"}>{value}</h2>
            <h6 className={textColor}>{helperText}</h6>
        </div>
    )
}


export default StatCard
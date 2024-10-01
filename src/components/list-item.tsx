import {FC, ReactNode} from "react";


type ListItemProps = {
    text: string ,
    secondaryText : string,
    actions : ReactNode,
}


const ListItem : FC<ListItemProps> = ({ text, secondaryText, actions }) => {
    return (
        <div className="bg-gray-100 p-2 flex justify-between items-center border rounded">
            <div className="flex flex-col items-start justify-center gap-2 text-blue-950">
                <h2 className="text-md md:text-xl">{text}</h2>
                <small>{secondaryText}</small>
            </div>
            <div className="flex gap-2 items-start justify-center text-gray-500">
                {
                    actions
                }
            </div>
        </div>
    )
}

export default ListItem
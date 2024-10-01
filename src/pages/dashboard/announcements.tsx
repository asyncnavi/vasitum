import { BsPinAngleFill, BsThreeDots } from "react-icons/bs";
import ListItem from "../../components/list-item.tsx";
import React from "react";

const announcements = [
    {
        id: 1,
        title: "Outing schedule for every department",
        date: "5 Minutes ago"
    },
    {
        id: 2,
        title: "Meeting HR Department",
        date: "Yesterday, 12:30 PM"
    },
    {
        id: 3,
        title: "IT Department needs two more talents for UX/UI Designer position",
        date: "Yesterday, 09:15 AM"
    }
];

const Announcements = () => {
    return (
        <div className="border rounded-md">
            <div className="p-4 space-y-4">
                <h1 className="text-blue-950 text-2xl">Announcements</h1>
                <div className="space-y-2">
                    {
                        announcements.map((announcementItem) => (
                            <ListItem
                                key={announcementItem.id}
                                text={announcementItem.title}
                                secondaryText={announcementItem.date}
                                actions={
                                    <React.Fragment>
                                        <BsPinAngleFill size={24} />
                                        <BsThreeDots size={24} />
                                    </React.Fragment>
                                }
                            />
                        ))
                    }
                </div>
            </div>
            <div className="border-t w-full p-2">
                <h2 className="text-red-400 text-center">See All Announcements</h2>
            </div>
        </div>
    )
}

export default Announcements;

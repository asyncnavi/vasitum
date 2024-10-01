import { BsThreeDots } from "react-icons/bs";
import ListItem from "../../components/list-item.tsx";

const upcomingSchedules = [
    {
        id: 1,
        title: "Review candidate applications",
        date: "Today, 11:30 AM",
        priority: "Priority"
    },
    {
        id: 2,
        title: "Interview with candidates",
        date: "Today, 10:30 AM",
        priority: "Other"
    },
    {
        id: 3,
        title: "Short meeting with product designer from IT Department",
        date: "Today, 09:15 AM",
        priority: "Other"
    }
];

const Schedules = () => {
    const prioritySchedules = upcomingSchedules.filter(schedule => schedule.priority === "Priority");
    const otherSchedules = upcomingSchedules.filter(schedule => schedule.priority === "Other");

    return (
        <div className="border rounded-md">
            <div className="p-4 space-y-4">
                <h1 className="text-blue-950 text-2xl">Upcoming Schedule</h1>
                <div className="space-y-2">
                    <h1 className="text-sm text-gray-400">Priority</h1>
                    {
                        prioritySchedules.map((scheduleItem) => (
                            <ListItem
                                key={scheduleItem.id}
                                text={scheduleItem.title}
                                secondaryText={scheduleItem.date}
                                actions={<BsThreeDots size={24}/>}
                            />
                        ))
                    }
                    <h1 className="text-sm text-gray-400">Other</h1>
                    {
                        otherSchedules.map((scheduleItem) => (
                            <ListItem
                                key={scheduleItem.id}
                                text={scheduleItem.title}
                                secondaryText={scheduleItem.date}
                                actions={<BsThreeDots size={24}/>}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="border-t w-full p-2">
                <h2 className="text-red-400 text-center">Create New Schedule</h2>
            </div>
        </div>
    )
}

export default Schedules;

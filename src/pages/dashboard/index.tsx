import useWindowDimensions from "../../hooks/use-window-dimensions.tsx";
import Drawer from "../../components/drawer.tsx";
import Header from "../../components/header.tsx";
import Stats from "./stats.tsx";
import GraphCard from "../../components/graph-card.tsx";
import RecentActivity from "./recent-activity.tsx";
import Announcements from "./announcements.tsx";
import Schedules from "./schedules.tsx";

const Dashboard = () => {
    const { width } = useWindowDimensions();

    const sidebarMargin = width >= 768 ? 242 : width >= 640 ? 90 : 0;

    return (
        <div>
            {width >= 768 ? (
                <Drawer variant="large" />
            ) : width >= 640 ? (
                <Drawer variant="mini" />
            ) : null}

            <Header sidebarMargin={sidebarMargin} />

            <main className="p-4 space-y-4" style={{ marginLeft: `${sidebarMargin}px` }}>
                <h1 className="text-3xl text-blue-950 font-bold">Dashboard</h1>

                <div className="grid gap-4 grid-cols-1 xl:grid-cols-2 items-start w-full">
                    <div className="grid grid-cols-1 w-full gap-4">
                        <Stats />
                        <div className="flex gap-2 flex-wrap md:flex-nowrap">
                            <GraphCard title="Total Employees" value="216" helperText="120 Men" />
                            <GraphCard title="Talent Request" value="16" helperText="6 Men" />
                        </div>
                        <Announcements />
                    </div>

                    <div className="flex flex-col gap-8">
                        <RecentActivity />
                        <Schedules />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;

import {useState} from "react";
import useWindowDimensions from "../../hooks/use-window-dimensions";
import Drawer from "../../components/drawer";
import Header from "../../components/header";
import Stats from "./stats";
import GraphCard from "../../components/graph-card";
import Announcements from "./announcements";
import RecentActivity from "./recent-activity";
import Schedules from "./schedules";

const Dashboard = () => {
    const {width} = useWindowDimensions();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    const getSidebarMargin = (): number => {
        if (width >= 768) return 242;
        if (width >= 640) return 90;
        return 0;
    };


    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);


    const sidebarMargin = getSidebarMargin();


    const renderDrawer = () => {
        if (width >= 768) {
            return <Drawer variant="large"/>;
        }
        if (width >= 640) {
            return <Drawer variant="mini"/>;
        }
        return <Drawer variant="float" floatOption={{open: isDrawerOpen, trigger: toggleDrawer}}/>;
    };

    return (
        <div>

            {renderDrawer()}
            <Header sidebarMargin={sidebarMargin} sideBarTrigger={toggleDrawer}/>
            <main className="p-4 space-y-4" style={{marginLeft: `${sidebarMargin}px`}}>
                <h1 className="text-3xl text-blue-950 font-bold">Dashboard</h1>

                <div className="grid gap-4 grid-cols-1 xl:grid-cols-2 items-start w-full">
                    <div className="grid grid-cols-1 w-full gap-4">
                        <Stats/>
                        <div className="flex gap-2 flex-wrap md:flex-nowrap">
                            <GraphCard title="Total Employees" value="216" helperText="120 Men"/>
                            <GraphCard title="Talent Request" value="16" helperText="6 Men"/>
                        </div>
                        <Announcements/>
                    </div>

                    <div className="flex flex-col gap-8">
                        <RecentActivity/>
                        <Schedules/>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;

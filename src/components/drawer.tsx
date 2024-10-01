import {MdDashboard} from "react-icons/md";
import {FaCalendarDay, FaUserPlus} from "react-icons/fa";
import {BsPeopleFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import {cloneElement, FC, ReactElement} from "react";
import {BiSupport} from "react-icons/bi";
import {IoSettings} from "react-icons/io5";
import clsx from 'clsx';


type DrawerVariant = 'large' | 'mini' | 'float';

type DrawerMenuItem = {
    id: string;
    name: string;
    icon: ReactElement;
    href: string;
};

type DrawerMenuProps = {
    title: string;
    items: DrawerMenuItem[];
    variant: DrawerVariant;
};


const DrawerMenu: FC<DrawerMenuProps> = ({title, items, variant}) => {
    return (
        <ul className="mt-4 space-y-6">
            <span
                className={clsx("text-gray-400 font-bold uppercase", variant === "mini" ? 'text-[.6rem]' : 'text-xs')}>
                {title}
            </span>
            {
                items.map(item => (
                    <li key={item.id} className="mb-1">
                        <Link to={item.href}
                              className="flex items-center justify-between text-gray-500 gap-4 hover:text-red-500">
                            <div className={clsx("w-6 h-6", variant === "mini" && 'mx-auto')}>
                                {variant === 'mini' ? cloneElement(item.icon, {size: 24}) : item.icon}
                            </div>
                            {variant === 'large' && <p className="flex-grow">{item.name}</p>}
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
};

type DrawerProps = {
    variant: DrawerVariant;
};

const Drawer: FC<DrawerProps> = ({variant}) => {
    return (
        <div
            className={clsx("fixed bg-gray-100 h-screen p-4 flex flex-col", variant === "mini" ? "w-[90px]" : "w-[242px]")}>
            {variant === "mini" ? (
                <img alt="logo-half" src="/logo-half.png" className="w-[50px] mx-auto mb-10"/>
            ) : (
                <img alt="logo-full" src="/logo-full.png" className="w-[160px] mx-auto mb-10"/>
            )}

            <div className="mx-auto">
                <DrawerMenu variant={variant} title="Main Menu" items={mainMenuItems}/>
                <DrawerMenu variant={variant} title="Other" items={otherMenuItems}/>
            </div>
        </div>
    );
};

export default Drawer;


const mainMenuItems: DrawerMenuItem[] = [
    {id: 'link-dashboard', name: "Dashboard", icon: <MdDashboard/>, href: ''},
    {id: 'link-recruitment', name: "Recruitment", icon: <FaUserPlus/>, href: ''},
    {id: 'link-schedule', name: "Schedule", icon: <FaCalendarDay/>, href: ''},
    {id: 'link-employee', name: "Employee", icon: <BsPeopleFill/>, href: ''}
];

const otherMenuItems: DrawerMenuItem[] = [
    {id: 'link-support', name: "Support", icon: <BiSupport/>, href: ''},
    {id: 'link-settings', name: "Settings", icon: <IoSettings/>, href: ''}
];
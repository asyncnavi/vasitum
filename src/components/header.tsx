import {BiChevronDown, BiMenu, BiSearch} from "react-icons/bi";
import {PiBellFill} from "react-icons/pi";
import {RiMessage2Fill} from "react-icons/ri";
import {FC} from "react";



type HeaderProps = {
    sidebarMargin?: number;
}

const Header : FC<HeaderProps> = ({ sidebarMargin }) => {
    return (

        <header
            style={{ marginLeft: `${sidebarMargin}px` }}
            className={`bg-white sticky top-0 p-4 border-b border-b-gray-200 text-gray-500 flex justify-between items-center`}>
            <div className="relative flex items-center justify-between gap-2">
                <BiMenu size={24}/>
                <input type="text" className="hidden md:block border outline-0 py-2 px-4 rounded"
                       placeholder="Search"/>
                <div className="md:absolute top-[10px] right-[10px]">
                    <BiSearch size={24}/>
                </div>
            </div>
            <div className="flex gap-6 items-center">
                <PiBellFill size={24}/>
                <RiMessage2Fill size={24}/>
                <div className="flex items-center gap-1 cursor-pointer">
                    <img className="w-10 h-10 rounded-full"
                         src="https://s3-alpha-sig.figma.com/img/40ed/810b/19bda88255a6c220a56cfcf53c020387?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vj07cX7ef8nvwqA3gkxHdJpsVrutQrxBvgItSxyG99vWlcVf5liIwVkZY3DNMP7aCe73CPPbaBhmRlrVkc2c7S-Jyg5fnQsAnK5dDQ7rvkYKQ3dY6GiqBK7Pxg3i6iD8HOa~LaJOEqQBg-G0DXpUA8kz~ZOVVaJxSFVf5~w1ornUR08opzmuir~C7IgK3IGSrwitPtgqdx3b9tsVs~qhwH~GsyxyxFCAeCp7YmVc4hewq~GWhQQLqkoasIb1YqHyJTSaIjeSYSPl3SUUyrvP0DNiqtSFvnYLI1Qz-DmIFAo20--ie91B-zqj1VDRUbejGVFohqSRamZGCxNThQ6h7g__"
                         alt=""/>
                    <span className="hidden lg:block text-gray-900">Admira John</span>
                    <BiChevronDown size={24}/>
                </div>

            </div>

        </header>
    )
}

export default Header;
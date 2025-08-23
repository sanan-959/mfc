import React, { useState } from "react";
import { PiCaretDownLight } from "react-icons/pi";
import { IoSearchSharp } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Header = ()=>{
    const [toggle, setToggle] = useState(false);
    const showSideMenu =()=>{
        setToggle(true);
    }
    const hideSideMenu = ()=>{
        setToggle(false)
    }

    // Nav Links
    const navLinks =[
        { 
            icon: <IoSearchSharp/>,
            name: 'Search'
        },
        {
            icon: <CiDiscount1/>,
            name: 'Offers',
            sup: 'New'
        },
        {
            icon: <IoMdHelpCircleOutline/>,
            name: 'Help'
        },
        {
            icon: <FaRegUser/>,
            name: 'SignIn'
        },
        {
            icon: <FiShoppingCart/>,
            name: 'Cart',
            sup: '99+'
        }

    ]
    return(
        <>
        <div className="black-overlay w-full h-full fixed z-10 duration-500" onClick={hideSideMenu} style={{opacity: toggle ? 1 : 0, visibility: toggle ? 'visible' : 'hidden'}}>
            <div onClick={(e)=> e.stopPropagation()} className="w-[500px] h-full bg-white absolute duration-[600ms]" style={{
                left: toggle ? '0%' : '-100%'
            }}></div>
        </div>
        <header className="p-[15px] shadow-xl">
            <div className="max-w-[1200px] mx-auto flex items-center gap-8">
                <div className="w-[50px] h-[50px] overflow-hidden ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s" className="w-full h-full object-cover" alt="" />
                </div>
                <div>
                    <span className="font-bold border-b-[1px] border-black">Jahanian</span>, Punjab, Pakistan<PiCaretDownLight onClick={showSideMenu} fontSize={16} className="inline ml-3 text-[#fc8019] cursor-pointer" />
                </div>
                <nav className="flex items-center gap-5 list-none ml-auto font-semibold text-[16px]">
                    {
                    navLinks.map((link, index) => {
                        return (
                        <li key={index} className="flex items-center gap-2 cursor-pointer hover:text-[#fc8019] duration-300">
                            {link.icon}
                            {link.name}
                            <sup className="text-red-500 font-bold">{link.sup}</sup>
                        </li>
                        )
                    })
                }
                </nav>
            </div>
        </header>
        </>
    )
}

export default Header;
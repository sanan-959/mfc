import React from "react";

const Header = ()=>{
    return(
        <header className="p-[15px] shadow-xl">
            <div className="max-w-[1200px] mx-auto border border-red-500">
                <div className="w-[80px] h-[80px] overflow-hidden border border-blue-400">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s" className="w-full h-full object-cover" alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header;
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

export const Category = ()=>{
    const [category, setCategory] = useState('');
    const fetchCategory = async ()=>{
        const response = await fetch('https://dummyjson.com/products/category/groceries');
        const data = await response.json();
        console.log(data);
        
    }

    useEffect(()=>{
        fetchCategory();
    }, [])
    return(
        <div className="max-w-[1200px] mx-auto flex items-center justify-between mt-5">
            <div className="text-[25px] font-bold">What's on your mind?</div>
            <div className="flex items-center justify-center gap-5">
                <div className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full flex items-center justify-center cursor-pointer"><FaArrowLeft /></div>
                <div className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full flex items-center justify-center cursor-pointer"><FaArrowRight /></div>
            </div>
        </div>
    )
}
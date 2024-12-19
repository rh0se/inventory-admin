import React from 'react'
import shop from "../images/shop.png";
import clipboard from "../images/clipboard-text.svg";
import money from "../images/moneys.png"
import setting from "../images/setting-2.svg"

const SideBar = () => {
    const items = ["Inventory", "Logs", "Categories", "Settings"];
    const icons = [shop, clipboard, money, setting]
    return (
        <>
            <div className='md:block hidden flex flex-col space-y-2 w-[17.75%] mt-12'>
                {items.map((item, index) => (
                    <div key={index} className={`flex items-center py-4 px-10 gap-2 ${index === 0 ? "bg-veryPaleBlue" : ""}`}>
                        <img src={icons[index]} alt={`${icons[index]} icon`} className='w-[16px] h-[16px]' />
                        <p className={`text-xs font-medium ${index === 0 ? "text-darkBlue" : "text-DarkGrey"}`}>{item}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SideBar

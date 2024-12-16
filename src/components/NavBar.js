import React from 'react'
import Logo from '../images/Logo.png'
import notification from "../images/Notification.png"
import avatar from '../images/avatar.png'

const NavBar = () => {
    return (
        <>
            <nav className='px-6 py-4 flex'>
                <div className="max-w-[204px] text-sm flex items-center border-[1px] border-brightGrey py-2 px-[15px] rounded-lg gap-2">
                    <img src={Logo} alt="Logo" className='w-[51px] h-[12px]' />
                    <div>
                        <h1 className='font-bold text-DarkSapphire'>Administrator</h1>
                        <p className='text-xs text-desaturatedDarkBlue'>Super Admin</p>
                    </div>
                </div>
                <div className='w-10/12 ml-[64px] flex flex-row justify-between items-center'>
                    <h1 className="text-DarkSapphire text-xl">Inventory</h1>
                    <div className='flex w-[207px] justify-between items-center'>
                        <button style={{
                            boxShadow: "0px 0px 4px 0px rgba(53, 84, 209, 0.16)"
                        }} className='py-1.5 px-[17px] text-DarkGrey rounded-sm'>
                            Logout
                        </button>
                        <img src={notification} alt="Notification" className='w-[32px] h-[32px] ml-[2px]' />
                        <img src={avatar} alt="Avatar" className='w-[60px] h-[32px]' />
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBar

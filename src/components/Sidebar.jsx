import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import { BsWallet2 } from "react-icons/bs";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";

const Sidebar = ({bgColor, color}) => {
  return (
    <>
     <div className="side_bar_content" style={{
      backgroundColor: `${bgColor}`,
      color:`${color}`
     }
     }>
        <div className="top_conntent">

            <div className="items">
                <FaHome className='icons'/> Home
            </div>

            <div className="items">
                <IoMdNotifications className='icons'/> Notifications
            </div>

            <div className="items">
                <FaShoppingBag className='icons'/> Shop
            </div>

            <div className="items">
               <RiMessage2Line className='icons'/> Conversation
            </div>

            <div className="items">
              <BsWallet2 className='icons'/>  Wallet
            </div>

            <div className="items">
                <MdOutlineSubscriptions className='icons'/> Subscription
            </div>

            <div className="items">
               <CgProfile className='icons'/> My Profile
            </div>

        </div>

        <div className="bottom_content">

            <div className="items">
               <TbLogout2/> Log Out
            </div>

        </div>
     </div>
    </>
  )
}

export default Sidebar

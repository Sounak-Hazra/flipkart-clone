import React from 'react'
import Menu01Icon from '../assets/menu-01-stroke-rounded'
import flipkartlogo from "../assets/[CITYPNG.COM]Flipkart White Logo Download PNG - 5000x5000.png"
import ShoppingCart02Icon from '../assets/shopping-cart-02-stroke-rounded'
import UserIcon from '../assets/user-stroke-rounded'
import search from "../assets/search.svg"

const Nav = () => {
    return (
        <>
            <div className='w-screen h-28 bg-blue-500 p-2'>
                <div className='flex justify-between relative'>
                    <div className="left flex w-fit p-2 gap-1 items-center justify-center">
                        <Menu01Icon />
                        <img className='w-28 h-28 absolute left-[35px]' src={flipkartlogo} alt="" />
                    </div>
                    <div className="right flex gap-1 items-center justify-center">
                    <UserIcon />
                        <ShoppingCart02Icon />
                        
                    </div>
                </div>
                <div className='w-full mt-3 flex bg-white gap-3 rounded-sm pl-2'> 
                    <img src={search} alt="" />
                    <input className='w-full h-11 rounded-sm ' type="text" placeholder='Search Flipkart' />
                </div>
            </div>
        </>
  )
}

export default Nav
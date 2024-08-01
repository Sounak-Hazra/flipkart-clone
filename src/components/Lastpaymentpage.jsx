import React, { useState } from 'react'
import img from "../assets/last.webp"
import { useLocation } from 'react-router-dom'
import securepage from "../assets/securepage.webp"
import paysecure from "../assets/paysecure.jpg"
import { Link } from 'react-router-dom'

const Lastpaymentpage = () => {
    const { state } = useLocation()
    const state1 = state.state1
    const state2 = state.state2
    console.log(state1)
    console.log(state2)
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };
    return (
        <>
            <div className='w-[99vw]'>
                <img className='w-full' src={img} alt="" /></div>
            <div className=' h-2 bg-gray-300 my-6'></div>
            <div className="checkout_container_box1 bg-white px-4">
                <h5 className="text-lg font-bold">Deliver to:</h5>
                <div className="address_container ">
                    <p className="font-medium ">{state2.name}</p>
                    <p className=" text-sm">{state2.houseNumber},{state2.city},{state2.stateName},{state2.pincode}</p>
                    <p className=" text-sm">{state2.mobileNumber}</p>
                </div>
            </div>
            <div className='h-2 bg-gray-300 my-6'></div>
            <div className='flex justify-center'>
                <div className="order_container bg-white p-2  w-full flex md:w-[60%] gap-10 md:gap-20 justify-between items-center">
                    <div className="box1 w-[50%] flex flex-col gap-1 justify-between ml-2">
                        <img src={state1.img} alt="aa" style={{ height: '70%' }} />
                        <div className="relative">
                            <div className="relative">

                                <select
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    className="w-[92%] text-[0.675rem] text-gray-700 border border-gray-400 p-1 rounded-sm font-medium outline-none"
                                >
                                    {[...Array(7)].map((_, index) => (
                                        <option key={index} className='text-[0.775rem]' value={index + 1}>Qty:{index + 1}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="box2 w-[50%] self-start">
                        <h4 className="text-sm mb-1 font-semibold h-fit multi-line-truncate leading-tight">{state1.name}</h4>
                        <div className="flex items-center gap-1 h-fit flex-wrap">
                            <div className="flex w-20">
                                {[...Array(5)].map((_, index) => (
                                    <svg className="w-6 h-8 text-green-500" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="currentColor"></path>
                                    </svg>

                                ))}
                            </div>
                            <span className=" text-green-700 font-bold text-sm">99% off</span>
                            <span className=" line-through text-gray-500 font-bold text-sm">₹{state1.original_price}</span>
                            <span className="text-black font-bold text-sm">₹{quantity * state1.price}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white mt-10 text-left p-4 flex flex-col gap-2">
                <h5 className="text-lg font-bold">Price Details:</h5>
                <div className="flex justify-between text-sm font-semibold">
                    <span className='font-semibold'>Price (1 item)</span>
                    <span className='font-semibold'> ₹{quantity * state1.original_price}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                    <span className='font-semibold'>Discount</span>
                    <span className="text-green-500 font-semibold"> {quantity * state1.price - state1.original_price}</span>
                </div>
                <div className="flex justify-between font-semibold text-sm">
                    <span className='font-semibold'>Delivery Charges</span>
                    <span className="text-green-500 font-semibold"> FREE Delivery</span>
                </div>
                <hr className="border-t-1 border-gray-300 font-semibold" />
                <div className="flex justify-between text-sm py-1 font-semibold">
                    <span className="font-bold text-[16px] ">Total Amount</span>
                    <span className="text-green-500 font-bold text-[16px]"> ₹{quantity * state1.price} </span>
                </div>
                <hr className="border-t-1 border-gray-300" />
                <div className="text-sm font-semibold">
                    <span className="text-green-500 font-semibold">You will save ₹{quantity * state1.original_price - state1.price} on this order</span>
                </div>
            </div>
            <div className='w-[98vw]'>
                <img className='w-full' src={securepage} alt="" />
            </div>
            <div className='w-screen'><img src={paysecure} alt="" /></div>
            <div className='h-14 w-screen   bottom-0 myshadow'> hii</div>
            <div className='h-14 w-screen fixed z-10 bg-white  bottom-0 myshadow flex justify-between items-center px-4'>
                <div className='text-[18px]'> ₹{quantity * state1.price}</div>
                <div className='h-full flex justify-center items-center'>
                <Link className=' h-full flex justify-center items-center self-center' state={{from:quantity * state1.price}} to={"/details/prduct/payment/pay"}>
                        <button className='h-[70%] rounded-sm w-36 bg-yellow-300'>Pay</button></Link>
                        </div>
            </div>

        </>
    )
}

export default Lastpaymentpage
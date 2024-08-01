import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import StarIcon from '../assets/Star';
import flipkartsmall from "../assets/flipkartsmall.png"
import bigsaving from "../assets/bigsavingdel.png"
import flogo from "../assets/flogo.png"
import search from "../assets/search.svg"
import ShoppingCart02Icon from "../assets/shopping-cart-02-stroke-rounded"
import UserIcon from '../assets/user-stroke-rounded'
import KeyboardBackspaceOutlinedIcon from "../assets/Arrow"
import Topbannar from './Topbannar';
import { Link } from 'react-router-dom';
import Product from './Product';

const Details = () => {
  const { state } = useLocation();
  const [arr, setArr] = useState([]);
  const [arr2, setArr2] = useState([]);
  const initialSeconds = 600; // 600 seconds = 10 minutes
  const [seconds, setSeconds] = useState(initialSeconds);



  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(intervalId);
          return initialSeconds;
        }
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const displayTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  useEffect(() => {
    if (state && state.arr) {
      setArr(state.arr);
    }
  }, [state]);

  useEffect(() => {
    if (state && state.arr2) {
      setArr2(state.arr2);
    }
  }, [state]);

  const goBack = () => {
    window.history.back();
  };



  return (
    <>
      <div className='flex justify-between p-3'>
        <div className='flex gap-2'>
          <div className='w-7' onClick={goBack}><KeyboardBackspaceOutlinedIcon /></div>
          <img className='h-7' src={flogo} alt="" />
        </div>
        <div className='flex gap-4'>
          <img src={search} alt="" />
          <div className='filter'><ShoppingCart02Icon /></div>
          <div className='filter'><UserIcon /></div>
        </div>
      </div>
      <div className='w-screen flex justify-center items-center'>
        <Product props={arr2} />
      </div>
      <hr className='bg-gray-400' />
      <div className='h-12 w-full text-red-500 font-semibold text-xl flex gap-1 justify-center items-center '><span className='text-black'>Offer ends in </span>{displayTime() }</div>
        
      <hr className='bg-gray-400' />

      
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
        <div className="">
          <h3 className="text-[17px]  mb-2">{state.name}</h3>
        </div>
        <div className='flex justify-between'>
          <div>
            <div className='flex w-28'>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div >
              <img className='h-11' src={bigsaving} alt="" />
            </div>
            <div className='flex gap-4'>
              <span className='text-green-600 font-bold'>99% off</span>
              <span className='font-bold text-gray-500 line-through'>₹{state.original_price}</span>
              <span className='font-bold'>₹{state.price}</span>
            </div>
          </div>
          <div>
            <img className='w-24' src={flipkartsmall} alt="" />
          </div>
        </div>
      </div>

      {arr.map((e) => {
        return <div key={e} className='w-[98vw] h-fit'>
          <img className='w-full' src={e} alt="" />
        </div>
      })}

      <div className='w-screen h-14 flex fixed bottom-0 myshadow'>
        <div className='w-1/2 h-full  bg-white'><Link to={"/details/prduct"} state={{
                name: state.name, price: state.price, original_price: state.original_price,img:state.img
            }}className='w-full h-full flex items-center justify-center'>
          Add to Cart </Link></div>
        <div className='w-1/2 h-full  bg-yellow-300'><Link to={"/details/prduct"} state={{
                name: state.name, price: state.price, original_price: state.original_price,img:state.img
            }} className='w-full h-full flex items-center justify-center'>Buy Now</Link></div>
      </div>
    </>
  );
}

export default Details;

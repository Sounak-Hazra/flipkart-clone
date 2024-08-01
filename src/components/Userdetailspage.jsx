import React, { useState } from 'react';
import userdetails from "../assets/userdetails.svg";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Userdetailspage = () => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [stateName, setStateName] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [roadName, setRoadName] = useState('');

  const {state}=useLocation()

  return (
    <>
      <div className='w-screen flex items-center justify-center'>
        <img className='w-full' src={userdetails} alt="" />
      </div>
      <div className='w-screen flex flex-col p-5 gap-4'>
        <input
          type="text"
          className='border text-sm border-gray-300 d-full h-12
           rounded-sm p-4'
          placeholder='Full name'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          className='border text-sm border-gray-300 d-full h-12
           rounded-sm p-4'
          placeholder='Mobile number (Required)*'
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <input
          type="text"
          className='border text-sm border-gray-300 d-full h-12
           rounded-sm p-4'
          placeholder='Pincode (Required)*'
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <div className='w-full flex gap-5 h-12 flex-row justify-between'>
          <input
            type="text"
            className='w-[45%] text-sm h-full rounded-sm p-4 border border-gray-300'
            placeholder='City (Required)*'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            className='w-[45%] text-sm h-full rounded-sm p-4 border border-gray-300'
            placeholder='State (Required)*'
            value={stateName}
            onChange={(e) => setStateName(e.target.value)}
          />
        </div>
        <input
          type="text"
          className='border text-sm border-gray-300 d-full h-12
           rounded-sm p-4'
          placeholder='House number / Building number (Required)*'
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
        />
        <input
          type="text"
          className='border text-sm border-gray-300 d-full h-12
           rounded-sm p-4'
          placeholder='Road name / Area / Colony (Required)*'
          value={roadName}
          onChange={(e) => setRoadName(e.target.value)}
        />
      </div>
      <div className='w-screen fixed bottom-0'>
      <Link
            to={{
              pathname: "/details/prduct/payment",
              
            }}  state= {{state1:state,state2:{name:fullName,mobileNumber:mobileNumber,pincode:pincode,city:city,stateName:stateName,houseNumber:houseNumber,roadName:roadName}}} 
            className="cursor-pointer"
          >
        <div className='h-12
         bg-orange-500 flex items-center justify-center text-white'>
          
            Save Address
          
          </div>
          </Link>
      </div>
    </>
  );
};

export default Userdetailspage;
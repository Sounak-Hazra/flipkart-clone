import React from 'react';


export default function App() {
  return (
    <>
      <div className='w-screen flex flex-col p-5 gap-4' >
        <input type="text" className='border border-gray-300 d-full h-16 rounded-md p-6'  placeholder='Full name' />
        <input type="text" className='border border-gray-300 d-full h-16 rounded-md p-6' placeholder='mobilenumber' />
        <input type="text" className='border border-gray-300 d-full h-16 rounded-md p-6 ' placeholder='pincode'  />
        <div className='w-full flex gap-5 h-16  flex-row justify-between'>
        <input type="text" className='w-[45%] h-full p-6 border border-gray-300 ' placeholder='City' />
          <input type="text" className='w-[45%] h-full p-6 border border-gray-300' placeholder='State' />
        </div>
        <input type="text" className='border border-gray-300 d-full h-16 rounded-md p-6' placeholder='Housenumbaer Buildingnumber'  />
        <input type="text" className='border border-gray-300 d-full h-16 rounded-md p-6' placeholder='Rode name area colony' />
       </div>
    </>
  );
}

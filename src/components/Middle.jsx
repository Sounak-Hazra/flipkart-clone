import React from 'react'
import Timer from './Timer'

const Middle = () => {
    return (
        <>
            <div className='p-[6px] flex justify-between'>
                <div className='flex flex-col'>
                    <p class="flex gap-2 justify-between items-center font-sans font-bold text-[13px]">
                        Limited time Deals
                    </p>
                    <span class="font-sans text-sm text-[10px]">
                        Hurry, Shop Now!
                    </span>
                </div>
                <div className='w-20 flex items-center justify-center'>
                    
                    <Timer />

                </div>
            </div>

        </>
    )
}

export default Middle
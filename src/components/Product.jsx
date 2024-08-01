import React, { useState,useRef,useEffect } from 'react';
import dot from "../assets/a.svg"

const Product = (props) => {
    const [scrollIndex, setScrollIndex] = useState(0);
    const [arr, setarr] = useState(props.props)

    const scroll = (index) => {
        setScrollIndex(index);
    };
    const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    };
    

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    };
    

    const handleTouchEnd = () => {
        if (touchStartX.current && touchEndX.current) {
            const deltaX = touchEndX.current - touchStartX.current;

            if (deltaX > 0) {
                setScrollIndex(scrollIndex-1)
            } else if (deltaX < 0) {
                if (scrollIndex < props.props.length-1) {
                    
                    setScrollIndex(scrollIndex+1)
                }
            }
            touchStartX.current = null;
            touchEndX.current = null;
        }
        
    }

    return (
        <div className="maincontainer w-[80vw] h-[50vh] flex overflow-hidden relative"
        onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="main2 flex transform transition-transform duration-300 ease-in-out " style={{ transform: `translateX(-${scrollIndex * 80}vw)` }}>
                {props.props.map((image, index) => (
                    <div key={index} className="images object-contain w-[80vw] h-[50vh] flex justify-center items-center">
                        <img className=' m-auto max-w-auto max-h-[50vh] ' src={image} alt="" />
                    </div>
                ))}
            </div>
            <div className="w-[40%] flex absolute bottom-3 right-[30%] gap-4">
                {props.props.map((_, index) => (
                    <div key={index} onClick={() => scroll(index)} className="cursor-pointer">
                        <img src={dot} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;

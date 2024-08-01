import React,{useState} from 'react'
import bannarsvg from "../assets/photo1712775259 (6)_upscayl_4x_realesrgan-x4fast.f089f044ef927b323d73.webp";
import bannar2svg from "../assets/bannar2.webp";
import bannar3svg from "../assets/bannar3.webp";
import bannar4svg from "../assets/bannar4.webp";
import bannar5svg from "../assets/bannar5.webp";
import Topbannar from './Topbannar';


// const slides=[bannarsvg,bannar2svg,bannar3svg,bannar4svg,bannar5svg]
const Maintop = () => {
    const [slides, setslides] = useState([bannarsvg, bannar2svg, bannar3svg, bannar4svg, bannar5svg])

    return (
        <>
            <div className='w-screen '>
                <Topbannar>
                    {slides.map((s) => {
                        return <img  src={s} alt="" />
                    })}
                    </Topbannar>
            </div>
        </>
  )
}

export default Maintop
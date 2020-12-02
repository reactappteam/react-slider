import React,{useState, useEffect} from 'react'
import {SliderData} from './ImageData'
import Button from './Button'
import{FaArrowAltCircleLeft,FaArrowAltCircleRight} from "react-icons/fa";
import '../App.css'
function ImageSlider() {
    const [current,setCurrent] = useState(0);
    const [toggle,setToggle] = useState(false)
    const length = SliderData.length
    const prevSlide = ()=>{
        setCurrent(current=== 0? length-1 : current-1)
    }
    const nextSlide = ()=>{
        setCurrent(current===length-1 ? 0: current+1)
    }

   const clickHandler = ()=>setToggle(!toggle)
    if(!Array.isArray(SliderData)&&length<=0){
        return null
    }

   
    return (
        <React.Fragment>
            <div className="button-box">
                <Button buttonStyle='btn--search'handler={clickHandler}>
                    تغییر اسلایدر
                </Button>
            </div>
           {
               toggle ?
               <section className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                {
                    SliderData.map((item,index)=>{
                        return(
                            <div className={current===index ? 'slide active':'slide'} key={index}>
                            {index===current ?<img src={item.image} alt="pic" className="image"  /> : null} 
                            </div>
                            
                        )
                    })
                }
            </section>:
            <section className="carousel">
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                <div className="image-container" style={{transform:`translateX(${-current*1000}px)`}}>
                    
                    {
                        SliderData.map((item,index)=>{
                            return(
                            
                                    <img src={item.image} alt="pic"   /> 
                            
                                
                            )
                        })
                    }
                </div>
                
            </section>
           }
            

            
        </React.Fragment>
    )
}

export default ImageSlider

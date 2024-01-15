import React, { useState, useRef } from 'react'
import useMouse from '../util/useMouse'
import {motion} from 'framer-motion'

const Intro = () => {
    const [isHovered, setIsHovered] = useState(false);
    const size = isHovered ? 400 : 0;
    const section1Ref = useRef(null);
    const {x, y} = useMouse(section1Ref);

    return (
        <section id='section01' ref={section1Ref}>

            <div className='intro__wrap'>
                <motion.div 
                    className='intro__mask'
                    animate={{
                    WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                    WebkitMaskSize: `${size}px`
                    }}
                    transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                >
                <p 
                    onMouseEnter={() => {setIsHovered(true)}} 
                    onMouseLeave={() => {setIsHovered(false)}}
                >
                    <div className='small'>초 록</div>
                    <div>창의적인</div>
                    <div>웹</div>
                    <div>디벨로퍼 포트폴리오</div>
                    <div>2024</div>
                </p>
                </motion.div>
                <div className='intro__text'>
                    <p>
                        <div className='small'>GREEN</div>
                        <div>creative</div>
                        <div>web</div>
                        <div><i className='green'>developoer</i></div>
                        <div>2024</div>
                    </p>
                </div>

            </div>
        </section>
        
    )
}

export default Intro
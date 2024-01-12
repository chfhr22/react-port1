import React, { useState, useRef } from 'react'
import useMouse from '../util/useMouse'
import {motion} from 'framer-motion'

const About = () => {
    const [isHovered, setIsHovered] = useState(false);
    const size = isHovered ? 400 : 0;
    const section2Ref = useRef(null);
    const {x, y} = useMouse(section2Ref);

  return (
    <section id="section02" ref={section2Ref}>
        <div className="about__wrap">
            <motion.div 
                className="about__mask"
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
                    <div className='small'>about me</div>
                    <div>나는 흐름을 주도하는 풀스택 령정 개발자입니다. </div>
                    <div>모든 열정과 결정에 다 같이 지식과 열정을 바칩니다. </div>
                    <div>혁신적이고 사용자 중심적인 소프트웨어 제작합니</div>
                </p>
            </motion.div>
            <div className="about__text">
                <p>
                    <div className='small'>about me</div>
                    <div>I am a <i className='green'>full-stack developer</i> driven by </div>
                    <div>knowledge and passion, dedicated to </div>
                    <div>crafting innovative & user-centric </div>
                </p>
            </div>
        </div>
        <div className="about__img__wrap">
            <motion.div className="about__img__mask">
                <div>
                    <div className="img__mask"></div>
                    <div className="img__mask"></div>
                    <div className="img__mask"></div>
                </div>
            </motion.div>
            <div className="about__img">
                <div className="img"></div>
                <div className="img"></div>
                <div className="img"></div>
            </div>
        </div>
    </section>
  )
}

export default About
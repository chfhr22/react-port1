import React, { useRef, useState } from 'react'
import useMouse from '../util/useMouse';
import {motion} from 'framer-motion'

const Motto = () => {
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 0;
  const section1Ref = useRef(null);
  const {x, y} = useMouse(section1Ref);

  return (
    <section id="section06" >
        <div class="motto__wrap" ref={section1Ref}>
            
            <motion.div 
              class="motto__mask"
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
                  <h3 class="small">motto</h3>
                  <div>나는 흐름을 주도하는 풀스택 령정 개발자입 </div>
                  <div>모든 열정과 결정에 다 같이 지식과 열정을 바칩니</div>
                  <div>혁신적이고 사용자 중심적인 소프트웨어 제작합 </div>
                </p>
            </motion.div>
            <div class="motto__text">
                <p>
                  <h3 class="small">motto</h3>
                  <div>I am a <i class="green">full-stack developer</i> driven by </div>
                  <div>knowledge and passion, dedicated to </div>
                  <div>crafting innovative & user-centric </div>
                </p>
            </div>
        </div>
    </section>
  )
}

export default Motto
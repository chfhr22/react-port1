import React, { useRef, useState } from 'react'
import useMouse from '../util/useMouse';
import {motion} from 'framer-motion'

const Work = () => {
    const [isHovered, setIsHovered] = useState(false);
    const size = isHovered ? 400 : 50;
    const section3Ref = useRef(null);
    const {x, y} = useMouse(section3Ref);

  return (
    <section id="section05" ref={section3Ref}>
        <h3 class="small">work</h3>
        <div class="work__wrap">

            <div class="work__item w01">
                <div class="left">
                    <motion.div 
                        class="work__mask"
                        animate={{
                            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                            WebkitMaskSize: `${size}px`
                        }}
                        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                    >
                        <div
                        onMouseEnter={() => {setIsHovered(true)}} 
                        onMouseLeave={() => {setIsHovered(false)}}
                        >
                            <div>유튜브를 이용하여 데이터를 불러오고 뿌리는 방법을 익혔습니다.</div>
                            <div>youtube API를 호출하여 반복문을 통하여 화면에 노출하고</div>
                            <div>세부적인 사항을 고려하여 작성했습니다.</div>
                        </div>
                    </motion.div>
                    <div class="work__text">
                        <div class="dot">"</div>
                        <div>I learned how to load and distribute data using YouTube.</div>
                        <div>Call the YouTube <i class="green">API</i> and display it on the screen through a loop.</div>
                        <div>It was <i class="green">written</i> with every detail in mind.</div>
                    </div>
                    <div class="work__info">
                        <a href="/">VIEW SITE : https://cssgradient.io/ </a>
                        <a href="/">CODE VIEW : https://github.com/webstoryboy </a>
                    </div>
                </div>
                <div class="right">
                    <div class="work__img"></div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Work
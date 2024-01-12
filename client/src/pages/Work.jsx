import React from 'react'
import {Link} from 'react-router-dom'
import {motion, useAnimation } from 'framer-motion'

const Work = () => {
    // const [isHovered, setIsHovered] = useState(false);
    // const size = isHovered ? 400 : 0;
    // const section3Ref = useRef(null);
    // const {x, y} = useMouse(section3Ref);

    // const imageAnimation = useAnimation();

    // const imageVariants = {
    //     hidden: { 
    //         opacity: 0,
    //         x: 100 
    //     },
    //     visible: { 
    //         opacity: 1,
    //         x: 0 
    //     }
    // };

    // const handleMouseEnter = () => {
    //     imageAnimation.start("visible");
    // };
    
    // const handleMouseLeave = () => {
    //     imageAnimation.start("hidden");
    // };
    
    

  return (
    <section id="section05">
        <h3 class="small">work</h3>
        <div class="work__wrap">

            <motion.div 
                class="work__item"
                // onMouseEnter={handleMouseEnter} 
                // onMouseLeave={handleMouseLeave}
            >
                <div class="left">
                    <div class="work__text">
                        <div class="dot">"</div>
                        <div>유튜브를 이용하여 데이터를 불러오고 뿌리는 방법을 익혔습니다.</div>
                        <div>youtube 를 호출하여 반복문을 통하여 화면에 노출하고</div>
                        <div>세부적인 사항을 고려하여 작성했습니다.</div>
                        <div class="work__info">
                            <Link to="/">VIEW SITE : https://cssgradient.io/ </Link>
                            <Link to="/">CODE VIEW : https://github.com/chfhr22 </Link>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <motion.div 
                        class="work__img"
                        // initial="hidden"
                        // animate={imageAnimation}
                        // variants={imageVariants}
                    ></motion.div>
                </div>
            </motion.div>

        </div>
    </section>
  )
}

export default Work
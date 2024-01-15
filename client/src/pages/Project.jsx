import React from 'react'
import { Link } from 'react-router-dom'
import {motion, useAnimation } from 'framer-motion'

const Project = ({text, index, setModal}) => {
    // const [isHovered, setIsHovered] = useState(false);
    // const size = isHovered ? 400 : 0;
    // const section3Ref = useRef(null);
    // const {x, y} = useMouse(section3Ref);

    const imageAnimation = useAnimation();

    const imageVariants = {
        hidden: { 
            opacity: 0,
            x: 100 
        },
        visible: { 
            opacity: 1,
            x: 0 
        }
    };

    const handleMouseEnter = () => {
        imageAnimation.start("visible");
    };
    
    const handleMouseLeave = () => {
        imageAnimation.start("hidden");
    };

    return (
        <div 
        className="work__item"
        onMouseEnter={() => { setModal({ active: true, index: index }) }}
        onMouseLeave={() => { setModal({ active: false, index: index }) }}
        >
            <div class="left">
                <div className="work__text">
                    <div>{text.desc}</div>
                </div>
                <div className="work__info">
                <Link to="/">VIEW SITE :  {text.site}</Link>
                <Link to="/">CODE VIEW :  {text.git}</Link>
                </div>
            </div>

            <div class="right">
                <motion.div 
                    class="work__img"
                    initial="hidden"
                    animate={imageAnimation}
                    variants={imageVariants}
                ></motion.div>
                </div>
        </div>
    )
}

export default Project
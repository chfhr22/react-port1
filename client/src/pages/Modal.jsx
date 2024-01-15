import React, { useEffect, useRef } from 'react'
import {motion} from 'framer-motion'
import gsap from 'gsap'

const scaleAnimation = {
    initial: {scale: 0, x: '-50%', y: '-50%'},
    enter: {scale: 1,  x: '-50%', y: '-50%', transition: {duration: 0.4, ease: [0.85, 0, 0.15, 1]}},
    close: {scale: 0, x: '-50%', y: '-50%', transition: {duration: 0.4, ease: [0.85, 0, 0.15, 1]}},
}


const Modal = ({modal, texts}) => {

    const {active, index} = modal;
    const container = useRef(null);

    useEffect(() => {
        const moveContainerX = gsap.quickTo(container.current, 'left', {duration: 0.8, ease: 'power3'});
        const moveContainerY = gsap.quickTo(container.current, 'top', {duration: 0.8, ease: 'power3'});
    
        window.addEventListener('mousemove', (e) => {
            const {clientX, clientY} = e;
            moveContainerX(clientX)
            moveContainerY(clientY)
        });
    }, []);

    return (
            <motion.div ref={container} variants={scaleAnimation} initial='initial' animate={active ? 'enter' : 'close'} className='modal__wrap'>
                <div style={{top: index * -100 + '%'}} className='modal__slider'>
                    {texts.map((text, index) => {
                        const {src, title} = text
                        return (
                            <div className='modal' key={index}>
                                <img src={src} alt={title} />
                            </div>
                        )
                    })}
                </div>
            </motion.div>
    )
}

export default Modal
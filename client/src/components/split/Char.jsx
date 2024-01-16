import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';

const Char = ({ paragraph }) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.25"]
    })

    const words = paragraph.split(" ")

    const Char = ({ children, progress, range }) => {
        const opacity = useTransform(progress, range, [0, 1])
        return (
            <span>
                <span>{children}</span>
                <motion.span style={{ opacity: opacity }}>{children}</motion.span>
            </span>
        )
    }

    return (
        <p
            ref={container}
        >
            {
                words.map((word, i) => {
                    const start = i / words.length
                    const end = start + (1 / words.length)
                    return <Char key={i} progress={scrollYProgress} range={[start, end]}>{word}</Char>
                })
            }
        </p>
    )

    
}



export default Char
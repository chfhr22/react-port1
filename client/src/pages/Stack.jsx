import React from 'react';
import { motion } from 'framer-motion';

const Stack = () => {
  const hoverAnimation = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const textAnimation = {
    initial: {
      color: "#ada18f" // 초기 폰트 색상
    },
    animate: {
      color: "#000", // 호버 시 폰트 색상
      transition: {
        duration: 0.2 // 색상 변경 지속 시간
      }
    }
  };

  return (
    <section id="section03">
        <div className="stack__wrap">
            <h3 className="small">stack</h3>
            <ul>
                {["PHP", "REACT", "NEXT", "JAVASCRIPT"].map((tech, index) => (
                  <motion.li key={index} className="stack-item" initial="initial" whileHover="animate" variants={textAnimation}>
                    <motion.div className="stack-bg" variants={hoverAnimation} />
                    {tech}
                  </motion.li>
                ))}
            </ul>
        </div>
    </section>
  );
}

export default Stack;

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

  const technologies = [
    { name: "PHP", description: "서버 사이드 스크립트 언어" },
    { name: "REACT", description: "사용자 인터페이스를 구축하기 위한 자바스크립트 라이브러리" },
    { name: "NEXT", description: "React 기반의 서버 사이드 렌더링과 정적 사이트 생성을 지원하는 프레임워크" },
    { name: "JAVASCRIPT", description: "웹 페이지를 동적으로 만들기 위한 프로그래밍 언어" }
  ];

  return (
    <section id="section03">
      <div className="stack__wrap">
        <h3 className="small">stack</h3>
        <ul>
          {technologies.map((tech, index) => (
            <motion.li key={index} className="stack-item" initial="initial" whileHover="animate" variants={textAnimation}>
              <motion.div className="stack-bg" variants={hoverAnimation} />
              {tech.name}
              <span className="tech__desc">{tech.description}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Stack;

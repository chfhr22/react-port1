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
    { name: "htmlcss", description: "HTML을 활용하여 웹페이지의 레이아웃을 정하고, CSS를 활용하여 스타일과 반응형 디자인을 적용함으로써 사용자 친화적인 경험을 제공할 수 있습니다." },
    { name: "reactnext", description: "react의 CSR방식과 next.js의 SSR방식의 차이점을 알고 SEO에 최적화된 웹사이트를 만들 수 있습니다." },
    { name: "javascript", description: "JavaScript를 활용하여 각종 이벤트를 작성하여 동적 요소를 추가해 사용자 경험을 향상시키고자 합니다." },
    { name: "nodeexpress", description: "API를 구축하고, 이를 통해 데이터를 주고받으며 사이트의 댓글 기능 등을 구현하였습니다." },
    { name: "phpmysql", description: "PHP를 활용하여 웹 사이트를 구축하고 MySQL의 데이터베이스를 사용하여 해당 사이트의 데이터를 관리할 수 있습니다." }
  ];

  return (
    <section id="section03">
      <div className="stack__wrap">
        <h3 className="small">what i do</h3>
        <ul>
          {technologies.map((tech, index) => (
            <motion.li key={index} className="stack-item" initial="initial" whileHover="animate" variants={textAnimation}>
              <motion.div className="stack-bg" variants={hoverAnimation} />
              {tech.name}
              <span className="tech__desc">
                <div>{tech.description}</div>
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Stack;

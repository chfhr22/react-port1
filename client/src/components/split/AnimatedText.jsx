import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text }) => {
  const textRef = useRef();

  useEffect(() => {
    const chars = textRef.current.querySelectorAll('span');

    // 초기 투명도를 0으로 설정
    gsap.set(chars, { opacity: 0.2 });

    gsap.to(chars, {
      opacity: 1, // 최종 투명도를 1로 설정
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom", // 스크롤 트리거 시작 위치
        end: "bottom top", // 스크롤 트리거 종료 위치
        scrub: 1,
      }
    });
  }, [text]);

  return (
    <div className="split about" ref={textRef} aria-label={text}>
      {text.split("").map((char, i) => (
        <span key={i} aria-hidden="true">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;

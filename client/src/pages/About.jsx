import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
    const container = useRef(null);
    let refs = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        createAnimation();
    }, []);

    const createAnimation = () => {
        gsap.to(refs.current, {
            scrollTrigger: {
                trigger: container.current,
                scrub: true,
                start: 'top',
                end: `+=${window.innerHeight / 1.5}`,
            },
            opacity: 1,
            ease: 'none',
            stagger: 0.1,
            marker: true
        });
    };

    const splitWords = (phrase) => {
        return phrase.split(" ").map((word, i) => {
            if (word === "full-stack") {
                return <span key={i} className="green" ref={el => refs.current.push(el)}>{word} </span>;
            } else {
                return <span key={i} ref={el => refs.current.push(el)}>{word} </span>;
            }
        });
    };

    return (
        <section id="section02" ref={container}>
            <div className="about__wrap">
                <div className="about__text">
                    <p>{splitWords("I am a full-stack developer driven by knowledge and passion, dedicated to crafting innovative & user-centric software")}</p>
                </div>
            </div>
        </section>
    );
};

export default About;

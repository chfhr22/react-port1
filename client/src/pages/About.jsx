import React from 'react';
import AnimatedText from '../components/split/AnimatedText';


const About = () => {

    return (
        <section id="section02">
            <div className="about__wrap">
                <div className="small">about</div>
                <div className="about__text">
                    <AnimatedText text='I am a full stack developer driven by knowledge and passion, dedicated to crafting innovative & user-centric software' />
                </div>
            </div>
            <div className="about__img__wrap">
                <div className="about__img">
                    <div className="img"></div>
                    <div className="img"></div>
                    <div className="img"></div>
                </div>
            </div>
        </section>
    );
};

export default About;

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

import youtube from '../assets/img/youtube.jpg';
import port from '../assets/img/port.jpg';
import img2 from '../assets/img/img2.jpg';


const Work = () => {

    const [visibleItem, setVisibleItem] = useState(null);

    const imageVariants = {
        hidden: {
            opacity: 0, 
            y: 200, 
            transition: {
                duration: 0.4, 
                ease: [0.85, 0, 0.15, 1]
            }
        },
        visible: {
            opacity: 1, 
            y: 0, 
            transition: {
                duration: 0.4, 
                ease: [0.85, 0, 0.15, 1]
            }
        }
    };

    const texts = [
        {
            title: 'react site',
            desc: (
                <>
                    This is an abandoned animal promotion site using <i className='green'>React</i>, where you can collect information on various shelters, and a chat window using <i className='green'>socket.io</i> has also been implemented.
                </>
            ),
            site: 'https://cssgrLinkdient.io/',
            git: 'https://github.com/chfhr22',
            src: img2
        },
        {
            title: 'PHP site',
            desc: (
                <>
                The site was built with <i className='green'>PHP</i> and data was handled with <i className='green'>MySQL</i>. Data includes member information, quizzes, rankings, posts, etc.
                </>
            ),
            site: 'https://cssgrLinkdient.io/',
            git: 'https://github.com/chfhr22',
            src: img2
        },
        {
            title: 'youtube site',
            desc: (
                <>
                I learned how to load and distribute data using YouTube.Call the <i className='green'>YouTube API</i> and display it on the screen through a loop. It was written with every detail in mind.
                </>
            ),
            site: 'https://cssgrLinkdient.io/',
            git: 'https://github.com/chfhr22',
            src: youtube
        },
        {
            title: 'movie site',
            desc: (
                <>
                Developed reusable UI components using <i className='green'>Vue.js</i> component based system.This site provides various movie information to help you make a choice.
                </>
            ),
            site: 'https://cssgrLinkdient.io/',
            git: 'https://github.com/chfhr22',
            src: port
        },
        {
            title: 'portfolio',
            desc: (
                <>
                This is a portfolio site created with <i className='green'>React</i>, and has a rich visual feel with various animations using <i className='green'>framer-motion</i>
                </>
            ),
            site: 'https://cssgrLinkdient.io/',
            git: 'https://github.com/chfhr22',
            src: port
        },
    ]
    
    const handleMouseEnter = (index) => {
        setVisibleItem(index);
    };
    
    const handleMouseLeave = () => {
        setVisibleItem(null);
    };
    
    return (
        <section id="section05">
            <h3 className="small">work</h3>
            <div className="work__wrap">

                {texts.map((text, index) => (
                    <div className="work__item" key={index}>
                        <div class="left">
                            <div
                                className="work__text"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div>{text.desc}</div>
                            </div>
                            <div className="work__info">
                                <Link to="/">VIEW SITE : {text.site}</Link>
                                <Link to="/">CODE VIEW : {text.git}</Link>
                            </div>
                        </div>

                        <div className="right">
                            <motion.div
                                className="work__img"
                                initial="hidden"
                                animate={visibleItem === index ? "visible" : "hidden"}
                                variants={imageVariants}
                            >
                                <img src={text.src} alt={text.title} />
                            </motion.div>
                        </div>
                    </div>
                ))}


            </div>

        </section>
    )
}

export default Work
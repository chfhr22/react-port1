import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

import youtube from '../assets/img/youtube.jpg';
// import youtube01 from '../assets/img/youtube01.jpg';
// import port from '../assets/img/port.jpg';
import port01 from '../assets/img/port01.jpg';
// import movie from '../assets/img/movie.jpg';
import movie01 from '../assets/img/movie01.jpg';
// import petpar from '../assets/img/petpar.jpg';
import petpar01 from '../assets/img/petpar01.jpg';
// import quiz from '../assets/img/quiz.jpg';
import quiz01 from '../assets/img/quiz01.jpg';



const Work = () => {

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
            src: petpar01
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
            src: quiz01
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
            src: movie01
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
            src: port01
        },
    ]

    
    return (
        <section id="section05">
            <h3 className="small">portfolio</h3>
            <div className="work__wrap">

                {texts.map((text, index) => (
                    <div 
                    className="work__item" 
                    key={index}
                    >
                        <div className="left">
                            <div
                                className="work__text"
      
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
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// import youtube from '../assets/img/youtube.jpg';
import youtube01 from "../assets/img/youtube01.jpg";
import port from "../assets/img/port.jpg";
// import port01 from '../assets/img/port01.jpg';
import movie from "../assets/img/movie.jpg";
// import movie01 from '../assets/img/movie01.jpg';
import petpar from "../assets/img/petpar.jpg";
// import petpar01 from '../assets/img/petpar01.jpg';
import quiz from "../assets/img/quiz.jpg";
// import quiz01 from '../assets/img/quiz01.jpg';

const Port = () => {
  const [hoverEffect, setHoverEffect] = useState(null);

  const handleMouseOverUp = () => {
    setHoverEffect("up");
  };

  const handleMouseOverDown = () => {
    setHoverEffect("down");
  };

  const getStyle = () => {
    let style = {
      transition: { duration: 0.4, ease: [0.85, 0, 0.15, 1] },
    };

    switch (hoverEffect) {
      case "up":
        return {
          transform: "translateY(-100%)",
          style,
        };
      case "down":
        return {
          transform: "translateY(100%)",
          style,
        };
      default:
        return style;
    }
  };

  return (
    <section id="section05">
      <h3 className="small">portfolio</h3>
      <div className="work__wrap">
        <div className="work__item w1">
          <div className="left">
            <div className="work__text">
              <div>
                This is an abandoned animal promotion site using
                <i
                  className="green"
                  onMouseOver={handleMouseOverDown}
                  onMouseOut={() => setHoverEffect(null)}
                >
                  React
                </i>
                , where you can collect information on various shelters, and a
                chat window using
                <i
                  className="green"
                  onMouseOver={handleMouseOverUp}
                  onMouseOut={() => setHoverEffect(null)}
                >
                  socket.io
                </i>
                has also been implemented.
              </div>
            </div>
            <div className="work__info">
              <Link to="/">VIEW SITE : https://cssgrLinkdient.io/</Link>
              <Link to="/">CODE VIEW : https://github.com/chfhr22</Link>
            </div>
          </div>

          <div className="right">
            <div className="work__img">
              <div className="img">
                <img style={getStyle()} src={youtube01} alt="" />
                <img style={getStyle()} src={petpar} alt="" />
                <img style={getStyle()} src={quiz} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="work__item w2">
          <div className="left">
            <div className="work__text">
              <div>
                The site was built with
                <i
                  className="green"
                  onMouseOver={handleMouseOverDown}
                  onMouseOut={() => setHoverEffect(null)}
                >
                  PHP
                </i>
                and data was handled with
                <i
                  className="green"
                  onMouseOver={handleMouseOverUp}
                  onMouseOut={() => setHoverEffect(null)}
                >
                  MySQL
                </i>
                . Data includes member information, quizzes, rankings, posts,
                etc.
              </div>
            </div>
            <div className="work__info">
              <Link to="/">VIEW SITE : https://cssgrLinkdient.io/</Link>
              <Link to="/">CODE VIEW : https://github.com/chfhr22</Link>
            </div>
          </div>

          <div className="right">
            <div className="work__img">
              <div className="img">
                <img style={getStyle()} src={youtube01} alt="" />
                <img style={getStyle()} src={petpar} alt="" />
                <img style={getStyle()} src={quiz} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="work__item w3">
          <div className="left">
            <div className="work__text">
              <div>
                I learned how to load and distribute data using YouTube.Call the
                <i className="green">YouTube API</i> and display it on the
                screen through a loop. It was written with every detail in mind.
              </div>
            </div>
            <div className="work__info">
              <Link to="/">VIEW SITE : https://cssgrLinkdient.io/</Link>
              <Link to="/">CODE VIEW : https://github.com/chfhr22</Link>
            </div>
          </div>

          <div className="right">
            <div className="work__img" initial="hidden">
              <div className="img">
                <img style={getStyle()} src={youtube01} alt="" />
                <img style={getStyle()} src={petpar} alt="" />
                <img style={getStyle()} src={quiz} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="work__item w4">
          <div className="left">
            <div className="work__text">
              <div>
                Developed reusable UI components using
                <i className="green">Vue.js</i> component based system.This site
                provides various movie information to help you make a choice.
              </div>
            </div>
            <div className="work__info">
              <Link to="/">VIEW SITE : https://cssgrLinkdient.io/</Link>
              <Link to="/">CODE VIEW : https://github.com/chfhr22</Link>
            </div>
          </div>
          <div className="right">
            <div className="work__img" initial="hidden">
              <div className="img">
                <img style={getStyle()} src={youtube01} alt="" />
                <img style={getStyle()} src={petpar} alt="" />
                <img style={getStyle()} src={quiz} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="work__item w5">
          <div className="left">
            <div className="work__text">
              <div>
                This is a portfolio site created with
                <i className="green">React</i>, and has a rich visual feel with
                various animations using <i className="green">framer-motion</i>
              </div>
            </div>
            <div className="work__info">
              <Link to="/">VIEW SITE : https://cssgrLinkdient.io/</Link>
              <Link to="/">CODE VIEW : https://github.com/chfhr22</Link>
            </div>
          </div>

          <div className="right">
            <div className="work__img" initial="hidden">
              <div className="img">
                <img style={getStyle()} src={youtube01} alt="" />
                <img style={getStyle()} src={petpar} alt="" />
                <img style={getStyle()} src={quiz} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Port;

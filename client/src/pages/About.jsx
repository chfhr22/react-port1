import React from 'react'

const About = () => {

  return (
    <section id="section02">
        <div className="about__wrap">
            <div className="about__text">
                <p>
                    <div className='small'>about me</div>
                    <div>I am a <i className='green'>full-stack developer</i> driven by </div>
                    <div>knowledge and passion, dedicated to </div>
                    <div>crafting innovative & user-centric </div>
                </p>
            </div>
        </div>
        <div className="about__img__wrap">
            <div className="about__img__mask">
                <div>
                    <div className="img__mask"></div>
                    <div className="img__mask"></div>
                    <div className="img__mask"></div>
                </div>
            </div>
            <div className="about__img">
                <div className="img"></div>
                <div className="img"></div>
                <div className="img"></div>
            </div>
        </div>
    </section>
  )
}

export default About
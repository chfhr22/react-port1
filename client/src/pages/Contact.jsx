import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <section id="section07">
            <div className='small'>contact</div>
            <div className="contact__wrap">
                <ul>
                    <li><Link to="/">github</Link></li>
                    <li><Link to="/">codepen</Link></li>
                    <li><Link to="/">behance</Link></li>
                </ul>
                <ul>
                    <li><Link to="/">youtube site</Link></li>
                    <li><Link to="/">movie site</Link></li>
                    <li><Link to="/">pet site</Link></li>
                    <li><Link to="/">pph site</Link></li>
                    <li><Link to="/">portfolio site</Link></li>
                    <li><Link to="/">webstand site</Link></li>
                </ul>
                <ul>
                    <li><Link to="/">javascript</Link></li>
                    <li><Link to="/">css</Link></li>
                    <li><Link to="/">gsap</Link></li>
                    <li><Link to="/">quiz</Link></li>
                    <li><Link to="/">search</Link></li>
                </ul>
                <ul>
                    <li><Link to="/"><em>email</em>chfhrdk_1@naver.com</Link></li>
                    <li><Link to="/"><em>kakao</em>chfhrdk_1</Link></li>
                </ul>
            </div>
            <div class="contact__copy">
                2024 ⓒ green Corp.<br />리액트로 제작된 포트폴리오입니다.
            </div>
        </section>
    )
}

export default Contact
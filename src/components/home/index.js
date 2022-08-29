import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react';
import AnimatedLetters from '../animationletters';
import Logo from './logo';
import { ReactNotifications } from 'react-notifications-component';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['u', 's', 'h', 'a', 'n'];
    const jobArray = ['F', 'l', 'u', 't', 't', 'e', 'r', ' ', 'D', 'e', 'v'];

    setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000)

    return (
        <div>
            <div className="container home-page">
                <Logo />
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={16} />
                    </h1>
                    <h2>Science & Maths Enthusiast</h2>
                    <Link to="/contact" className='flat-button'>HIRE ME</Link>
                </div>
            </div >
            <ReactNotifications />
        </div>
    )
}

export default Home
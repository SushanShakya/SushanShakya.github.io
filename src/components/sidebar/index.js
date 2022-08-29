import { Link, NavLink } from 'react-router-dom'
import './index.scss'

import Logos from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning, faMobileAndroid, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import { Store } from 'react-notifications-component';

const Sidebar = () => {

    let notify = (e) => {
        e.preventDefault();
        // NotificationManager.warning("Page under construction", "Sorry", 2000);
        Store.addNotification({
            title: "Sorry! ",
            message: "Page Under Construction",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    }

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logos} alt="logo" />
                {/* <img className='sub-logo' src={LogoSubtitle} alt="logo" /> */}
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faBoltLightning} color="#4d4d4e" />
                </NavLink>
                {/* eslint-disable-next-line */}
                <a href="/about" className='about-link' onClick={notify}>
                    <FontAwesomeIcon icon={faMobileAndroid} color="#4d4d4e" />
                </a>
                {/* eslint-disable-next-line */}
                <a href="/contact" className='contact-link' onClick={notify} >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </a>
                {/* <NavLink exact="true" activeclassname="active" className="about-link"
                    //  to="/about"
                    to="#"
                    onClick={notify}
                >
                    <FontAwesomeIcon icon={faMobileAndroid} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link"
                    // to="/contact"
                    to="#"
                    onClick={notify}
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink> */}
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sushan-shakya-8953711a6/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/SushanShakya">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://medium.com/@sushaanshakya88">
                        <FontAwesomeIcon icon={faMedium} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div >
    )
}


export default Sidebar
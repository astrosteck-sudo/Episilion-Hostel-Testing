import './PageHeader.css';
import HamburgerButton from '../assets/icons/hamburger_button_2.png';
import { Link } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import profilePicture from '../assets/icons/user.png';
import downArrow from '../assets/icons/down-arrow.png'

export function PageHeader({ navlink, setNavLink, originalHostelCardData, sethostelsCardData, setHostelFound, isLoggedIn, setIsLoggedIn }) {
    const navigate = useNavigate();
    // const [navlink, setNavLink] = useState(false)
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    function renderHamburgerMenu() {
        if (!navlink) {
            setNavLink(true)
        } else {
            setNavLink(false)
        }
    }
    const handleLogout = () => {
        navigate("/login")
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setShowLogoutModal(false);
        // your logout logic here (clear token, redirect, etc.)
    };

    // function handleLogout() {
    //     alert("Are you sure you want to log out")
    //     localStorage.removeItem("token");  // 1. remove login proof
    //     setIsLoggedIn(false);              // 2. update UI state
    //     navigate("/login");                // 3. send user out
    // }

    //THIS WILL CHECK IF THE TARGET IS NOT THE HAMBURGER 
    // BUTTON, NAVLINKS MENU, AND IF THE NAVLINKS IS OPEN, 
    // IF THE CONDIOTIONS A TRUE , THE IF THE DOCUMENT IS 
    // CLICKED THE NAVLINK MEMU IS REMOVED
    document.addEventListener('click', (event) => {
        if (navlink && !event.target.closest('.navigation-links') && !event.target.closest('.hamburger-button'))
            setNavLink(false)
    })
    function resetValues() {
        sethostelsCardData(originalHostelCardData)
        setHostelFound(true)
    }

    // const user = JSON.parse(localStorage.getItem("user"));
    // console.log("User info from localStorage:", user);
    // localStorage.removeItem("user");
    // localStorage.removeItem("token");
    // console.log(user.name);
    // console.log(user.email);
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user.name);


    return (
        <>
            <section className="header-section">
                <Link className="episilion" to="/" onClick={resetValues}>
                    <div className='episilion-container'>
                        <p > <img src="/episilion_logo.svg" alt="" className='episilion-logo' />Episilion <div>Hostels</div></p>
                    </div>

                </Link>
                <nav className={`navigation-links ${navlink ? 'active' : ''}`}>
                    <NavLink className="link about-us-link" to="/">Home</NavLink>
                    <NavLink className="link about-us-link" to="/aboutus">About Us</NavLink>
                    <NavLink className="link ask-episilion" to="/askepisilion">Ask Episilion</NavLink>
                    <NavLink className="link more-from-us" to="/morefromus">More From Us</NavLink>
                    {isLoggedIn ?
                        <div className="user-button-pill-container">
                            <button onClick={() => setShowLogoutModal(true)} className='user-button-pill'>
                                <img src={profilePicture} className='user-pill-down-profile-pic'></img>
                                {user.name}
                                <img src={downArrow} alt="" className='user-pill-down-arrow' />
                            </button>
                        </div>

                        :
                        <div className="login-systems">
                            <Link to="/login">LOGIN</Link>
                            <Link to="/signup">SIGN UP</Link>
                        </div>}

                </nav>

                <button className="hamburger-button" aria-label="Menu" onClick={renderHamburgerMenu}>
                    <img src={HamburgerButton} alt="Menu"></img>
                </button>





                {showLogoutModal && (
                    <div className="modal-overlay" onClick={() => setShowLogoutModal(false)}>
                        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                            <h3 className="modal-title">Log Out</h3>
                            <p className="modal-message">Are you sure you want to log out?</p>
                            <div className="modal-buttons">
                                <button className="modal-cancel" onClick={() => setShowLogoutModal(false)}>
                                    Cancel
                                </button>
                                <button className="modal-confirm" onClick={handleLogout}>
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}
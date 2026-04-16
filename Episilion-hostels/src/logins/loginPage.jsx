import { PageHeader } from "../PageHeader/PageHeader";
import './logins.css';
import { SiteFooter } from "../SiteFooter/SiteFooter";
import googleImage from '../assets/icons/google.png';
import facebookImage from '../assets/icons/contact-us-facebook.png';
import { Link } from "react-router-dom";
import { useEffect } from "react";
//import fullStar from '../assets/icons/favorite.png';


export function LoginPage({ navlink, setNavLink }) {

    useEffect(() => {
        document.body.classList.add("body-bg");
        return () => {
            document.body.classList.remove("body-bg");
        };
    }, []);


    return (
        <>
            <title>Sign-Up | Episilion Hostels</title>
            <PageHeader navlink={navlink} setNavLink={setNavLink} />

            <div className="sign-up-container">
                <div className="side-bar-login">
                    <div className="episilion-logo-login">
                        <img src="/episilion_logo.svg" alt="" />
                    </div>
                    <div>
                        <h3 className="episilion-name-login">EPISILION</h3>
                        <h3 className="episilion-name-login">HOSTELS</h3>
                        <p className="home-away-from-home-text">Your home away from home</p>
                    </div>

                    <div className="testimonial-login">
                        <p>
                            <p>"The staff made us feel so welcome. Best hostel experince we've ever had"</p>
                            <p className="testimonial-person">- Maria T., Traveller from Portugal</p>
                        </p>
                    </div>

                    <div className="hostels-figures">
                        <div className="average-rating-login-container"><p className="average-rating-login">4.8</p><p className="avg-rating-text">Avg Rating</p></div>
                        <div className="happy-guest-container"><p className="happy-guest-number">2,400+</p> <p className="happy-guest-text">Happy Guest</p></div>
                        <div className="locations-container-login"><p className="locations-number-login">12+</p> <p className="locations-text-login">Locations</p></div>
                    </div>
                </div>
                <div className="sign-up-wrapper login">
                    <div className="wrapper login">
                        <p className="join-us-text login"><span className="join-us-span">WELCOME BACK</span></p>
                        <h4 className="create-account-text login"><span className="create-account-span">LOGIN</span></h4>
                        <p className="start-journey-text">Good to see you again - let's let you in</p>
                    </div>

                    <div className="external-sign-up-buttons">
                        <button className="external-sign-up-button"><img src={googleImage} className="external-sign-up-image"></img> Google</button>
                        <button className="external-sign-up-button"><img src={facebookImage} className="external-sign-up-image"></img> FaceBook</button>
                    </div>

                    <div className="divider">
                        <span>or sign up with email</span>
                    </div>

                    <div className="email-address-conatainer">
                        <p for="email-address" className="email-address-header">EMAIL ADDRESS</p>
                        <input type="email" name="email" placeholder="you@example.com" className="email-address-input" />
                    </div>

                    <div className="passwords-container">
                        <div className="password-conatainer">
                            <p for="password" className="password-header">PASSWORD</p>
                            <input type="password" name="password" placeholder="••••••••••••••••" className="password-input" />
                        </div>
                    </div>

                    <div className="create-account-button-container">
                        <button className="create-account-button">Login</button>
                    </div>

                    <div className="alternate-link-container">
                        <p>Don't have an account? <Link className="logins-page-link" to="/signup" >Sign up for free</Link></p>
                    </div>

                    <div className="perks-container">
                        <ul className="perks-list">
                            <li>Free to join</li>
                            <li>Exclusive deals</li>
                            <li>Easy booking</li>
                        </ul>
                    </div>
                </div>
            </div>

            <SiteFooter />

        </>
    )
}
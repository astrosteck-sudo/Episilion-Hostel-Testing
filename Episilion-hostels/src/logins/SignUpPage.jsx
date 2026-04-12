import { PageHeader } from "../PageHeader/PageHeader";
import './logins.css';
import { SiteFooter } from "../SiteFooter/SiteFooter";
import googleImage from '../assets/icons/google.png';
import facebookImage from '../assets/icons/contact-us-facebook.png';
///import { Link } from "react-router-dom";
import { useEffect } from "react";


export function SignUpPage({ navlink, setNavLink }) {

    useEffect(() => {
        document.body.classList.add("body-bg");
        return () => {
            document.body.classList.remove("body-bg");
        };
    }, []);

    // const [type, setType] = useState('password');

    // function showpassword(parameter){
    // if(type === 'password'){
    //     setType('text')
    // }else{
    //     setType('password')
    // }
    //console.log('Show password has been clicked')
    //     if(parameter === 'password'){
    //         setType('text');
    //     }else{
    //         setType('password')
    //     }
    //     console.log(parameter)

    // }


    return (
        <>
            <title>Sign-Up | Episilion Hostels</title>
            <PageHeader navlink={navlink} setNavLink={setNavLink} />

            <div className="sign-up-container">
                <div className="sign-up-wrapper">
                    <div className="wrapper">
                        <p className="join-us-text"><span className="join-us-span">JOIN US</span></p>
                        <h4 className="create-account-text"><span className="create-account-span">Create Account</span></h4>
                        <p className="start-journey-text">Start your journey with Episilion Hostels</p>
                    </div>

                    <div className="external-sign-up-buttons">
                        <button className="external-sign-up-button"><img src={googleImage} className="external-sign-up-image"></img> Google</button>
                        <button className="external-sign-up-button"><img src={facebookImage} className="external-sign-up-image"></img> FaceBook</button>
                    </div>

                    <div className="divider">
                        <span>or sign up with email</span>
                    </div>

                    <div className="fullname-conatainer">
                        <p for="fullname" className="full-name-header">FULL NAME</p>
                        <input type="text" name="fullname" placeholder="e.g. John Mensah" className="full-name-input" />
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

                        <div className="comfirm-password-conatainer">
                            <p for="comfirm-password" className="comfirm-password-header">COMFIRM PASSWORD</p>
                            <input type="password" name="comfirm-password" placeholder="••••••••••••••••" className="comfirm-password-input" />
                        </div>
                    </div>

                    <div className="show-password-container">
                        <input type="checkbox" id="showPassword" /><label for="showPassword" className="show-password">Show password</label>
                    </div>

                    <div className="create-account-button-container">
                        <button className="create-account-button">Create Account</button>
                    </div>

                    <div className="alternate-link-container">
                        <p>Already have an account? <a className="login-page-link">Log in</a></p>
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
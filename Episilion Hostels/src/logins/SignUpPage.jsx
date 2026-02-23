import { PageHeader } from "../PageHeader/PageHeader";
import './logins.css';
import closedEye from '../assets/icons/closed-eyes.png'
import { SiteFooter } from "../SiteFooter/SiteFooter";
import { Link } from "react-router-dom";
import { useEffect } from "react";


export function SignUpPage({ navlink, setNavLink }) {

    useEffect(() => {
        document.body.classList.add("body-bg");
        return () => {
            document.body.classList.remove("body-bg");
        };
    }, []);



    return (
        <>
            <PageHeader navlink={navlink} setNavLink={setNavLink} />
            <main>
                <div className="login-box">
                    <form action="">
                        <h2>Sign Up</h2>
                        <div class="input-box">
                            <input type="text" title="Enter Your Name Here" required></input><br></br>
                            <label >Enter Your Name</label>
                        </div>

                        <div class="input-box">
                            <input type="email" required title="Enter Your Email Address Here"></input><br></br>
                            <label>Enter Your Email Address</label>
                        </div>

                        <div class="input-box">
                            <input type="password" id="user-password" required title="Enter Your Password Here"></input>
                            <img class="password-wrapper" src={closedEye} id="toggle-eye" alt="Show Password"></img>
                            <label>Enter Your Password</label>
                        </div>

                        <div class="input-box">
                            <input type="password" id="comfirm-user-password" required></input>
                            <img class="password-wrapper" src={closedEye} id="comfirm-toggle-eye" alt="Show Password"></img>
                            <label>Comfirm Password</label>
                        </div>

                        <div class="buttons">
                            <button type="submit">Create Account</button>
                        </div>
                        <p class="altenative-text">Already Have An Account <Link to="/login">Login</Link></p>
                    </form>
                </div>
            </main>
            <SiteFooter />
        </>
    )
}
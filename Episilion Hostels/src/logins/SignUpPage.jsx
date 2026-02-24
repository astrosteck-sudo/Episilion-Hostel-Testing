import { PageHeader } from "../PageHeader/PageHeader";
import styles from  './logins.module.css';
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
            <title>Sign-Up | Episilion Hostels</title>
            <PageHeader navlink={navlink} setNavLink={setNavLink} substituteLink={<Link className="link" to="/">Home</Link>} />
            <div className={styles["wrapper"]}>
                <main className={styles["logins-main"]}>
                    <div className={styles["login-box"]}>
                        <form action="">
                            <h2>Sign Up</h2>
                            <div className={styles["input-box"]}>
                                <input type="text" title="Enter Your Name Here" required></input><br></br>
                                <label >Enter Your Name</label>
                            </div>

                            <div className={styles["input-box"]}>
                                <input type="email" required title="Enter Your Email Address Here"></input><br></br>
                                <label>Enter Your Email Address</label>
                            </div>

                            <div className={styles["input-box"]}>
                                <input type="password" id="user-password" required title="Enter Your Password Here"></input>
                                <img className={styles["password-wrapper"]} src={closedEye} id="toggle-eye" alt="Show Password"></img>
                                <label>Enter Your Password</label>
                            </div>

                            <div className={styles["input-box"]}>
                                <input type="password" id="comfirm-user-password" required></input>
                                <img className={styles["password-wrapper"]} src={closedEye} id="comfirm-toggle-eye" alt="Show Password"></img>
                                <label>Comfirm Password</label>
                            </div>

                            <div className={styles["buttons"]}>
                                <button type="submit">Create Account</button>
                            </div>
                            <p className={styles["altenative-text"]}>Already Have An Account <Link to="/login">Login</Link></p>
                        </form>
                    </div>
                </main>
                <SiteFooter />
            </div>

        </>
    )
}
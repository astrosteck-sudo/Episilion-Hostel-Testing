import { PageHeader } from "../PageHeader/PageHeader"
import { SiteFooter } from "../SiteFooter/SiteFooter"
import { Link } from "react-router-dom"
import { useEffect } from "react";

export function LoginPage({ navlink, setNavLink }) {

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
                <div class="login-box">
                    <form action="">
                        <h2>Welcome Back</h2>
                        <div class="input-box">

                            <input type="eail" name="user-email" id="user-email" required
                                title="Enter Your Email Address Here"></input><br></br>
                            <label for="user-email">Enter Your Email Address</label>
                        </div>

                        <div class="input-box">
                            <input type="password" name="user-password" id="user-password" required
                                title="Enter Your Password Here"></input>
                            <label for="user-password">Enter Your Password</label>
                        </div>

                        <div class="buttons">
                            <button type="submit">Login</button>
                        </div>
                        <p class="altenative-text">Already Have An Account <Link to="/signup">Sign Up</Link></p>

                    </form>
                </div>
            </main>
            <SiteFooter />
        </>
    )
}
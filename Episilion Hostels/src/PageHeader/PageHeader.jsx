import './PageHeader.css';
import HamburgerButton from '../assets/icons/hamburger_button_2.png';
import { Link } from 'react-router-dom';

export function PageHeader({ substituteLink, navlink, setNavLink }) {
    // const [navlink, setNavLink] = useState(false)

    function renderHamburgerMenu(){
        if(!navlink){
            setNavLink(true)
        }else{
            setNavLink(false)
        }
    }

    return (
        <>
            <section className="header-section">
                <Link className="episilion" to="/">
                    <p>Episilion <div>Hostels</div></p>
                </Link>
                <nav className={`navigation-links ${navlink ? 'active' : ''}`}>
                    {substituteLink}
                    <Link className="link" to="/">About Us</Link>
                    <Link className="link" to="/">Ask Episilion</Link>
                    <Link className="link" to="/">More From Us</Link>
                    <div className="login-systems">
                        <a to="/">LOGIN</a>
                        <a to="/">SIGN UP</a>
                    </div>
                </nav>

                <button className="hamburger-button" aria-label="Menu" onClick={renderHamburgerMenu}>
                    <img src={HamburgerButton} alt="Menu"></img>
                </button>
            </section>
        </>
    )
}
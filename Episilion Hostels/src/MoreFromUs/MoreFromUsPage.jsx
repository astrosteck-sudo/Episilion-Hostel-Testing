import { PageHeader } from "../PageHeader/PageHeader";
import { SiteFooter } from "../SiteFooter/SiteFooter";
import './MoreFromUsPage.css';
import { Link } from "react-router-dom";


export function MoreFromUsPage({ navlink, setNavLink }) {


    return (

        <>
            <title>More From Us | Episilion Hostels</title>
            <PageHeader navlink={navlink} setNavLink={setNavLink} substituteLink={<Link className="link" to="/">Home</Link>} />


            <section class="more-from-us-section js-more-from-us-section">
                <h3>Get More From Us</h3>

                <div class="projects-cards"></div>
            </section>

            <SiteFooter />
        </>
    )
}
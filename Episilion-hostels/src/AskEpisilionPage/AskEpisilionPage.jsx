import { PageHeader } from "../PageHeader/PageHeader";
import { Link } from "react-router-dom";
import { SiteFooter } from "../SiteFooter/SiteFooter";







export function AskEpisilionPage({ navlink, setNavLink}){



    return(
        <>
            <PageHeader navlink={navlink} setNavLink={setNavLink} substituteLink={<Link className="link" to="/">Home</Link>} />


            <SiteFooter/>
        </>
        

    )
}
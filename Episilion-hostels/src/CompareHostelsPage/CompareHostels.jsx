import { PageHeader } from "../PageHeader/PageHeader";
import { SiteFooter } from "../SiteFooter/SiteFooter";




export function CompareHostels({ navlink, setNavLink}){



    return(

        <>
            <PageHeader navlink={navlink} setNavLink={setNavLink} />


            <SiteFooter/>       
        </>
    )
}
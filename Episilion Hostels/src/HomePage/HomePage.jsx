import { useEffect, useState } from "react";
import { PageHeader } from "../PageHeader/PageHeader.jsx"
import axios from 'axios';
import { HostelCard } from "./HostelCard.jsx";
import './HomePage.css'
import { SiteFooter } from "../SiteFooter/SiteFooter.jsx";


export function HomePage() {

    const [hostelsCardData, sethostelsCardData] = useState([])

    const loadHostelsCard = async () => {
        const response = await axios.get('/hostel_data/hostel_data.json')
        sethostelsCardData(response.data);

    }
    useEffect(() => {
        loadHostelsCard();
    }, []);
    return (
        <>
            <PageHeader />
            <section className="hostels-section">
                <div className="hostels-cards js-hostel-cards">
                    {hostelsCardData.map((hostel) => {
                        return(
                            <HostelCard key={hostel.id} hostel={hostel}/>
                        )
                    })}
                </div>
            </section>

            
            <SiteFooter/>
        </>

    )
}
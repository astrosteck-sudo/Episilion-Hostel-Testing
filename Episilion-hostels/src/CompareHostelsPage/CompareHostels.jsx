import { PageHeader } from "../PageHeader/PageHeader";
import { SiteFooter } from "../SiteFooter/SiteFooter";
import './CompareHostels.css'



export function CompareHostels({ navlink, setNavLink, originalHostelCardData }) {
    const params = new URLSearchParams(window.location.search);
    const hostelId = params.get("hostelId")

    // const comparedHostel = originalHostelCardData.find((hostel) => hostel.id === hostelId)
    // console.log(comparedHostel)


    return (

        <>
            <PageHeader navlink={navlink} setNavLink={setNavLink} />

            <div className="hostel-comparison-container">
                <div className="compared-hostels">
                    {originalHostelCardData.map((hostel) => {
                        if (hostel.id === hostelId) {
                            console.log(hostel)
                            return (
                                <>
                                    <h1 className="compared-hostel-name">{hostel.name}</h1>
                                    <img className="compared-hostel-image" src={hostel.image} alt="" />
                                    <p className="compared-hostel-diatance">Distance From Campus : {hostel.distance} <span className="compared-hostel-diatance-advantage">closer</span></p>

                                    <h1 className="compared-hostel-titles">Price Details</h1>
                                    <p className="compared-hostel-pricing">Minimum Price : {hostel.pricing.priceMin} <span className="compared-hostel-price-advantage">lower</span></p>
                                    <p className="compared-hostel-pricing"> Additional Fees Total: {hostel.pricing.additionalFees.utilities + hostel.pricing.additionalFees.maintenance + hostel.pricing.additionalFees.cautionDeposit}</p>

                                    <h1 className="compared-hostel-titles">Room Types</h1>
                                    <ul className="types-of-rooms js-rooms-types">
                                        {hostel.rooms.types.map((room) => {
                                            return (
                                                <li className='special-font'>{room.type}<p>Price {room.price}</p></li>
                                            )
                                        })}
                                    </ul>

                                    <h1 className="compared-hostel-titles">Facilties And Ameneities</h1>
                                    <ul className="facilities-and-amenities-perks grid js-facilities-and-amenities-perks">
                                        {
                                            hostel.amenities.map((amenity) => {
                                                return (
                                                    <>
                                                        <li class="special-font">{amenity}</li>
                                                    </>
                                                )
                                            })
                                        }
                                        {
                                            hostel.rooms.furnishing.map((funish) => {
                                                return (
                                                    <li class="special-font">{funish}</li>
                                                )

                                            })
                                        }
                                    </ul>

                                    <h1 className="compared-hostel-titles">Rules And Regulation</h1>
                                    <ul className="grid rules-and-policies-style js-rules-and-regulations">
                                        {hostel.rules.map((rule) => {
                                            return (
                                                <li class="special-font">{rule}</li>
                                            )
                                        })}
                                    </ul>

                                    <h1 className="compared-hostel-titles">Room Images</h1>
                                    <div className="compared-hostel-room-type-images-continer">
                                        {hostel.media.images.map((image) => {

                                            return (
                                                <div class="compared-hostel-room-type-image">
                                                    <a href={image.url}>
                                                        <img class="hostel-room" src={image.url} alt={image.type}></img>
                                                    </a>
                                                    <div class="hostel-room-type-overlay">
                                                        <span class="hostel-room-type-overlay-text">{image.type}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>


                                </>
                            )
                        }


                    })}
                </div>
                <div className="compared-hostels">
                    {originalHostelCardData.map((hostel) => {
                        if (hostel.id === hostelId) {
                            console.log(hostel)
                            return (
                                <>
                                    <h1 className="compared-hostel-name">{hostel.name}</h1>
                                    <img className="compared-hostel-image" src={hostel.image} alt="" />
                                    <p className="compared-hostel-diatance">Distance From Campus : {hostel.distance} <span className="compared-hostel-diatance-advantage">closer</span></p>

                                    <h1 className="compared-hostel-titles">Price Details</h1>
                                    <p className="compared-hostel-pricing">Minimum Price : {hostel.pricing.priceMin} <span className="compared-hostel-price-advantage">lower</span></p>
                                    <p className="compared-hostel-pricing"> Additional Fees Total: {hostel.pricing.additionalFees.utilities + hostel.pricing.additionalFees.maintenance + hostel.pricing.additionalFees.cautionDeposit}</p>

                                    <h1 className="compared-hostel-titles">Room Types</h1>
                                    <ul className="types-of-rooms js-rooms-types">
                                        {hostel.rooms.types.map((room) => {
                                            return (
                                                <li className='special-font'>{room.type}<p>Price {room.price}</p></li>
                                            )
                                        })}
                                    </ul>

                                    <h1 className="compared-hostel-titles">Facilties And Ameneities</h1>
                                    <ul className="facilities-and-amenities-perks grid js-facilities-and-amenities-perks">
                                        {
                                            hostel.amenities.map((amenity) => {
                                                return (
                                                    <>
                                                        <li class="special-font">{amenity}</li>
                                                    </>
                                                )
                                            })
                                        }
                                        {
                                            hostel.rooms.furnishing.map((funish) => {
                                                return (
                                                    <li class="special-font">{funish}</li>
                                                )

                                            })
                                        }
                                    </ul>

                                    <h1 className="compared-hostel-titles">Rules And Regulation</h1>
                                    <ul className="grid rules-and-policies-style js-rules-and-regulations">
                                        {hostel.rules.map((rule) => {
                                            return (
                                                <li class="special-font">{rule}</li>
                                            )
                                        })}
                                    </ul>

                                    <h1 className="compared-hostel-titles">Room Images</h1>
                                    <div className="compared-hostel-room-type-images-continer">
                                        {hostel.media.images.map((image) => {

                                            return (
                                                <div class="compared-hostel-room-type-image">
                                                    <a href={image.url}>
                                                        <img class="hostel-room" src={image.url} alt={image.type}></img>
                                                    </a>
                                                    <div class="hostel-room-type-overlay">
                                                        <span class="hostel-room-type-overlay-text">{image.type}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>


                                </>
                            )
                        }


                    })}
                </div>
            </div>


            <SiteFooter />
        </>
    )
}
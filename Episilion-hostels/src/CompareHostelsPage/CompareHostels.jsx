import { useState } from "react";
import { PageHeader } from "../PageHeader/PageHeader";
import { SiteFooter } from "../SiteFooter/SiteFooter";
import leftArrowImage from '../assets/icons/left-arrow.png';
import rightArrowImage from '../assets/icons/right-arrow.png'
import './CompareHostels.css'
//import { useEffect } from "react";



export function CompareHostels({ navlink, setNavLink, originalHostelCardData }) {
    const params = new URLSearchParams(window.location.search);
    const hostelId = params.get("hostelId");

    const [hostelNumber, setHostelNumber] = useState(hostelId)//THIS CONTOLS THE HOSTEL THAT SHOWS UP WHEN THE USER CLICKES THE ARROW KEYS
    const [controlsListIndex, setControlListIndex] = useState(0)
    //THIS CONTROL CODE WILL MAKE SURE THE controlsListIndex WILL ALWAYS UPDATE WHEN THE originalHostelCardData CHANGES
    // useEffect(() => {
    //     setControlListIndex(originalHostelCardData.length)
    //     // const index = originalHostelCardData.findIndex(hostel => hostel.id == hostelId)
    //     // console.log(index + 1)
    // }, [originalHostelCardData,])
    
    function reduceHostelNumber() {
        let hostelIndex = controlsListIndex
        if (hostelIndex < 1) {
            hostelIndex = originalHostelCardData.length;
            setHostelNumber(originalHostelCardData[hostelIndex - 1].id)
            setControlListIndex(hostelIndex - 1)
        } else {
            setHostelNumber(originalHostelCardData[hostelIndex - 1].id)
            setControlListIndex(hostelIndex - 1)
        }
    }

    function increaseHostelNumber() {
        let hostelIndex = controlsListIndex +1
        if (hostelIndex >= originalHostelCardData.length) {
            console.log("bigger than originalHostelCardData", hostelIndex)
            hostelIndex = originalHostelCardData.length;
            setHostelNumber(originalHostelCardData[0].id)
            setControlListIndex(0)
        } else {
            console.log(hostelIndex)
            setHostelNumber(originalHostelCardData[hostelIndex].id)
            setControlListIndex(hostelIndex)
        }

    }

    return (

        <>
            <PageHeader navlink={navlink} setNavLink={setNavLink} />

            <div className="hostel-comparison-container">
                <div className="compared-hostels">
                    {originalHostelCardData.map((hostel) => {
                        if (hostel.id === hostelId) {
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
                    <div className="compared-hostels-switch">
                        <button className="compare-hostels-arrow-button" onClick={() => reduceHostelNumber()}><img src={leftArrowImage} alt="" /></button>
                        <p className="compare-hostels-switch-text">Switch Hostel</p>
                        <button className="compare-hostels-arrow-button" onClick={() => increaseHostelNumber()}><img src={rightArrowImage} alt="" /></button>
                    </div>
                    {originalHostelCardData.map((hostel) => {
                        if (hostel.id === hostelNumber) {
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
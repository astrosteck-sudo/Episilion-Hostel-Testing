import './MoreDetailsPage.css';
import { PageHeader } from '../PageHeader/PageHeader';
import { Link } from 'react-router-dom'
import { SiteFooter } from '../SiteFooter/SiteFooter';
import Phone from '../assets/icons/phone.svg';
import Whatsapp from '../assets/icons/whatsapp-128.svg';
import Email from '../assets/icons/email-14.svg';
import Manager from '../assets/icons/manager-avatar.svg';
import Clock from '../assets/icons/clock.svg';
import closeMapImage from '../assets/icons/close.png';
import websImage from '../assets/icons/web.png'
import compareImage from '../assets/icons/compare.png';
import emptyStar from '../assets/icons/empty-star.png';
import fullStar from '../assets/icons/star.png';
import { useState, useEffect } from 'react';
import { showHostelLocationOnMap } from "../UTILS/mapFunctions.js";
import { getDirectionsOnMap } from '../UTILS/mapFunctions.js';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Reviews } from './ReviewsData.jsx';



export function MoreDetailsPage({ navlink, setNavLink, originalHostelCardData }) {
    const [close, setClose] = useState(true);//THIS CONTROLS THE THE IFRAME, OPENING AND CLOSING IT
    const [activate, setActivate] = useState(false);//THIS CONTROLS THE DARK BACKGROUND WHEN THE LOCATIONS BUTTONS ARE CLICKED
    const [reviewTextValue, setReviewTextValue] = useState('')//THIS CONTROLS WHAT THE USER TYPOES IN THE TEXT AREA
    const [isSubmitting, setIsSubmitting] = useState(false)// THIS CONTROLLS SUBMIT BUTTON SO FREEZE WHEN SUBMITTING
    //const [toggleReview, setToggleReview] = useState('close');//THIS CONTROLLS THE SHOWING AND HIDING OF THE SUBMITTED REVIEWS
    const [reviewsResponse, setReviewsResonse] = useState([])//THIS STATE VARIABLE STORES THE RESPONSE FROM THE BACKEND WHEN WE RETRIEVE THE REVIEWS FOR A PARTICULAR HOSTEL
    const [rating, setRating] = useState(0);//THIS CONTROLS HOW THE STARS SELECTED BEHAVE


    const params = new URLSearchParams(window.location.search);
    const hostelId = params.get("hostelId")
    let hostelName = 'Annex'
    originalHostelCardData.map((hostel) => {
        if (hostel.id === hostelId) {
            hostelName = hostel.name
        }
    })

    const [googleMapSrc, setGoogleMapSrc] = useState('')

    function closeMap() {
        console.log('Close has bee clciked')
        if (!close) {
            setActivate(false)
            setClose(true)
        } else {
            setClose(false)
        }
    }

    const navigate = useNavigate();
    function comapareHostels(parameter) {
        navigate(`/comparehostels?hostelId=${parameter}`);
    }




    function handleStarClick(value) {
        if (rating === value) {
            setRating(0);
        } else {
            setRating(value);
        }

    }
    function userTypedReview(event) {
        setReviewTextValue(event.target.value)
    }
    function listenForEnterKey(event) {
        if (event.key === 'Enter') {
            event.preventDefault();//this stops a new line appearing when the enter key is pressed
            handleSubmit();
        }

    }

    async function handleSubmit() {
        //THIS WILL STOP ANY FURTHER SUBMITTING WHEN SUBMITTING
        if (isSubmitting) {
            return;
        }
        if (rating === 0 || reviewTextValue === '' || reviewTextValue.length < 10) {
            //alert("Please select a rating first");
            return;
        }

        setIsSubmitting(true)
        try {
            await axios.post("http://localhost:3000/api/reviews", {
                hostel_id: hostelId,
                rating: rating,
                review_text: reviewTextValue
            });

            //console.log("Server response:", response.data, response.status);
            setRating(0)
            setReviewTextValue('')
            setIsSubmitting(false)
            loadingReviews()//THIS FUNCTION WILL RELOAD THE REVIEWS TO SHOW THE NEWLY ADDED REVIEW

        } catch (error) {
            console.log("Error submitting review:", error.response?.data || error.message);
        }
    }

    // function toggleReviewsDisplay() {
    //     if (toggleReview === 'open') {
    //         setToggleReview('close')
    //         return;
    //     }
    //     setToggleReview('open')
    // }


    async function loadingReviews() {
        try {
            const response = await axios.get(`http://localhost:3000/api/reviews/${hostelId}`)
            if (response.data.length === 0) {
                setReviewsResonse(["no reviews"])
                return;
            }
            setReviewsResonse(response.data)

        } catch (error) {
            console.log("Error Retrieving review:", error.response?.data || error.message);
        }
    }

    useEffect(() => {
        loadingReviews()
    }, [])

    return (
        <>
            <title>View Details | Episilion Hostels</title>
            <PageHeader navlink={navlink} setNavLink={setNavLink} />


            <section className="more-details js-more-details">
                <div className="more-details-container">

                    {originalHostelCardData.map((hostel) => {
                        if (hostel.id === hostelId) {
                            return (
                                <>
                                    <div className="hostel-image-card">
                                        <img src={hostel.image} alt={`${hostel.name} image`}></img>
                                        <div className="overlay">
                                            <span className="overlay-text">{hostel.name}</span>
                                        </div>
                                    </div>

                                    <div className="hostel-information-contaniner">
                                        <div className="location-details">
                                            <div className='location-header-and-compare-hostel-button'>
                                                <h2 className="font-header">Location</h2>
                                                <div className='more-details-hostel-type'>{hostel.type}</div>
                                                <button className='compare-button' onClick={() => comapareHostels(hostel.id)}><img src={compareImage} alt="Compare Button" /></button>
                                            </div>

                                            <p className="font-paragraph js-location-paragraph">
                                                {hostel.location.directions}
                                                <p className="font-paragraph js-distance-from-campus">{`Its about ${hostel.location.distanceToCampusMinutes} minute${hostel.location.distanceToCampusMinutes > 1 ? 's' : ''} walk from campus`}</p>
                                            </p>

                                            <div className="view-location-container">
                                                <button className="view-location js-view-location" onClick={() => showHostelLocationOnMap(setClose, setActivate, originalHostelCardData, hostelId, setGoogleMapSrc)}>View Location</button>
                                                <button className="view-location js-get-directions" onClick={() => getDirectionsOnMap(originalHostelCardData, hostelId)} >Get Directions</button>
                                            </div>
                                            <div className={`overlay-background ${activate ? 'activate' : ''}`}>
                                                <div className='map-modal'>
                                                    <div className={`iframe-container ${close ? 'close' : ''}`}>
                                                        <div className='close-button'><img src={closeMapImage} alt="" className='close-image' onClick={closeMap} /></div>
                                                        <iframe
                                                            src={googleMapSrc}
                                                            className='iframe'
                                                            frameborder="1"
                                                            loading='lazy'
                                                            title='Hostel Location'></iframe>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    <div className="price-and-payment">
                                        <h2 className="font-header">Payment Details</h2>
                                        <p className="font-paragraph js-minimum-price">{`Minimum Price : ${hostel.pricing.priceMin}/${hostel.pricing.billingPeriod}`}</p>
                                        <p className="font-paragraph js-maximum-price">{`Maximum: ${hostel.pricing.priceMax}/${hostel.pricing.billingPeriod}`}</p>
                                        <p className="font-paragraph js-installment-allowed">{`${hostel.pricing.installmentAllowed ? 'Installment Is Allowed' : 'Installment Is Not Allowed'}`}</p>
                                        <p className="font-paragraph additional-fees-header">Additional Fees</p>
                                        <ul className="additional-fees js-additional-fees">
                                            <li class="special-font">Utilities ({hostel.pricing.additionalFees.utilities})</li>
                                            <li class="special-font">Maintenance ({hostel.pricing.additionalFees.maintenance})</li>
                                            <li class="special-font">Caution Deposit ({hostel.pricing.additionalFees.cautionDeposit})</li>
                                        </ul>
                                        <p className="font-paragraph js-refund-policy">{hostel.pricing.refundPolicy}</p>
                                    </div>

                                    <div className="room-information">
                                        <h2 className="font-header">Room Information</h2>
                                        <ul className="types-of-rooms js-rooms-types">
                                            {hostel.rooms.types.map((room) => {
                                                return (
                                                    <li className='special-font'>{room.type}<p>Price {room.price}</p></li>
                                                )
                                            })}
                                        </ul>
                                    </div>

                                    <div className="facilities-and-amenities">
                                        <h2 id="facilities-and-amenities-header" className="font-header">Facilities And Amenities</h2>
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
                                                hostel.furnishing.map((funish) => {
                                                    return (
                                                        <li class="special-font">{funish}</li>
                                                    )

                                                })
                                            }
                                        </ul>
                                    </div><br></br>

                                    <div className="rules-and-contact-container">
                                        <div className="rules-and-policies">
                                            <h2 className="font-header">Rules And Regulations</h2>
                                            <ul className="grid rules-and-policies-style js-rules-and-regulations">
                                                {hostel.rules.map((rule) => {
                                                    return (
                                                        <li class="special-font">{rule}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <div className="info-container">
                                            <div className="management-contact">
                                                <h2 className="font-header">Contacts</h2>
                                                <Link className="contact-item js-phone-number-link" href={hostel.contact.phone}>
                                                    <img src={Phone} alt="Phone"></img>
                                                    <p className="font-paragraph js-phone-number">
                                                        {hostel.contact.phone}
                                                    </p>
                                                </Link>
                                                <a className="contact-item js-whatsApp-number-link" href={`https://wa.me/${hostel.contact.whatsapp}`}>
                                                    <img src={Whatsapp} alt="WhatsApp"></img>
                                                    <p className="font-paragraph js-whatsapp-number">
                                                        {hostel.contact.whatsapp}
                                                    </p>
                                                </a>
                                                <a className="contact-item js-email-address-link" href={`https://${hostel.contact.email}`}>
                                                    <img src={Email} alt="Email"></img>
                                                    <p className="font-paragraph js-email-address">
                                                        {hostel.contact.email}
                                                    </p>
                                                </a>
                                                <div className="contact-item">
                                                    <img src={Manager} alt="manager-name"></img>
                                                    <p className="font-paragraph js-manager-name">
                                                        {hostel.contact.managerName}
                                                    </p>
                                                </div>
                                                <div className="contact-item">
                                                    <img src={Clock} alt="clock"></img>
                                                    <p className="font-paragraph js-office-hours">
                                                        {hostel.contact.officeHours}
                                                    </p>
                                                </div>
                                                {hostel.contact.website != "" ? <a className="contact-item js-email-address-link" href={`https://${hostel.contact.email}`}>
                                                    <img src={websImage} alt="website"></img>
                                                    <p className="font-paragraph js-email-address">
                                                        {hostel.contact.website}
                                                    </p>
                                                </a> : ""}

                                            </div>
                                        </div>
                                    </div>

                                    <div className="media-information-cards js-media-information-cards">
                                        {hostel.media.images.map((image) => {

                                            return (
                                                <div class="hostel-room-type-image">
                                                    <a href={image.url}>
                                                        <img class="hostel-room" src={image.url} alt={image.type}></img>
                                                    </a>
                                                    <div class="hostel-room-type-overlay">
                                                        <span class="hostel-room-type-overlay-text">{image.type}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <video class="hostel-room" muted loop controls src={hostel.media.video} poster={hostel.image}></video>
                                    </div>
                                </>
                            )
                        }
                    })}
                </div>
            </section>

            <div className='ratings-and-reviews-section'>
                <h2 className='ratings-and-reviews-header' >Leave a Review</h2>
                <h2 className='ratings-and-reviews-header minitext' >Share your experience at {hostelName}</h2>
                <p className='your-rating-text'>Your Rating</p>
                <div className='star-container'>

                    {[1, 2, 3, 4, 5].map((star) => (
                        <img
                            key={star}
                            value={star}
                            className='star'
                            src={star <= rating ? fullStar : emptyStar}
                            alt={`star-${star}`}
                            onClick={() => handleStarClick(star)}
                        />
                    ))}
                </div>
                <div className='reviews-input'>
                    {/* <input type="text" name="" id="" /> */}
                    <textarea maxLength={100} placeholder='Share your honest experience - what did you love? What could be improved' onChange={userTypedReview} value={reviewTextValue} onKeyDown={listenForEnterKey}></textarea>
                </div>
                <div className='review-submit-container'>
                    <button onClick={handleSubmit} className={`review-submit-button  ${!isSubmitting ? 'notSubmitting' : 'submitting'}`}>{!isSubmitting ? 'Submit Review' : 'Submitting Review'}</button>
                </div>
            </div>

            {/* <div className='show-reviews-button' onClick={toggleReviewsDisplay}><button>{toggleReview === 'close' ? 'Show Reviews' : 'Hide Reviews'}</button></div> */}
            <div className={`reviews-and-ratings-display `}>
                {reviewsResponse.slice(0, 5).map((item) => (
                    <Reviews key={item.reviewId} item={item}></Reviews>
                ))}
            </div>
            <SiteFooter />
        </>
    )
}
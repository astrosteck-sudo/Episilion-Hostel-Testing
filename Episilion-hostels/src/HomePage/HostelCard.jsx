import { useNavigate } from "react-router-dom";
import { getDistance } from 'geolib';


export function HostelCard({ hostel }) {

    const navigate = useNavigate();
    // function showHostelId(parameter){
    //     window.location.href = `moreDetails?hostelId=${parameter}`;
    // }
    function showHostelId(parameter) {
        navigate(`/moreDetails?hostelId=${parameter}`);
    }

    return (
        <div className="hostel-card">
            <div className="image-container">
                <img id="hostel-card-image" src={hostel.image} alt="hostel-image"></img>
                <div className="hostel-rating-text">
                    <span className="overlay-text-hostel-rating">{hostel.reviews.averageRating}({hostel.reviews.totalReviews})</span><br></br>
                </div>
                <div className="hostel-type-text">
                    <span className="overlay-text-hostel-type">{hostel.type}</span>
                </div>
            </div>
            <table border="0" width="100%">
                <tr width="20px">
                    <td className="td-vetical"><p id="hostel-name">{hostel.name}</p></td>
                    <td className="td-vetical"><p id="hostel-price">${hostel.pricing.priceMin}</p></td>
                </tr>
                <tr width="20px">
                    <td colSpan="2" className="td-vetical">
                        <p id="hostel-distace">{((getDistance(
                            { latitude: 5.660969, longitude: -0.166374 },
                            { latitude: hostel.location.latitude, longitude: hostel.location.longitude })) / 1000).toFixed(1)}
                            km from campus
                        </p></td>
                </tr>
                <tr>
                    <td colSpan="2" ><p id="hostel-perks">{hostel.hostelPerks}</p></td>
                </tr>
            </table>
            <p><button className="view-more-details js-view-more-details" onClick={() => showHostelId(hostel.id)}>View Details</button></p>
        </div>
    )
}
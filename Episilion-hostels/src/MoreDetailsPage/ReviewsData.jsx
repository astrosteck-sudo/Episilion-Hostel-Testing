//import { useState } from 'react';
import fullStar from '../assets/icons/favorite.png';
import dayjs from 'dayjs';
import profilePicture from '../assets/icons/user.png';

export function Reviews({ item }) {
    console.log("Review item:", item); // Debugging log to check the structure of the review item


    if (item === 'no reviews') {
        return <p className='no-review-text'>No reviews</p>
    }

    //console.log("Review item:", item); // Debugging log to check the structure of the review item

    return (

        <>
            <div className='user-review-wrapper'>
                <div className='rating-and-timestamp-container'>
                    <div className='review-source'>
                        <table border="0">
                            <tr>
                                <td rowspan="2" className='profile-picture'><img src={profilePicture} alt="" /></td>
                                <td className='profile-name'>{item.name}</td>
                            </tr>
                            <tr>
                                <td><div className='time-stamp'><p>{dayjs(item.createdAt).format("MMMM D, YYYY, h:mm A")}</p></div></td>
                            </tr>
                        </table>
                    </div>
                    
                    <div className='users-ratings-display'>
                        {[...Array(item.rating)].map((_, i) => (
                            <img key={i} src={fullStar} alt="star" />
                        ))}
                    </div>
                </div>
                <div className='users-review-display'>
                    <div>{item.reviewText}</div>
                </div>
            </div>

        </>
    )
}
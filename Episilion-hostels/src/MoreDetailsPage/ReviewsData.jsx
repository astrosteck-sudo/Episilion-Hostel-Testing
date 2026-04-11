//import { useState } from 'react';
import fullStar from '../assets/icons/star.png';
import dayjs from 'dayjs';

export function Reviews({ item }) {
    return (

        <>
            <div className='rating-and-timestamp-container'>
                <div className='users-ratings-display'>
                    {[...Array(item.rating)].map((_, i) => (
                        <img key={i} src={fullStar} alt="star" />
                    ))}
                </div>
                <div className='time-stamp'><p>{dayjs(item.createdAt).format("MMMM D, YYYY, h:mm A")}</p></div>
            </div>
            <div className='users-review-display'>
                <div>{item.reviewText}</div>
            </div>
        </>
    )
}
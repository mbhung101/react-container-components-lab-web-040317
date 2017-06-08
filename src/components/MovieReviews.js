// Code MovieReviews Here
import React from 'react'

const reviewList = ({ reviews }) => (
  <div className="review-list">
    {reviews.map((review)=>{
      return (
        <div className="review">
         <h3> {review.display_title} </h3>
         {review.summary_short}
        </div>
      )
    })}
  </div>
);

reviewList.defaultProps = {reviews: []}
export default reviewList

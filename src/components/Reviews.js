import { useState } from "react";
import Review from "./Review";
import Add from "./Add";

const Reviews = (props) => {
  return (
    <>
    <h1>Review Page</h1>
      <div class="">
        {props.reviews.map((review) => {
          return (
            <Review
              review={review}
              getReviews={props.getReviews}
              setReviews={props.setReviews}
            />
          );
        })}
      </div>
      <Add
        getReviews={props.getReviews}
        setReviews={props.setReviews}
        showReviews={props.showReviews}
      />
    </>
  );
};
export default Reviews;

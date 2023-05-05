import axios from "axios";
import { useState, useEffect } from "react";

const Add = (props) => {
  const [name, setName] = useState();
  const [review, setReview] = useState();
  const [rating, setRating] = useState();
  const [image, setImage] = useState();

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleReview = (event) => {
    setName(event.target.value);
  };
  const handleRating = (event) => {
    setName(event.target.value);
  };
  const handleImage = (event) => {
    setImage(event.target.value);
  };

  const handleAddReview = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/reels", {
        name: name,
        review: review,
        rating: rating,
        image: image,
      })
      .then(() => {
        props.getReviews();
        props.showReview();
      });
  };
  return (
    <>
      <h1>add page</h1>
      <form onSubmit={handleAddReview}>
        <label htmlFor="name"> Name: </label>
        <input type="text" name="name" onChange={handleName} />
        <label htmlFor="review"> Review: </label>
        <input type="text" name="review" onChange={handleReview} />
        <label htmlFor="rating"> Rating: </label>
        <input type="text" name="rating" onChange={handleRating} />
        <label htmlFor="image URL"> Image URL: </label>
        <input type="text" name="image" onChange={handleImage} />
        <input type="submit" value="Add Review" />
      </form>
    </>
  );
};

export default Add;

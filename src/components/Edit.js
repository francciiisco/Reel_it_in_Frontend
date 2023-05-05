import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Edit = (props) => {
  const [newName, setNewName] = useState(props.review.name);
  const [newReview, setNewReview] = useState(props.review.review);
  const [newRating, setNewRating] = useState(props.review.rating);
  const [newImage, setNewImage] = useState(props.review.image);

  const handleNameUpdate = (event) => {
    setNewName(event.target.value);
  };
  const handleReviewUpdate = (event) => {
    setNewName(event.target.value);
  };
  const handleRatingUpdate = (event) => {
    setNewName(event.target.value);
  };
  const handleImageUpdate = (event) => {
    setNewName(event.target.value);
  };

  //==Edit Function
  const handleEdit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3000/reels/${props.review._id}`, {
        name: newName,
        review: newReview,
        rating: newRating,
        image: newImage,
      })
      .then(() => {
        props.getReviews();
        props.setEdit(false);
      });
  };

  //==Delete Function for Data
  const handleDeleteReview = (data) => {
    axios.delete(`http://localhost:3000/reels/${data._id}`).then(() => {
      axios.get("http://localhost:3000/reels").then((response) => {
        props.setReviews(response.data);
      });
    });
  };

  return (
    <>
      <form id = 'editReviewForm' onSubmit={handleEdit}>
        <h3>Edit</h3>
        <label htmlFor="name"> Name: </label>
        <input
          type="text"
          name="name"
          placeholder={props.review.name}
          onChange={handleNameUpdate}
        />
        <label htmlFor="review"> Review: </label>
        <input
          type="text"
          name="review"
          placeholder={props.review.review}
          onChange={handleReviewUpdate}
        />
        <label htmlFor="rating"> Rating: </label>
        <input
          type="text"
          name="rating"
          placeholder={props.review.rating}
          onChange={handleRatingUpdate}
        />
        <label htmlFor="image"> Image URL: </label>
        <input
          type="text"
          name="image"
          placeholder={props.review.image}
          onChange={handleImageUpdate}
        />
      </form>

      <div class="">
        <button type="submit" form="editReviewForm">
          Update
        </button>
        <button
          onClick={() => {
            handleDeleteReview(props.review);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            props.toggleEdit();
          }}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default Edit;

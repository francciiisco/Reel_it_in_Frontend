import axios from "axios";
import { useState, useEffect } from "react";
import Edit from './Edit'

const Review = (props) => {
    const [edit, setEdit] = useState(false)

    const toggleEdit = () => {
        setEdit(!edit)
    }

    return(
        <div>
            {edit ?
                <>
                    <Edit
                        setReviews = {props.setReviews}
                        getReviews = {props.getReviews}
                        review = {props.review}
                        toggleEdit = {toggleEdit}
                        setEdit = {setEdit}
                    /> 
                </>
                :
                <div class=''>
                    <div class=''>
                    <h4>{props.review.name}</h4>
                    <p>Review: {props.review.review}</p>
                    <p>Rating: {props.review.rating}</p>
                    <button onClick = {() => {toggleEdit()}}>Edit</button>
                    </div>
                    <div class=''>
                        <img src={props.review.image}></img>
                    </div>
                </div>}
        </div>)
}

export default Review
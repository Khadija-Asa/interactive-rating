import { React, useState } from "react";
import './../styles/rate.css';
import star from './../assets/icon-star.svg';
import phone from './../assets/illustration-thank-you.svg';

const content = {
    maxRating: 5
}

const RatingComponent = ({ num, handler, rating }) => {
    return (
        <button
            type="button"
            className={`card__rating-btn${rating === num ? " active" : ""}`}
            onClick={() => handler(num)}
        >
            {num}
        </button>
    )
}

const Rate = (
    {
        maxRating = content.maxRating
    }
) => {

    const [rating, setRating] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleRating = num => {
        if (rating !== num)
            setRating(num);
    }

    const handleSubmit = () => { setSubmitted(true) };

    const ratingArr = [];
    for (let i = 0; i < maxRating; i++) {
        ratingArr.push(
            <RatingComponent
                num={i + 1}
                key={i}
                handler={handleRating}
                rating={rating}
            />
        )
    }

    return (
        <div className="card__container">
            <div className={`card__content${submitted ? " back" : ""}`}>
                <div className="card__rating">
                    <div className="card__icon-wrapper">
                        <img src={star} alt="icon étoile" aria-hidden="true" className="card__icon" />
                    </div>
                    <div className="card__message">
                        <h2 className="card__title">How did we do?</h2>
                        <p className="card__description">Please let us know how we did with your support request. 
                        All feedback is appreciated to help us improve our offering!</p>
                        <div className="card__rating-wrapper">{ratingArr}</div>
                    </div>
                    <button
                        type="submit"
                        className="card__cta"
                        onClick={handleSubmit}
                        disabled={!rating}
                    >
                        submit
                    </button>
                </div>
                <div className={`card__thanks${submitted ? " active" : ""}`}>
                    <div className="card__illustration-wrapper">
                        <img src={phone} alt="mobile phone illustration" className="card__ilustration" />
                    </div>
                    <div className="card__rating-result-wrapper">
                        <div className="card__rating-result">
                            You selected {rating} out of {content.maxRating}
                        </div>
                    </div>
                    <div className="card__thanks-message">
                        <h2>Thank you!</h2>
                        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rate;
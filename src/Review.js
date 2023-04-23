import React, { useEffect, useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const[index,setIndex]=useState(0);
  const{name,image,job,text}=people[index];
  const min=0;
  const max=people.length-1;

function random() {
  let newIndex= Math.floor(Math.random() * (people.length-1));
  if(newIndex===index){
    newIndex++;
  }
  return newIndex
}

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() => (index > 0 ? setIndex(index - 1) : setIndex(people.length-1))}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() =>
            index < people.length - 1 ? setIndex(index + 1) : setIndex(0)
          }
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="random-btn"
        onClick={()=>setIndex(random())}
      >
        Surprice me
      </button>
    </article>
  );
};

export default Review;

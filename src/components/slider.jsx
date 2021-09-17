import React from "react";

const Slider = ({slideIndex, previousIndex, data, direction}) => {
  if (direction === "right") {
    return(
      <div 
        key={slideIndex}
        className={`slider slider-dir-${direction}`}
      >
        <img
          className="slider-img previous-slide"
          src={`images/${data[previousIndex].image}`}
          alt={data[previousIndex].alt}
        />
        <img
          className="slider-img current-slide"
          src={`images/${data[slideIndex].image}`}
          alt={data[slideIndex].alt}
        />
      </div>
    )
  } else if (direction === "left") {
    return (
      <div 
        key={slideIndex}
        className={`slider slider-dir-${direction}`}
      >
        <img
          className="slider-img current-slide"
          src={`images/${data[slideIndex].image}`}
          alt={data[slideIndex].alt}
        />
        <img
          className="slider-img previous-slide"
          src={`images/${data[previousIndex].image}`}
          alt={data[previousIndex].alt}
        />
      </div>
    )
  } else {
    return (
      <div className={`slider`}>
        <img
          className="slider-img current-slide"
          src={`images/${data[slideIndex].image}`}
          alt={data[slideIndex].alt}
        />
      </div>
    )
  }
}

export default Slider;
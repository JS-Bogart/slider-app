import React from "react";

const Slider = ({slideIndex, previousIndex, data, direction}) => {
  if (direction === "right") {
    return(
      <div className={`slider-${direction}`}>
        <img
          className="previous-slide"
          src={`images/${data[previousIndex].image}`}
          alt={data[previousIndex].alt}
        />
        <img
          className="current-slide"
          src={`images/${data[slideIndex].image}`}
          alt={data[slideIndex].alt}
        />
      </div>
    )
  } else if (direction === "left") {
    return (
      <div className={`slider-${direction}`}>
        <img
          className="current-slide"
          src={`images/${data[slideIndex].image}`}
          alt={data[slideIndex].alt}
        />
        <img
          className="previous-slide"
          src={`images/${data[previousIndex].image}`}
          alt={data[previousIndex].alt}
        />
      </div>
    )
  } else {
    return (
      <div className={`slider-${direction}`}>
        <img
          className="current-slide"
          src={`images/${data[slideIndex].image}`}
          alt={data[slideIndex].alt}
        />
      </div>
    )
  }
}

export default Slider;
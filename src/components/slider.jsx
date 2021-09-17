import React from "react";

const Slider = ({slideIndex, previousIndex, data, direction, openModal}) => {
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
          onClick={() => openModal(previousIndex)}
        />
        <img
          className="slider-img current-slide"
          src={`images/${data[slideIndex].image}`}
          alt={data[slideIndex].alt}
          onClick={() => openModal(slideIndex)}
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
          onClick={() => openModal(slideIndex)}
        />
        <img
          className="slider-img previous-slide"
          src={`images/${data[previousIndex].image}`}
          alt={data[previousIndex].alt}
          onClick={() => openModal(previousIndex)}
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
          onClick={() => openModal(slideIndex)}
        />
      </div>
    )
  }
}

export default Slider;
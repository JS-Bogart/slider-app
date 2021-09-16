import React, {useState, useEffect} from "react";
import Arrow from "./arrow";
import data from "../assets/slider-data.json"

const Slider = () => {

  const [sliderData, setSliderData] = useState(data);
  const [slideIndex, setSlideIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(
    <img src={`images/${data[0].image}`} alt={data[0].alt} />
  );
  const [previousSlide, setPreviousSlide] = useState(null);

  useEffect(() => {
    changeSlide();
  }, [slideIndex]);

  const changeIndex = (direction) => {
    const lastIndex = (sliderData.length - 1);
    if (direction === "left") {
      const shouldResetIndex = slideIndex === 0;
      const index = shouldResetIndex ? lastIndex : slideIndex - 1;
      setSlideIndex(index);
    } else {
      const shouldResetIndex = slideIndex === lastIndex;
      const index = shouldResetIndex ? 0 : slideIndex + 1;
      setSlideIndex(index);
    }
  }

  const changeSlide = () => {
    setPreviousSlide(currentSlide);
    setCurrentSlide(
      <img 
        src={`images/${data[slideIndex].image}`} 
        alt={data[slideIndex].alt} 
      />
    );
  }

  return(
    <div>
      <header>
        Slider App
      </header>
      <div>
        <Arrow 
          direction="left"
          clickFunction={changeIndex}
          glyph="&#9664;"
        />
        {currentSlide}
        <Arrow
          direction="right"
          clickFunction={changeIndex}
          glyph="&#9654;"
        />
      </div>
    </div>
  )
}

export default Slider;
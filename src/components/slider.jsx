import React, {useState, useEffect} from "react";
import Arrow from "./arrow";
import data from "../assets/slider-data.json"
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";

const Slider = () => {

  const [sliderData, setSliderData] = useState(data);
  const [slideIndex, setSlideIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(null);
  console.log(sliderData.length);

  useEffect(() => {

  }, [slideIndex]);

  const changeSlide = (direction) => {
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

  return(
    <div>
      <header>
        Slider App
      </header>
      <div>
        <Arrow 
          direction="left"
          clickFunction={changeSlide}
          glyph="&#9664;"
        />

        <Arrow
          direction="right"
          clickFunction={changeSlide}
          glyph="&#9654;"
        />
      </div>
    </div>
  )
}

export default Slider;
import React, {useState, useEffect} from "react";
import data from "../assets/slider-data.json"

const Slider = () => {

  const [sliderData, setSliderData] = useState(data);
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(sliderData);

  return(
    <div>
      <header>
        Slider App
      </header>
      <div>

      </div>
    </div>
  )
}

export default Slider;
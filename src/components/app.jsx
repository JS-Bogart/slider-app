import React, {useState, useEffect} from "react";
import Arrow from "./arrow";
import Slider from "./slider";
import data from "../assets/slider-data.json"
import "../stylesheets/application.scss"

const App = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [direction, setDirection] = useState("start");

  useEffect(() => {
    
  }, [slideIndex]);

  const changeIndex = (direction) => {
    setDirection(direction);
    const lastIndex = (data.length - 1);
    if (direction === "left") {
      const shouldResetIndex = slideIndex === 0;
      const index = shouldResetIndex ? lastIndex : slideIndex - 1;
      setPreviousIndex(slideIndex);
      setSlideIndex(index);
    } else {
      const shouldResetIndex = slideIndex === lastIndex;
      const index = shouldResetIndex ? 0 : slideIndex + 1;
      setPreviousIndex(slideIndex);
      setSlideIndex(index);
    }
  }

  const handleCirle = (index) => {
    setPreviousIndex(slideIndex);
    setSlideIndex(index);
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
        <Slider 
          slideIndex={slideIndex}
          previousIndex={previousIndex}
          data={data}
          direction={direction}
        />
        <Arrow
          direction="right"
          clickFunction={changeIndex}
          glyph="&#9654;"
        />
      </div>
      <div>
        {data.map((item, index) => (
          (index === slideIndex) ?
            <p 
              key={`${item.id}`}
              className="circle-hl"
              onClick={() => handleCirle(index)}
            >&#9679;</p>
          :
            <p 
              key={`${item.id}`}
              className="circle"
              onClick={() => handleCirle(index)}
            >&#9679;</p>
        ))}
      </div>
    </div>
  )
}

export default App;
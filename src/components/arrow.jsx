import React from 'react';

//takes in a glyph for the correctly pointing arrow, a function to update the
//slideIndex, and a direction to pass to the function
const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    className="slide-arrow"
    onClick={() => clickFunction(direction)}>
    {glyph}
  </div>
);

export default Arrow;
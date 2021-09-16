import React from 'react';

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    className={`slide-arrow-${direction}`}
    onClick={clickFunction(direction)}>
    {glyph}
  </div>
);

export default Arrow;
import React from 'react';

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    className={`slide-arrow arrow-dir-${direction}`}
    onClick={() => clickFunction(direction)}>
    {glyph}
  </div>
);

export default Arrow;
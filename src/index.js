import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/slider';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Slider />, root);
});
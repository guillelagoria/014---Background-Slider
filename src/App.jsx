import { useState } from "react";
import "./App.css";
import React from "react";

export const App = () => {
  const [active, setActive] = useState([true, false, false, false, false]);
  const [counter, setCounter] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
    "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
    "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  ];

  const changeSlide = (activeSlide) => {
    const newArray = active.map((b, i) => {
      if (activeSlide === i) {
        return !b;
      } else {
        return false;
      }
    });
    setActive(newArray);
  };

  const handleClickAdd = (index) => {
    let newActiveSlide = index + 1;
    if (newActiveSlide > slides.length - 1) {
      newActiveSlide = 0;
    }
    setCounter(newActiveSlide);
    changeSlide(newActiveSlide);
  };

  const handleClickSubs = (index) => {
    let newActiveSlide = index - 1;
    if (newActiveSlide < 0) {
      newActiveSlide = slides.length - 1;
    }
    setCounter(newActiveSlide);

    changeSlide(newActiveSlide);
  };

  return (
    <>
      <body>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${slides[counter]})`,
          }}
        >
          <div className="background-blur"></div>
          <div className="slider-container">
            {active.map((act, i) => (
              <div
                key={i}
                className={active[i] ? "slide active" : "slide"}
                style={{ backgroundImage: `url(${slides[i]})` }}
              ></div>
            ))}
            <button
              className="arrow left-arrow"
              id="left"
              onClick={() => handleClickSubs(counter)}
            >
              <i className="fas fa-arrow-left"></i>
            </button>

            <button
              className="arrow right-arrow"
              id="right"
              onClick={() => {
                handleClickAdd(counter);
              }}
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </body>
    </>
  );
};

export default App;

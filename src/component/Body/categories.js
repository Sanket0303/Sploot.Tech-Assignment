import React, { useRef }  from "react";
import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
  },
  tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
  },
  mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
  }
};

const Categories = ({selectedFilter, setSelectedFilter, result}) => {
  const sliderRef = useRef(null);

  const handleLeftArrowClick = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };

  const handleRightArrowClick = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
  };
  return (
    <div className="filter-div">
      <div className="slider-container" ref={sliderRef}>
      {/* <Carousel 
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        centerMode={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      > */}
        {result && result.map((item, i) => (
          <div
            key={i}
            className={`links-box ${i === selectedFilter && "selected-box"}`}
            onClick={() => {
              setSelectedFilter(i);
            }}
          >
            <img src={item.imageUrl} className="links-img" alt="none"/>
            <p
              className={`links-label ${i === selectedFilter && "selected-label"}`}
            >
              {item.name}
            </p>
          </div>
        ))}
      {/* </Carousel> */}
      </div>
      <button className="arrow-button left" onClick={handleLeftArrowClick}>
        &#8249;
      </button>
      <button className="arrow-button right" onClick={handleRightArrowClick}>
        &#8250;
      </button>
    </div>
  )
}

export default Categories

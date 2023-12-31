import React, { useState, useRef, useEffect } from "react";
import "./Carousel.scss";
import { useData } from "../../contexts/DataProvider";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const useTilt = (animationDuration = "150ms") => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    // used to unify the touch and click cases
    const unify = (e) => (e.changedTouches ? e.changedTouches[0] : e);

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleEnterEvent = () => {
      el.style.transition = `transform ${animationDuration} ease-out`;
    };

    const handleMoveEvent = (e) => {
      e.preventDefault();

      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = unify(e).clientX;
      state.mouseY = unify(e).clientY;

      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px.toFixed(2));
      el.style.setProperty("--py", py.toFixed(2));
    };

    const handleEndEvent = () => {
      el.style.setProperty("--px", 0.5);
      el.style.setProperty("--py", 0.5);
      el.style.transition = `transform ${animationDuration} ease-in`;
    };

    el.addEventListener("mouseenter", handleEnterEvent);
    el.addEventListener("mousemove", handleMoveEvent);
    el.addEventListener("mouseleave", handleEndEvent);
    el.addEventListener("touchstart", handleEnterEvent);
    el.addEventListener("touchmove", handleMoveEvent);
    el.addEventListener("touchend", handleEndEvent);

    return () => {
      el.removeEventListener("mouseenter", handleEnterEvent);
      el.removeEventListener("mousemove", handleMoveEvent);
      el.removeEventListener("mouseleave", handleEndEvent);
      el.removeEventListener("touchstart", handleEnterEvent);
      el.removeEventListener("touchmove", handleMoveEvent);
      el.removeEventListener("touchend", handleEndEvent);
    };
  }, [animationDuration]);

  return ref;
};

const Slide = ({
  image,
  title,
  subtitle,
  description,
  offset,
  isPageBackground,
}) => {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      {isPageBackground && (
        <div
          className="slideBackground"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />
      )}
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <div className="slideContentInner">
          {title && (
            <h2 className="slideTitle" dir="auto">
              {title}
            </h2>
          )}
          {subtitle && (
            <h3 className="slideSubtitle" dir="auto">
              {subtitle}
            </h3>
          )}
          {description && (
            <p className="slideDescription" dir="auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Carousel = ({ isPageBackground }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const { state } = useData();
  const [trend, setTrend] = useState([]);
  const { allProductsFromApi } = state;

  const handlePrevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? trend.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % trend.length);
  };
  useEffect(() => {
    setTrend(allProductsFromApi.filter((product) => product.trending));
  }, []);

  return (
    <section className="slidesWrapper">
      <div className="slides">
        <span
          className="prevSlideBtn"
          onClick={handlePrevSlide}
          style={{ cursor: "pointer", color: "black" }}
        >
          <ArrowBackIosNewIcon fontSize="large" />
        </span>

        {[...trend, ...trend, ...trend].map((slide, i) => {
          let offset = trend.length + (slideIndex - i);

          if (typeof slide === "string") {
            return (
              <Slide
                image={slide}
                offset={offset}
                isPageBackground={isPageBackground}
                key={i}
              />
            );
          } else {
            return (
              <Slide
                image={slide.img}
                title={slide.name}
                subtitle={slide.subtitle}
                offset={offset}
                isPageBackground={isPageBackground}
                key={i}
              />
            );
          }
        })}
        <span
          className="nextSlideBtn"
          onClick={handleNextSlide}
          style={{ cursor: "pointer", color: "black" }}
        >
          <ArrowForwardIosIcon fontSize="large" />
        </span>
      </div>
    </section>
  );
};

const ImageGallery = () => <Carousel isPageBackground />;

export default ImageGallery;

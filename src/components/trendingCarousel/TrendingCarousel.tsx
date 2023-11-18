import { useState } from "react";
import Slider from "react-slick";
import { IMovie } from "../../utils/types";

import styles from "./trendingCarousel.module.scss";

interface TrendingCarouselProps {
  videos: Array<IMovie>;
  onMovieClick: (value: IMovie) => void;
}

const TrendingCarousel = ({ videos, onMovieClick }: TrendingCarouselProps) => {
  const [disableClick, setDisableClick] = useState(false);

  const handleMovieClick = (movie: IMovie): void => {
    if (!disableClick) {
      onMovieClick(movie);
    }
  };

  const handleBeforeChange = (): void => {
    setDisableClick(true);
  };

  const handleAfterChange = (): void => {
    setDisableClick(false);
  };

  const settings = {
    slidesToShow: 8,
    draggable: true,
    swipeToSlide: true,
    arrows: false,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
  };

  return (
    <div className={styles.trendingVideosContainer}>
      <h1 className={styles.title}>Trending Now</h1>
      <Slider className={styles.slider} {...settings}>
        {videos.map((movie) => (
          <div key={movie.Id} onClick={() => handleMovieClick(movie)}>
            <img src={`/${movie.CoverImage}`} alt={movie.Title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingCarousel;

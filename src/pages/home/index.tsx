import { useState, useEffect } from "react";
import FeaturedVideo from "../../components/featuredVideo";
import styles from "./homePage.module.scss";
import TrendingCarousel from "../../components/trendingCarousel/TrendingCarousel";
import { IMovie } from "../../utils/types";
import { defaultVideo } from "../../utils/constants";
import Loader from "../../components/loader";
import { sortMoviesByDate } from "../../utils/helpers/sortMoviesByDate";
import { moveMovieToFirstIndex } from "../../utils/helpers/moveMovieToFirstIndex";

export default function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState<IMovie | null>(null);
  const [trendingVideos, setTrendingVideos] = useState<Array<IMovie>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading((prev) => (prev = true));
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        let sortedMovies: Array<IMovie> = sortMoviesByDate(data.TrendingNow);

        const lastChackedMovie = localStorage?.getItem("lastCheckedMovie");

        if (lastChackedMovie) {
          const lastChackedVideo = JSON.parse(lastChackedMovie);
          setSelectedVideo(lastChackedVideo);

          sortedMovies = moveMovieToFirstIndex(
            sortedMovies,
            lastChackedVideo.Id
          );
        } else {
          setSelectedVideo(defaultVideo);
          sortedMovies = moveMovieToFirstIndex(sortedMovies, defaultVideo.Id);
        }
        setTrendingVideos(sortedMovies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading((prev) => (prev = false));
    };

    getData();
  }, []);

  const handleMovieViewed = (movie: IMovie): void => {
    setSelectedVideo(movie);
    localStorage.setItem("lastCheckedMovie", JSON.stringify(movie));
  };

  return (
    <div className={styles.homePage}>
      {!isLoading && selectedVideo ? (
        <>
          <FeaturedVideo video={selectedVideo} key={selectedVideo.Id} />
          <TrendingCarousel
            videos={trendingVideos}
            onMovieClick={handleMovieViewed}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

import { useState } from "react";
import { formatDuration } from "../../utils/helpers/formatDuration";
import { getDataYear } from "../../utils/helpers/getDataYear";

import styles from "./featuredVideo.module.scss";

interface FeaturedVideoProps {
  video: {
    Id: string;
    Title: string;
    CoverImage: string;
    TitleImage: string;
    Date: string;
    ReleaseYear: string;
    MpaRating: string;
    Category: string;
    Duration: string;
    VideoUrl: string;
    Description: string;
  };
}

export default function FeaturedVideo({ video }: FeaturedVideoProps) {
  const [isVidePlayed, setIsVideoPlayed] = useState<boolean>(false);

  return (
    <section className={styles.featuredVideoContainer}>
      <div className={styles.infoContainer}>
        <h2 className={styles.grayTitle}>MOVIE</h2>
        <h1 className={styles.filmTitle}>{video.Title}</h1>
        <div className={styles.filmInfoSection}>
          <span>{getDataYear(video.Date)}</span>
          <span>{video.MpaRating}</span>
          <span>{formatDuration(Number(video.Duration))}</span>
        </div>
        <p className={styles.filmDescription}>{video.Description}</p>
        <div className={styles.btnSection}>
          <button
            className={styles.playBtn}
            onClick={() => setIsVideoPlayed((prev) => !prev)}
          >
            <img src="/icons/play.svg" />
            Play
          </button>
          <button className={styles.moreInfoBtn}>More Info</button>
        </div>
      </div>
      {isVidePlayed && video.VideoUrl ? (
        <video
          className={`${styles.backgroundContent} ${styles.video}`}
          autoPlay
          muted
          loop
        >
          <source src={video.VideoUrl} type="video/webm" />
        </video>
      ) : (
        <img
          src={`/${video.CoverImage}`}
          className={styles.backgroundContent}
        />
      )}
    </section>
  );
}

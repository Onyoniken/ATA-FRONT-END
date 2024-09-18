import React from 'react';
import styles from './Motivation.module.css';
import sideImg from "../../assets/Asset_5-removebg-preview-l.png";
import sideLeft from "../../assets/Asset_5-removebg-preview.png";

function Motivation() {
  const videoId = '2-VKC8g2u1Y'; // Replace with video ID if needed
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div id="motivation" className={styles.container}>
      <img
        className="absolute bottom-4 left-0 w-20 h-40 object-cover opacity-75"
        src={sideImg}
        alt="Left Decoration"
      />
      <img
        className="absolute top-4 right-0 w-28 h-40 object-cover opacity-75"
        src={sideLeft}
        alt="Right Decoration"
      />
      <div className={styles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src={youtubeUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Motivation to Code"
        ></iframe>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.paragraph}>
          Coding opens doors to a world of creativity and problem-solving. It
          allows you to build the future and turn your ideas into reality.
          Don't be afraid to start, embrace the challenges, and enjoy the
          process of learning and creating!
        </p>
        <p className={styles.quote}>
          "The best way to predict the future is to invent it." – Alan Kay
        </p>
      </div>
    </div>
  );
}

export default Motivation;

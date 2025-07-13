'use client';

import { useEffect, useRef } from 'react';
import styles from './YouTubeShorts.module.css';

export default function SilentLoopingShorts() {
  const players = useRef({});

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      // Player 1
      players.current.player1 = new window.YT.Player('player1', {
        videoId: 'c3YCBiGu02E',
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          playlist: 'c3YCBiGu02E', // Needed for loop to work
          mute: 1,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
        },
        events: {
          onReady: (e) => e.target.playVideo(),
        },
      });

      // Player 2
      players.current.player2 = new window.YT.Player('player2', {
        videoId: 'Rl4gHAwp--Y',
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          playlist: 'Rl4gHAwp--Y',
          mute: 1,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
        },
        events: {
          onReady: (e) => e.target.playVideo(),
        },
      });
    };

    return () => {
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  return (
    <div className={styles['shorts-wrapper']}>
      <div className={styles['short-container']}>
        <div id="player1" className={styles['short-iframe']}></div>
      </div>
      <div className={styles['short-container']}>
        <div id="player2" className={styles['short-iframe']}></div>
      </div>
    </div>
  );
}

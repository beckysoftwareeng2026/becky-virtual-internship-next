"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  audioLink: string;
  title: string;
};

export default function AudioPlayer({ audioLink, title }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  function formatTime(time: number) {
    if (!time || Number.isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  }

  function skip(seconds: number) {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime += seconds;
  }

  function handleSeek(e: React.ChangeEvent<HTMLInputElement>) {
    const audio = audioRef.current;
    if (!audio) return;

    const value = Number(e.target.value);
    audio.currentTime = value;
    setCurrentTime(value);
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    function handleTimeUpdate() {
      setCurrentTime(audio!.currentTime);
    }

    function handleLoadedMetadata() {
      setDuration(audio!.duration);
    }

    function handleEnded() {
      setIsPlaying(false);
    }

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={audioLink} />

      <div className="audio-player__top">
        <p>{title}</p>
      </div>

      <div className="audio-player__controls">
        <button type="button" onClick={() => skip(-10)}>
          ⏪ 10
        </button>

        <button
          type="button"
          className="audio-player__play"
          onClick={togglePlay}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <button type="button" onClick={() => skip(10)}>
          10 ⏩
        </button>
      </div>

      <div className="audio-player__progress">
        <span>{formatTime(currentTime)}</span>

        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
        />

        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}


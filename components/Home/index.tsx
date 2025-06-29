"use client";
import React, { useEffect, useRef, useState } from "react";

 const VideoSection = () => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && !hasInteracted) {
          setTimeout(() => {
            videoRef.current?.play();
            setIsPlaying(true);
          }, 500);
        }
      },
      {
        threshold: 0.7,
      }
    );
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [hasInteracted]);
  
  const handleVideoClick = ()=>{
    setHasInteracted(true);
    if (videoRef.current) {
        if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        }
        else {
            videoRef.current.play();
            videoRef.current.playbackRate = 0.5;
        setIsPlaying(true);
        }
  }
}

  const handleMouseEnter = () => {
    if (videoRef.current  && !hasInteracted && !isPlaying) {videoRef.current?.play();setIsPlaying(true); videoRef.current.playbackRate = 0.5;}
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !hasInteracted && isPlaying) {videoRef.current?.pause();setIsPlaying(false);}
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleVideoClick}>
      <video
        muted
        loop
        playsInline
        ref={videoRef}
        className="w-full h-[250px] sm:h-[450px] lg:h-[500px] object-cover transition-all duration-300 group-hover:scale-[1.02]"
      >
        <source src="/roses.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );

}

export default VideoSection;
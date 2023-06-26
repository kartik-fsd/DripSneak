import React from "react";
import ReactPlayer from "react-player";
import "./CradSection.css";
import Tilt from "react-parallax-tilt";
import video from "/assets/videos/hero-video-1.mp4";
import video2 from "/assets/videos/hero-video-2.mp4";
import video3 from "/assets/videos/hero-video-3.mp4";
import video4 from "/assets/videos/hero-video-4.mp4";
import { useNavigate } from "react-router-dom";

export const VideosSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="video-container">
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <ReactPlayer
            onClick={() => {
              scrollTo(0, 0);
              navigate("/product-details/26");
            }}
            url={video}
            playing
            playbackRate={1.15}
            muted
            loop
            controls={false}
            width="100%"
            margin="4px 0"
            padding="0px"
            height="119.9%"
          />

          <h3>Aether Ultra Pro</h3>
          <span className="notch"></span>
        </Tilt>{" "}
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <ReactPlayer
            onClick={() => {
              scrollTo(0, 0);
              navigate("/product-details/39");
            }}
            url={video2}
            playing
            playbackRate={1.6}
            muted
            loop
            controls={false}
            width="100%"
            margin="4px 0"
            padding="0px"
            height="112.65%"
          />

          <h3>Vanguard Accelerate</h3>
          <span className="notch"></span>
        </Tilt>
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <ReactPlayer
            onClick={() => navigate("/product-details/50")}
            url={video3}
            playing
            playbackRate={2.8}
            muted
            loop
            controls={false}
            width="100%"
            margin="4px 0"
            padding="0px"
            height="119.9%"
          />

          <h3>Luminary Synthesis</h3>
          <span className="notch"></span>
        </Tilt>
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          {" "}
          <ReactPlayer
            onClick={() => {
              scrollTo(0, 0);
              navigate("/product-details/76");
            }}
            url={video4}
            playing
            playbackRate={1}
            muted
            loop
            controls={false}
            width="100%"
            margin="4px 0"
            padding="0px"
            height="119.8%"
          />
          <h3>Ascend Quantum</h3>
          <span className="notch"></span>
        </Tilt>
      </div>
    </>
  );
};

import React from "react";
import './Gallery.css'
function Gallery() {
  return (
    <div className="gallery-content">
      <div className="main-video">
        <div className="video-card">
          <h2 className="video-heading">Our Sunday Service</h2>
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/KuTp3LXz5c4?si=hK0LjISVOBkIBU1_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="row-videos">
        <div className="video-card">
          <h2 className="video-heading">Our Latest Annual Convention</h2>
          <div className="iframe-container">
            <iframe
              className="youtube-video"
              src="https://www.youtube.com/embed/CE4oyg34aZA?si=ub6LwJcwSvb1THAo"
              title="Annual Convention"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="video-card">
          <h2 className="video-heading">Womens Meeting 2025-2026</h2>
          <div className="iframe-container">
            <iframe
              className="youtube-video"
              src="https://www.youtube.com/embed/FCfdWx2e7ow?si=kgwOn3kekhgrhIbv"
              title="Womens Meeting"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="row-videos">
        <div className="video-card">
          <h2 className="video-heading">Youth Festival 2025-2026</h2>
          <div className="iframe-container">
            <iframe
              className="youtube-video"
              src="https://www.youtube.com/embed/RglwvE3zSdc?si=e4bLWj737blL0QC5"
              //</div></div>src="https://www.youtube.com/embed/tslTMXvcNXA?si=PCb2lv72niBML8Lk"
              title="Youth Festival"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="video-card">
          <h2 className="video-heading">Children Festival 2025-2026</h2>
          <div className="iframe-container">
            <iframe
              className="youtube-video"
              src="https://www.youtube.com/embed/tmozq3qZzvU?si=tbOVBNqcmpiv8jlI"
              title="Children Festival"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
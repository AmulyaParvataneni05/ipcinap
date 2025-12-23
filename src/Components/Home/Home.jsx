import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import foundersVideo from "../../../Photos/Founders_Video.mp4";
import PMSamuelImg from "../../../Photos/PMSamuel.jpg";
import PTChackoImg from '../../../Photos/PTChacko.png'
import MarySamuelImg from "../../../Photos/MarySamuel.jpg"
import AnnammaChackoImg from "../../../Photos/AnnammaChacko.jpg";
import MarySamuel from "../modals/MarySamuel";
import AnnammaChacko from "../modals/AnnammaChacko";
import AudioModal from "../modals/AudioModal";
import IPCHistory from "../../../Photos/IPC_History_Pastors.pdf";
import Pioneer1 from "../../../Photos/Pastors_Images/Supporting_Pastors/1.jpg"
import Pioneer2 from "../../../Photos/Pastors_Images/Supporting_Pastors/2.jpg"
import Pioneer3 from "../../../Photos/Pastors_Images/Supporting_Pastors/3.jpg"
import Pioneer4 from "../../../Photos/Pastors_Images/Supporting_Pastors/4.jpg"
import Pioneer5 from "../../../Photos/Pastors_Images/Supporting_Pastors/5.jpg"
import Pioneer6 from "../../../Photos/Pastors_Images/Supporting_Pastors/6.jpg"
import Pioneer7 from "../../../Photos/Pastors_Images/Supporting_Pastors/7.jpg"
import Pioneer8 from "../../../Photos/Pastors_Images/Supporting_Pastors/8.jpg"
import Pioneer9 from "../../../Photos/Pastors_Images/Supporting_Pastors/9.jpg"
import Pioneer10 from "../../../Photos/Pastors_Images/Supporting_Pastors/10.jpg"
import Pioneer11 from "../../../Photos/Pastors_Images/Supporting_Pastors/11.jpg"
import Pioneer12 from "../../../Photos/Pastors_Images/Supporting_Pastors/12.jpg"
import Pioneer13 from "../../../Photos/Pastors_Images/Supporting_Pastors/13.jpg"
import Pioneer14 from "../../../Photos/Pastors_Images/Supporting_Pastors/14.jpg"
import Pioneer15 from "../../../Photos/Pastors_Images/Supporting_Pastors/15.jpg"
import Pioneer16 from "../../../Photos/Pastors_Images/Supporting_Pastors/16.jpg"
import Pioneer17 from "../../../Photos/Pastors_Images/Supporting_Pastors/17.jpg"
import Pioneer18 from "../../../Photos/Pastors_Images/Supporting_Pastors/18.jpg"
import Pioneer19 from "../../../Photos/Pastors_Images/Supporting_Pastors/19.jpg"
import './Home.css'
function Home() {
  const navigate = useNavigate();
  const handleClick =()=>{
    sessionStorage.setItem('homeScroll',window.scrollY);
    window.scrollTo(0, 0);
    navigate('/Apostle-P-M-Samuel');
  }
  const handleClick1 =()=>{
    sessionStorage.setItem('homeScroll',window.scrollY);
    window.scrollTo(0, 0);
    navigate('/P-T-Chacko');
  }
  useEffect(() => {
  const savedScroll = sessionStorage.getItem("homeScroll");
  if (savedScroll) {
      window.scrollTo(0, Number(savedScroll));
      sessionStorage.removeItem("homeScroll");
    }
}, []);

  useEffect(() => {
    const rotateRows = () => {
      const rows = document.querySelectorAll(".pioneers-subdiv");
      let index = 0;
      const rotate = () => {
        rows.forEach((row, i) => {
            row.style.opacity = i === index ? "1" : "0";
            row.style.transform = i === index ? "scale(1)" : "scale(0.8)";
          });
          index = (index+1) % rows.length;
        // if (window.innerWidth > 768) {
        //   rows.forEach((row, i) => {
        //     row.style.opacity = i === index ? "1" : "0";
        //     row.style.transform = i === index ? "scale(1)" : "scale(0.8)";
        //   });
        //   index = (index + 1) % rows.length;
        // } else {
        //   rows.forEach((row) => {
        //     row.style.opacity = "1";
        //     row.style.transform = "scale(1)";
        //     row.style.display = "flex";
        //   });
        // }
      };
      const intervalId = setInterval(rotate, 5000);
      return () => clearInterval(intervalId);
    };

    rotateRows();
  }, []);
  const [activeModal, setActiveModal] = useState(null);
  const renderModal = () => {
    switch (activeModal) {
      case 'marysamuel':
        return <MarySamuel onClose={() => setActiveModal(null)} />;
      case 'annammachacko':
        return <AnnammaChacko onClose={() => setActiveModal(null)} />;
      case 'audio':
        return <AudioModal onClose={() => setActiveModal(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="home-body">
      <div className="video-container">
          <video  className="founder-video" muted autoPlay playsInline preload="metadata">
            <source src={foundersVideo} type="video/mp4" />
          </video>
      </div>
      <div className="home-body">
        <h1 className="home-heading">History and Establishment of IPC Andhra Pradesh</h1>
        <h2 className="founders-heading">Meet Our Founders</h2>
      <div className="founders-div">
        <div className="founder-subdiv">
          <div className="founders-card">
              <img
                className="founder-img"
                src={PMSamuelImg}
                alt="P M Samuel"
                onClick={handleClick}
              />
              <h1 className="founder-name">Apostle P. M. Samuel</h1>
              <button className="founder-subpage-btn"
              onClick={handleClick}>UnCover</button>
            </div>
            <div className="founders-card">
            <img
              className="founder-img"
              src={PTChackoImg}
              alt="P T Chacko"
              onClick={handleClick1}
            />
            <h1 className="founder-name">Pastor P. T. Chacko</h1>
            <button className="founder-subpage-btn" onClick={handleClick1}>UnCover</button>
          </div>
        </div>
        <div className="founder-subdiv">
          <div className="founders-card">
            <img
              className="founder-img"
              src={MarySamuelImg}
              alt="Mary Samuel"
              onClick={() => setActiveModal('marysamuel')}
            />
            <h1 className="founder-name">Mary Samuel</h1>
          </div>
          <div className="founders-card">
            <img
              className="founder-img"
              src={AnnammaChackoImg}
              alt="Annamma Chacko"
              onClick={() => setActiveModal('annammachacko')}
            />
            <h1 className="founder-name">Annamma Chacko</h1>
          </div>
        </div>
        </div>
        <div className="container">
          <p className="history-ipc">Apostle P. M. Samuel traveled extensively across villages and towns in Andhra Pradesh, where many were deeply moved by his powerful messages. He chose dedicated young individuals and welcomed them into his home, where they lived together as one family. They witnessed his disciplined lifestyle marked by early morning prayer, personal Bible study, and family prayer three times a day. Apostle P. M. Samuel was highly punctual and never late to any activity or meeting. God used him to raise pastors and leaders to shepherd the growing number of new believers in Andhra Pradesh. The following are some of the pastors whom Apostle P. M. Samuel, along with Pastor P. T. Chacko, mentored for leadership within the IPC Andhra Pradesh ministry. These pastors, in turn, became fruitful leaders who trained others in their respective regions.</p>
        </div>
        <div className="pioneers-div">
            <h1 className="pioneers-heading">Founding Pioneers</h1>
            <div className="pioneers-subdiv">
                <div className="pioneers-child">
                    <img className="pioneer-img" src={Pioneer1} alt=""/>
                    <h4 className="pioneer-name">Pr. P.L.Paramjyothi  </h4>
                </div>
                <div className="pioneers-child">
                    <img className="pioneer-img"  src={Pioneer2} alt=""/>
                    <h4 className="pioneer-name">Pr. T.K.Thomas  </h4>
                </div>
                <div className="pioneers-child">
                    <img className="pioneer-img"  src={Pioneer4} alt=""/>
                    <h4 className="pioneer-name">Pr. P.Abraham</h4>
                </div>
                <div className="pioneers-child">
                    <img className="pioneer-img"  src={Pioneer3} alt=""/>
                    <h4 className="pioneer-name">Pr. K.R.David   </h4>
                </div>
            </div>
            <div className="pioneers-subdiv">
              <div className="pioneers-child">
                  <img className="pioneer-img"  src={Pioneer5} alt=""/>
                  <h4 className="pioneer-name">Pr. Philip Abraham</h4>
              </div>
                <div className="pioneers-child">
                    <img className="pioneer-img"  src={Pioneer9}alt=""/>
                    <h4 className="pioneer-name">Pr. P.J.Titus  </h4>
                </div>
                <div className="pioneers-child">
                    <img className="pioneer-img"  src={Pioneer6} alt=""/>
                    <h4 className="pioneer-name">Pr. K.V.Joseph</h4>
                </div>
                <div className="pioneers-child">
                    <img className="pioneer-img"  src={Pioneer8} alt=""/>
                    <h4 className="pioneer-name">Pr. B.S.Krupa Rakshana  </h4>
                </div>
            </div>
            <div className="pioneers-subdiv">
              <div className="pioneers-child">
                    <img className="pioneer-img"  src={Pioneer10} alt=""/>
                    <h4 className="pioneer-name">Pr. Ch.Sudarsanam</h4>
                </div>
                <div className="pioneers-child">
                    <img className="pioneer-img"  src={Pioneer15} alt=""/>
                    <h4 className="pioneer-name">Pr. K.G.Paul</h4>
                </div>
                <div className="pioneers-child">
                    <img className="pioneer-img" src={Pioneer14} alt=""/>
                    <h4 className="pioneer-name">Pr. J.Benjamin</h4>
                </div>
                <div className="pioneers-child">
                    <img className="pioneer-img"  src={Pioneer12} alt=""/>
                    <h4 className="pioneer-name">Pr. K.P.Devasahayam  </h4>
                </div>
            </div>
            <div className="pioneers-subdiv">
              <div className="pioneers-child">
                    <img className="pioneer-img"  src={Pioneer13} alt=""/>
                    <h4 className="pioneer-name">Pr. Vijaya Ratnam   </h4>
                </div>
                <div className="pioneers-child">
                    <img className="pioneer-img"  src={Pioneer11} alt=""/>
                    <h4 className="pioneer-name">Pr. M.P.John  </h4>
                </div>
                <div className="pioneers-child">
                    <img className="pioneer-img"  src={Pioneer17} alt=""/>
                    <h4 className="pioneer-name">Pr. K.T.Samuel</h4>
                </div>
            <div className="pioneers-child">
                    <img className="pioneer-img"  src={Pioneer7} alt=""/>
                    <h4 className="pioneer-name">Pr. K.A.David</h4>
                </div>
            </div>
            <div className="pioneers-subdiv">
               <div className="pioneers-child">
                    <img className="pioneer-img"  src={Pioneer16} alt=""/>
                    <h4 className="pioneer-name">Pr. Manoharam</h4>
                </div>
                <div className="pioneers-child">
                    <img className="pioneer-img"  src={Pioneer18} alt=""/>
                    <h4 className="pioneer-name">Pr. G.R.Purushotham</h4>
                </div>
                <div className="pioneers-child">
                    <img className="pioneer-img"  src={Pioneer19} alt=""/>
                    <h4 className="pioneer-name">Pr. D.Ratnam</h4>
                </div>
            </div>
        </div>
         <p className="pioneers-detail">
            The detailed profiles of each individual pioneer will be available shortly.
          </p>
        <div className="audio-container">
          <h2>To Know More About Us</h2>
          <p className="history-ipc">Exploring the lives and ministries of our former founders and pastors is essential to understanding our church’s history. Their faith, service, and impact offer valuable lessons that deepen our spiritual journey.</p>
          <div className="home-pdf-container">
            <div className="pdf-row">
              <a href={IPCHistory}className="pdf-link1">
                Learn About IPC Pastors
              </a>
              {/* <button className="pdf-link1" onClick={() => setActiveModal("audio")}>
                To Hear the Audio
              </button> */}
            </div>
          </div>
        </div>
        {renderModal()}
        <div id="modal-container" className="modal"></div>
      </div>
    </div>
  );
};

export default Home;

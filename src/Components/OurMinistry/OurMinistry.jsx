import { useEffect,useState,useRef } from 'react';
import { useHeaderFooter } from '../../HeaderFooterContext';
import { useNavigate } from 'react-router-dom';
import ZBCVideo from "../../../Photos/ZBC_Video_AboutUs.mov"
import ZBCImg1 from "../../../Photos/Photos_Church/Conventions/1.jpg"
import ZBCImg2 from "../../../Photos/Photos_Church/Conventions/2.jpg"
import ZBCImg3 from "../../../Photos/Photos_Church/Conventions/3.jpg"
import ZBCImg4 from "../../../Photos/Photos_Church/Conventions/4.jpg"
import ZBCImg5 from "../../../Photos/Photos_Church/Conventions/5.jpg"
import ZBCImg6 from "../../../Photos/Photos_Church/Conventions/6.jpg"
import ZBCImg7 from "../../../Photos/Photos_Church/Conventions/7.jpg"
import ZBCImg8 from "../../../Photos/Photos_Church/Conventions/8.jpg"
import ZBCImg9 from "../../../Photos/Photos_Church/Conventions/9.jpg"
import ZBCImg10 from "../../../Photos/Photos_Church/Conventions/10.jpg"
import ZBCImg11 from "../../../Photos/Photos_Church/Conventions/11.jpg"
import ZBCImg12 from "../../../Photos/Photos_Church/Conventions/12.jpg"
import ZBCImg13 from "../../../Photos/Photos_Church/Conventions/13.jpg"
import ZBCImg14 from "../../../Photos/Photos_Church/Conventions/14.jpg"
import ZBCImg15 from "../../../Photos/Photos_Church/Conventions/15.jpg"
import ZBCImg16 from "../../../Photos/Photos_Church/Conventions/16.jpg"
import ZBCImg17 from "../../../Photos/Photos_Church/Conventions/17.jpg"
import ZBCImg18 from "../../../Photos/Photos_Church/Conventions/18.jpg"
import ZBCImg19 from "../../../Photos/Photos_Church/Conventions/19.jpg"
import ZBCImg20 from "../../../Photos/Photos_Church/Conventions/20.jpg"
import ZBCImg21 from "../../../Photos/Photos_Church/Conventions/21.jpg"
import ZBCImg22 from "../../../Photos/Photos_Church/Conventions/22.jpg"
import ZBCImg23 from "../../../Photos/Photos_Church/Conventions/23.jpg"
import ZBCImg24 from "../../../Photos/Photos_Church/Conventions/24.jpg"
import ZBCImg25 from "../../../Photos/Photos_Church/Conventions/25.jpg"
import ZBCImg26 from "../../../Photos/Photos_Church/Conventions/26.jpg"
import ZBCImg27 from "../../../Photos/Photos_Church/Conventions/27.jpg"
import ZBCImg28 from "../../../Photos/Photos_Church/Conventions/28.jpg"
import ZBCImg29 from "../../../Photos/Photos_Church/Conventions/29.jpg"
import ZBCImg30 from "../../../Photos/Photos_Church/Conventions/30.jpg"
import ZBCImg31 from "../../../Photos/Photos_Church/Conventions/31.jpg"
import ZBCImg32 from "../../../Photos/Photos_Church/Conventions/32.jpg"
import ZBCImg33 from "../../../Photos/Photos_Church/Conventions/33.jpg"
import ZBCImg34 from "../../../Photos/Photos_Church/Conventions/34.jpg"
import ZBCImg35 from "../../../Photos/Photos_Church/Conventions/35.png"


import './OurMinistry.css';

function OurMinistry (){
  const totalImages = 34;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const {setHeaderFooterVisibility} = useHeaderFooter();
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const images=[
   ZBCImg35, ZBCImg1,ZBCImg2,ZBCImg3,ZBCImg4,ZBCImg5,ZBCImg6,ZBCImg7,ZBCImg8,ZBCImg9,
    ZBCImg10,ZBCImg11,ZBCImg12,ZBCImg13,ZBCImg14,
    ZBCImg15,ZBCImg16,ZBCImg17,ZBCImg18,ZBCImg19,ZBCImg20,
    ZBCImg21,ZBCImg22,ZBCImg23,ZBCImg24,ZBCImg25,
    ZBCImg26,ZBCImg27,ZBCImg28,ZBCImg29,ZBCImg30,
    ZBCImg31,ZBCImg32,ZBCImg33,ZBCImg34
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.1}
    );

    const videoElement = videoRef.current;
    if (videoElement) {
      observer.observe(videoElement);
    }
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  useEffect(() => {
    const muteOnScroll = () => {
      const video = videoRef.current;
      if (video) {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollPosition > 400) {
          video.volume = 0.0;
        } else {
          video.volume = 1.0;
        }
      }
    };
    window.addEventListener("scroll", muteOnScroll);
    return () => window.removeEventListener('scroll', muteOnScroll);
  }, []);

  useEffect(() => {
    let intervalId;
    if (!showVideo) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1 === totalImages ? 0 : prevIndex + 1;
          return nextIndex;
        });
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [showVideo, totalImages]);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      const handleVideoEnd = () => {
        setShowVideo(false);
        setCurrentIndex(0);
      };

      const videoElement = videoRef.current;
      videoElement.addEventListener('ended', handleVideoEnd);

      return () => videoElement.removeEventListener('ended', handleVideoEnd);
    }
  }, [showVideo]);

  const handleReadMoreClick = () => {
    setHeaderFooterVisibility(false);
    localStorage.setItem('scrollPosition', window.scrollY);
    window.scrollTo(0, 0);
    navigate('/ZBC');
  };
  const handleReadMoreClick2 = () => {
    setHeaderFooterVisibility(false);
    localStorage.setItem('scrollPosition', window.scrollY);
    window.scrollTo(0, 0);
    navigate('/conventions');
  };
  useEffect(() => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      localStorage.removeItem('scrollPosition');
    }
  }, []);
  useEffect(() => {
    const isMainPage = window.location.pathname === '/ourministry';
    if (isMainPage) {
      setHeaderFooterVisibility(true);
    }
  }, [window.location.pathname]);

  return (
    <div>
    <h1 className="ourministry-heading">Different aspects of IPC</h1>
      <div className="subdiv-ministry">
        <p className="subdiv-heading">Zion Bible College</p>
        <div className="zbc">
          <div className="zbc-left-video">
            <video ref={videoRef} controls autoPlay loop muted playsInline className='zbc-video'>
              <source src={ZBCVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="zbc-bulletin">
            <p className="zbc-bullentin-points">
              <span>➔ <strong>College Reopening:</strong> June 1, 2026.</span><br />
              <span>➔ <strong>Spiritual Retreat:</strong> September 15, 2026</span><br />
              <span>➔ <strong>Sports Meet:</strong> November 26, 2026</span><br />
              <span>➔ <strong>Christmas Holidays:</strong> December 22, 2026 - January 4, 2027</span><br />
              <span>➔ <strong>Graduation Ceremony:</strong> March 22, 2027</span><br />
              <span>➔ <strong>Faculty Get To Gather:</strong> Last Saturday of every Month</span>
            </p>
          </div>
        </div>
        <div className='zbc-info'>
          <p className="zbc-ourministry-data">
            Zion Bible School conducted classes with about 200 students at Kakinada from 3rd September to 30th September 1956. On 10th October 1956, the Indian Pentecostal Church of God leaders in the State of Andhra Pradesh upgraded Zion Bible School to college level and conducted classes in Badavapet, Vijayawada. Forty-five students who had studied in Zion Bible School at Kakinada came to Badavapet and were enrolled in this new college. Despite facing numerous challenges, the college continued to grow spiritually and remained steadfast in its mission to train pastors and leaders for Indian Pentecostal Church of God work amongst Telugu-speaking people.
          </p>
          <p className="zbc-ourministry-data">
            God opened doors, for the Apostle P. M. Samuel acquired the present campus and hosted Zion Bible College at Gunadala, Vijayawada; where he built a chapel, two classrooms, and dormitories for the students in 1960. Apostle P. M. Samuel served as the Principal, and his second son, Pastor P. Abraham Samuel, provided leadership as Registrar of Zion Bible College. Under Pastor P. Abraham Samuel’s leadership, there were many graduates from Zion Bible College who pioneered new IPC work in the states of Andhra Pradesh, Odisha, and Andaman and Nicobar Islands.
          </p>
          <p className="zbc-ourministry-data">
            Pastor P. Noel Samuel, the only son of Abraham Samuel, oversaw Zion Bible College during 1983 to 1984. After returning to India following completion of his graduate programme in the US in 1990, he was appointed by the IPC Andhra State Council as Principal of Zion Bible College.
            Pastor Noel Samuel encourages students to follow in the footsteps of our founder Apostle P. M. Samuel with a desire to study and read the Bible. He has implemented a policy requiring every student to read the Bible from Genesis to Revelation during the academic year at Zion Bible College. Students are encouraged to develop an intimate relationship with our heavenly Father by maintaining a disciplined prayer life, to be baptized by the anointing of the Holy Spirit, and to clearly hear the voice of God regarding where God wants them to pioneer and establish a church before they graduate from Zion Bible College.
            Today, by the grace of God and guidance of the Holy Spirit, Zion Bible College graduates are pioneering IPC work in many places in Andhra Pradesh.
          </p>
        </div>
        <div className='subpage'>
          <button className="ZBC_ReadMore" onClick={handleReadMoreClick}>
          Explore Us
          </button>
        </div>
        </div>
        <div className="subdiv-ministry">
          <p className="subdiv-heading">IPC Conventions</p>
          <div className="conventions">
            <div className="conventions-left-div">
              <div className="conventions-left">
              <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="active"
              />
                </div>
            </div>
            <div className="Convention_Data">
              <p className="ourministry-data">
              The prestigious annual conventions for 2026 are scheduled to be held from <b> February 2nd to February 6th, 2026, </b> at the serene location of <b> Kesara, Kanchikacherla</b>. This event marks the revival of a sacred tradition,  conducted once a year for believers across Andhra Pradesh. It aims to unite the Christian community for fellowship,  spiritual growth, and sharing of faith in a peaceful and inspiring environment. We wholeheartedly welcome everyone to join us in this blessed gathering.
              </p>
              <a href="https://maps.app.goo.gl/TnQKksUiqYS2aXQc6?g_st=ipc" className='convention-loc' target='_blank'>Get Directions</a>
            </div>
          </div>
          <div className='subpage'>
          <button className="Convention_ReadMore" onClick={handleReadMoreClick2}>
            Explore Us
          </button>
          </div>
        </div>
      </div>
  );
};

export default OurMinistry;

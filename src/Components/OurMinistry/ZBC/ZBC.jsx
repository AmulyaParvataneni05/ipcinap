import React, { useEffect, useState } from 'react';
import PrincipalImg from '../../../../Photos/Pastors_Images/27.jpg'
import DeanImg from '../../../../Photos/Dean_ZBC.png'
import ZBCPDF from "../../../../Photos/ZBC_Sovernier.pdf"
import ZBCApplication from "../../../../Photos/ZBC_Application.pdf"
import ZBC1 from "../../../../Photos/Photos_Church/1.jpg"
import ZBC2 from "../../../../Photos/Photos_Church/2.JPG"
import ZBC3 from "../../../../Photos/Photos_Church/3.JPG"
import ZBC4 from "../../../../Photos/Photos_Church/4.JPG"
import ZBC5 from "../../../../Photos/Photos_Church/5.JPG"
import ZBC6 from "../../../../Photos/Photos_Church/6.JPG"
import ZBC7 from "../../../../Photos/Photos_Church/7.JPG"
import ZBC8 from "../../../../Photos/Photos_Church/8.JPG"
import ZBC9 from "../../../../Photos/Photos_Church/9.JPG"
import ZBC10 from "../../../../Photos/Photos_Church/10.JPG"
import ZBC11 from "../../../../Photos/Photos_Church/11.JPG"
import { useNavigate } from 'react-router-dom';
import './ZBC.css';

function ZBC(){
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const ZBCimages = [ZBC1, ZBC2, ZBC3, ZBC4, ZBC5, ZBC6, ZBC7, ZBC8, ZBC9, ZBC10, ZBC11];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ZBCimages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [ZBCimages.length]);

  const toggleDetails = (index) => {
    document.getElementById(`details-${index}`).classList.toggle('show-details');
  };

  const handleBackToMainPage = () => {
    navigate('/ourministry');
  }
  return (
    <div>
      <div className="ZBCH">
        <h1>Zion Bible College</h1>
      </div>
      <div className="container2">
        <div className="media-slider">
          <div className="slider">
            {ZBCimages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Image ${index + 1}`}
                className={currentIndex === index ? 'active' : ''}
              />
            ))}
          </div>
        </div>
        <div className="text-images">
          <p className="ZBCHis">
            <strong>Free Education:</strong> Students receive <b>free food</b>, <b>free hostel accommodation</b>,
            and <b>free access to all library resources</b>.<br /><br />
            <strong>Academic Enrichment:</strong> The curriculum includes a <b>comprehensive study of all relevant books</b> and <b>practical training</b>, offering opportunities to preach in churches.<br /><br />
            <strong>Extracurricular Activities:</strong> Students can participate in <b>inter-college sports meets</b>,
            <b> inter-college spiritual retreats</b>, and <b>competitions</b> that recognize achievements in outdoor games
            and biblical knowledge.<br /><br />
            <strong>Spiritual Development:</strong> The program includes <b>dedicated library time</b> for in-depth study
            and <b>designated prayer times</b> to nurture spiritual growth.
          </p>
        </div>
      </div>
      <p className='zbc-history'>
        During the Second World War, before Japanese military aircraft bombarded Rangoon city and drove the British forces out of Burma, the Holy Spirit prophetically compelled Telugu Pentecostal believers to flee Rangoon city in Burma in 1941. These refugees fled with their bare necessities, they fled on foot, and sought refuge in East Godavari District, Andhra Pradesh.
        Apostle P. M. Samuel met these refugees and ministered to them through a series of revival meetings held in March and May 1942. As they were settling in East Godavari District, seeing their hunger to learn the Word of God, Apostle P. M. Samuel was inspired to conduct Bible classes on “Eschatology (study of the end times), The Tabernacle, Book of Daniel and Revelation.”
        <br />Driven by a strong desire to train young people to pastor local churches, on 15th August 1942, Apostle P. M. Samuel established Zion Bible School at Antarvedipalem, East Godavari District, Andhra Pradesh, with 150 students. Most of them were refugees from Rangoon, Burma. The Holy Spirit inspired some of these students to dedicate themselves for ministry and they started ministering in East and West Godavari Districts in Andhra Pradesh.
        Due to lack of facilities to host the 150 students, Zion Bible School was held in a believer’s home for a few weeks at Antarvedipalem. In later years, Apostle P. M. Samuel conducted Zion Bible School classes for a few months at Kakinada, Rajahmundry, Tadepalligudem, Eluru, Warangal, Badavapet, and Baptistpalem in Vijayawada.
        <br />Along with Apostle P. M. Samuel, Pastor P. T. Chacko, Pastor P. L. Paramjyothi, Pastor T. K. Thomas, Pastor B. S. Lukeson, Pastor K. R. David, and Pastor A. Y. Paul taught courses on “Life of Christ, Bible Survey, Church History, Fundamental Doctrines, and Theology,” using the Bible as a textbook and expounding the Word of God. The school also offered debates, and students participated in practical ministry by visiting surrounding villages on Saturdays and Sundays.
        </p>
        <center>
        <a href={ZBCPDF} className="zbc-pdf" target="_blank" rel="noreferrer">
              History of ZBC
        </a>
      </center>
      <div className="Curr_ZBC">
        <h2 className="ZBCH2">Courses Offered and Resources</h2>
        <p className="ZBCurr">
          Zion Bible College (ZBC), founded in 1942 by Apostle P. M. Samuel, is a pioneering institution dedicated
          to theological education. This unique institution offers tuition-free education and accommodation to students
          in the Telugu language, empowering individuals who feel called to Christian ministry. ZBC's curriculum,
          encompassing various theological degrees, fosters spiritual and academic growth. The college emphasizes the
          principles of sacrificial service, unwavering devotion, and unwavering commitment to God's mission.
          <br />
          Over the years, ZBC has played a pivotal role in advancing the Christian faith, nurturing a generation of
          influential preachers and dedicated servants. The college's core focus lies in biblical instruction, practical
          pastoral training, and cultivating a deep spiritual life within its students. ZBC continues to transform lives,
          equipping individuals for a lifelong journey of faith and service within God's kingdom, serving as a beacon of
          hope for those called to leadership in the Christian community.
        </p>

        <div className="ZBC_Courses">
          {["Certificate in Theology", "Diploma in Theology", "Bachelor in Theology"].map((course, index) => (
            <div className="program" key={index} onClick={() => toggleDetails(index)}>
              <p className="courseHeading">
                <strong>{course}</strong>
              </p>
              <p className="details" id={`details-${index}`}>
                {index === 0 && (
                  <>★The C.Th program is a one-year Bible training course for students who are aspiring to be pastors, designed for those without formal education.<br />
                  ★It emphasizes practical skills and biblical knowledge, requiring only basic Telugu literacy.<br />
                  ★This program empowers individuals to serve their communities effectively.</>
                )}
                {index === 1 && (
                  <>★The D.Th program is a two-year in-depth Bible training course for individuals who have completed 10th grade and are called to minister.<br />
                  ★It equips them with the knowledge and skills for effective preaching and leadership.<br />
                  ★Preparing them for greater responsibilities in their ministry and community.</>
                )}
                {index === 2 && (
                  <>★The B.Th program is a three-year comprehensive course designed for individuals who have completed Intermediate education.<br />
                  ★It provides in-depth biblical and theological training.<br />
                  ★Equipping students with the knowledge and skills for effective ministry and leadership at higher levels.</>
                )}
              </p>
            </div>
          ))}
        </div>
        <center>
          <a href={ZBCApplication} className='zbc-pdf' target="_blank">To Apply</a>
        </center>
      </div>

      <h2 className="ZBC-contact">Contact List</h2>
      <div className="contact-card">
        <div className="contact">
        <img src={PrincipalImg} alt="Principal Image" className="contact-img"/>
          <p><strong>Name:</strong> Pastor P. Noel Samuel</p>
          <p>Principal</p>
          <p><strong>Phone:</strong>
          <a href="tel:+919848110020">(+91)9848110020</a></p>
        </div>
        <div className="contact">
        <img src={DeanImg} alt="Academic Dean Image" className="contact-img" />
          <p><strong>Name:</strong> Pastor K. Issac</p>
          <p>Academic Dean</p>
          <p><strong>Phone:</strong>
          <a href="tel:+919912025563">(+91) 99120 25563</a></p>
        </div>
      </div>
      <div className="prev-page">
        <button className="prev-page" onClick={handleBackToMainPage}>Return</button>
      </div>
    </div>
  );
};
export default ZBC;

import React, { useState, useEffect } from 'react';
import { useHeaderFooter } from '../../../HeaderFooterContext';
import { useNavigate } from 'react-router-dom';
import IPCRegistration from "../../../../Photos/IPC_Registration.pdf"
import PMSamuel1 from "../../../../Photos/PMSamuel/1.png";
import PMSamuel2 from '../../../../Photos/PMSamuel/2.png';
import PMSamuel3 from '../../../../Photos/PMSamuel/3.png';
import PMSamuel4 from '../../../../Photos/PMSamuel/4.png';
import './Founders.css';

const PMimages = [
  PMSamuel1,
  PMSamuel2,
  PMSamuel3,
  PMSamuel4
];

const APMSamuel = () => {
  const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const {setHeaderFooterVisibility} = useHeaderFooter();
    const handleBackToMainPage = () => {
    navigate('/');
  }
    useEffect(() => {
      setHeaderFooterVisibility(false);
      const interval = setInterval(() => {
        moveToNextImage();
      }, 5000);
      return () => {
        setHeaderFooterVisibility(true);
          clearInterval(interval);
      }
    }, [currentImageIndex]);
    const moveToNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % PMimages.length);
    };
    return (
      <div className="xyz-container">
        <div className="image-container">
          <img
            src={PMimages[currentImageIndex]}
            alt={`XYZ Image ${currentImageIndex + 1}`}
            className="person-image"
          />
          <div className="next-btn" onClick={moveToNextImage}>
            &gt;
          </div>
        </div>
        <div className="content">
          <h2>Apostle P. M. Samuel</h2>
          <p>
          Apostle P. M. Samuel’s parents were Itti Mattai and Mary, both of whom belonged to a Mar Thoma Syrian Christian family in Keekozhur village, located in the state of Kerala, South India. They had seven daughters and prayed like Hannah in the Bible for a son. As an answer to their prayer, Apostle P. M. Samuel was born on 1st July 1903. His parents taught him Bible stories from childhood and ensured he attended Sunday School. When he was 15 years old, he was married to Mary.In 1920, while walking to school, he heard a soft voice saying, “Son Samuel, where will you spend your life after death?” The voice lingered in his mind, and he could not forget it. Later, he came home, went to his room, knelt, and prayed. That evening, he had a vision of Jesus Christ on the cross. He wept, repented, and confessed his sins. Then he heard a voice saying, “Today is the day of salvation.” New strength, peace, and joy filled his heart, and from that moment on, Samuel transformed his life.
          </p>
          <p>
          In 1924, the Bishop of Mar Thoma church sent him to their Theological Seminary for Bible training. While studying there, as he read the Bible carefully and understood its truth, he realized that infant baptism, which was practiced in Mar Thoma church, was not biblical. Despite his family’s objections, in 1926, P. M. Samuel was baptized by immersion. He resolved to endure all hardships for the sake of the Lord. In the afternoon of 29th September 1929, during a meeting, he received the Holy Spirit. He eagerly shared the joy he experienced with others during his evangelistic work in Travancore (Kerala) and Madras Presidency (Tamil Nadu and Andhra Pradesh).
          </p>
          <p>
          In August 1932, while attending fasting meetings in Kumbanadu, Travancore, on the third night, he heard the voice of God calling out, “Samuel, Samuel, Samuel, go to the Telugu region and proclaim the truth of Pentecost.” As he was pondering over this call, he received a letter from Brother Gurupadam, whom he had met at a convention in Madras, inviting him to come to Machilipatnam. Obeying the call of God, he came to Machilipatnam and started ministering to the Telugu people. Brother Gurupadam later took Apostle Samuel to neighbouring towns including Vuyyuru, Gudivada, and Eluru During his ministry in Machilipatnam, he and Brother T. P. Gurupadam visited Eluru to pray for Gurupadam’s sister, Rajya Lakshmi, who was ill. God answered their prayers, and her healing marked the beginning of IPC’s ministry in Eluru and yes Andhra Pradesh Pastor K. E. Abraham and Pastor P. T. Chacko travelled to Eluru and registered The Indian Pentecostal Church of God, on 27th of November 1935. Their vision was to create self-sustaining evangelistic society in India, without reliance on foreign missionaries or external funding.P M Samuel was the founding president, K.C.Cherian was the founding vice-president, and P.T.Chacko was the founding secretary of IPC in Andhra Pradesh.
          </p>
        </div>
        <a href={IPCRegistration}className="pdf-link1">IPC Registration</a>
        <div className="prev-page">
        <button className="prev-page" onClick={handleBackToMainPage}>Return</button>
      </div>
      </div>
    );
};

export default APMSamuel;

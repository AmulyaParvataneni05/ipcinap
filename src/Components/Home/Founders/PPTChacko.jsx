import React, { useState, useEffect } from 'react';
import { useHeaderFooter } from '../../../HeaderFooterContext';
import PTChacko1 from "../../../../Photos//PTChacko/1.png"
import PTChacko2 from "../../../../Photos/PTChacko/2.png"
import { useNavigate } from 'react-router-dom';
import './Founders.css';

const PTimages = [
  PTChacko1,PTChacko2
];

const PPTChacko = () => {
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
        clearInterval(interval);}
    }, [currentImageIndex]);
    const moveToNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % PTimages.length);
    };
    return (
      <div className="xyz-container">
        <div className="image-container">
          <img
            src={PTimages[currentImageIndex]}
            alt={`XYZ Image ${currentImageIndex + 1}`}
            className="person-image"
          />
          <div className="next-btn" onClick={moveToNextImage}>
            &gt;
          </div>
        </div>
        <div className="content">
          <h2>Pastor P. T. Chacko</h2>
          <p>
          Pastor P. T. Chacko studied at Serampore Bible College, where he wrote a paper on “Church History,” won a gold medal, and earned a Bachelor of Divinity degree. While travelling by train to Kolkata from Kerala, he used to travel through Tamil Nadu, Andhra Pradesh, and Odisha (Orissa). During these travels, God gave him a passion to reach the people in these regions. When he heard that Apostle P. M. Samuel had been ministering in Andhra Pradesh since 1932, he came with his family to Eluru in 1935.Following the guidance of the Holy Spirit, they continued to evangelize with passion. Despite their advanced education, they were eager to share the message of Christ with everyone they encountered. They preached the gospel wherever they went—on buses, trains, and streets—and were particularly active in leading young people to Christ.
          </p>
          <p>
          There were many times when Pastor Chacko and his family went without food for days due to financial struggles. On one occasion, they did not have food for two days, and the children were very hungry. However, they sought comfort and strength in the presence of the Lord. On the third day, a stranger arrived, having travelled a long distance, and told them that God had spoken to him. He provided them with rice and gave them two rupees. This was not an isolated event; God continued to provide for them in miraculous ways in the years ahead.Pastor Chacko, Apostle P. M. Samuel, and other evangelists often faced financial hardships and lived on little more than porridge, yet witnessed many miraculous acts in their lives. They experienced miraculous healings - people who were possessed with evil spirits were delivered, and numerous signs of divine intervention were seen throughout their ministry as they ministered with unwavering perseverance and faith.
          </p>
        </div>
        <div className="prev-page">
        <button className="prev-page" onClick={handleBackToMainPage}>Return</button>
      </div>
      </div>
    );
};

export default PPTChacko;

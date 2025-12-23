import React,{useEffect} from 'react';
import './LocationModal.css';
import { useHeaderFooter } from '../../../HeaderFooterContext';
import { useNavigate } from 'react-router-dom';
const LocationModal = ({ show, onClose, data }) => {
  const { setHeaderFooterVisibility } = useHeaderFooter();
  const navigate = useNavigate();

  useEffect(() => {
    if (show) {
      setHeaderFooterVisibility(false);
    } else {
      setHeaderFooterVisibility(true);
    }
  }, [show, setHeaderFooterVisibility]);

  if (!show) return null;

  const {
    area,name,imagePath,imagePath2,contactName,contactName2,phoneNumber,phoneNumber2,address,
    supporting1,supporting2,supporting3,supporting4,supporting5,
    supportingname1,supportingname2,supportingname3,supportingname4,supportingname5 } = data;

  const supportingImages = [supporting1, supporting2, supporting3, supporting4, supporting5].filter(Boolean);
  const supportingNames = [supportingname1, supportingname2, supportingname3, supportingname4, supportingname5].filter(Boolean);

  const handleReadMoreClick = (e) => {
    e.preventDefault();
    setHeaderFooterVisibility(false);
    window.scrollTo(0, 0);
    navigate(`/area-details/${area}`);
    //navigate(`/area-details/${area}`);
  };
  const handleSupporting = (e,index) => {
    e.preventDefault();
    const globalidx = 30+index;
    window.scrollTo(0,0);
    //navigate(`/no-header-footer/area-details/${globalidx}`, '_blank');
    navigate(`/area-details/${globalidx}`);
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-body">
          <h2 className="area-name">{name}</h2>

          <div className={`modal-info ${contactName2 ? 'dual-contact' : ''}`}>
            <img src={imagePath} alt={`${contactName} Image`} className="modal-imagePath" />
            {imagePath2 && (
              <img src={imagePath2} alt={`${contactName2} Image`} className="modal-imagePath" />
            )}
          </div>

          <div className={`modal-info ${contactName2 ? 'dual-contact' : ''}`}>
            <div>
              <p><strong>Name:</strong> {contactName}</p>
              <p><strong>Phone:</strong> {phoneNumber}</p>
            </div>
            {contactName2 && (
              <div>
                <p><strong>Name:</strong> {contactName2}</p>
                <p><strong>Phone:</strong> {phoneNumber2}</p>
              </div>
            )}
          </div>

          <div className="modal-info">
            <p><strong>Address:</strong> {address}</p>
          </div>

          <a href="#" onClick={handleReadMoreClick} className="locate-btn" rel="noopener noreferrer">Read More</a>

          {supportingImages.length > 0 && (
            <div className="supporting-images">
              {supportingImages.map((img, index) => (
                <div key={index} className="supporting-item">
                  <img src={img} alt={`Supporting ${index + 1}`} onClick={(e)=>handleSupporting(e,index)} />
                  {supportingNames[index] && <p>{supportingNames[index]}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationModal;

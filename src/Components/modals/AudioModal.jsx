import React from 'react';
import './allmodal.css';

const AudioModal = ({ onClose }) => {
  // List of audio parts with descriptions
  const audioParts = [
    { id: '1', title: 'Introduction to IPC' },
    { id: '2', title: 'The Vision of IPC' },
    { id: '3', title: 'History of IPC' },
    { id: '4', title: 'Foundational Teachings' },
    { id: '5', title: 'Prayer and Faith'},
    { id: '6', title: 'The Church and Community' },
    { id: '7', title: 'Testimonies of Healing' },
    { id: '8', title: 'Youth Ministry' },
    { id: '9', title: 'Strengthening Families'},
    { id: '10', title: 'The Future of IPC'},
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <button className="close" onClick={onClose}>&times;</button>
        <div className="modal-body">
          <h2>Listen to Our Audio Book</h2>
          <div className="audio-list">
            {audioParts.map((part) => (
              <div className="audio-item" key={part.id}>
                <h3 className='modal-data'>{part.title}</h3>
                <audio controls className='audio-player'>
                  <source src={`../audio/${part.id}.wav`} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioModal;

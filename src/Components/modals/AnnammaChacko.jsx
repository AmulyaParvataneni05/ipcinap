import React from 'react';
import './allmodal.css';

const AnnammaChacko = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box">
        <button className="close-button" onClick={onClose}>&times;</button>
        <div className="modal-body">
          <h2 className='modal-heading'>Annamma Chacko</h2>
          <div className="modal-info">
            <p className='modal-data'>
            Ammachi held the unique distinction of being the first woman missionary from Kerala to Andhra Pradesh. Annamma Koshy (affectionately known as Ammachi) was the eldest daughter of the esteemed Mammoottil family of Kumbanad, which maintained close ties with the founders of the local Mar Thoma Church. She was enrolled as a residential student at the renowned Nicholson Girls' School.One of the cherished memories from her childhood was receiving a gold coin from her grandfather as a keepsake. In 1913, at the age of nine, Annamma accepted Jesus Christ as her personal Saviour. Upon witnessing her decision, Miss Nicholson prayed over her and prophesied, "Annamma, you must become a missionary". Though married at the age of 15 to Pastor P. T. Chacko, her broad-minded father-in-law strongly encouraged and arranged for her to continue her education. At Kozhencherry English Medium High School, she was one of only three girls enrolled—a rare opportunity for a woman at that time. Her early mastery of the English language later proved invaluable, especially during her ministry in urban areas from 1936 onwards.

            </p>
            <p className='modal-data'>Between 1927 and 1930, Ammachi and Appachen (Pastor P. T. Chacko) served as teachers for children of the Depressed Classes at the Alwaye Settlement School, where they also served as house parents. Five years after Appachen received water baptism, Ammachi too took that significant step, symbolizing a departure from the traditional teachings of the MarThoma Church.After arriving in Eluru in 1936, Ammachi committed herself to the serious study of Telugu, enabling her to minister effectively to the local population in their native language.Much like the virtuous woman described in Proverbs 31, Ammachi was a woman of action. Whether navigating crowded markets, carrying bags of groceries, cooking, serving guests, visiting the sick, or attending prayer meetings, she embodied tireless service. She never allowed domestic responsibilities to hinder her commitment to ministry. Her pace was brisk, and few could match her energy. In the evenings, she regularly accompanied Appachen to cottage prayer meetings.
            </p>
            <p className='modal-data'>When Appachen was away, she stepped up to guide and mentor young evangelists. Intercessory prayer and weekly fasting were integral parts of her spiritual discipline. She took exceptional care in hand-washing Appachen’s white shirts, ensuring they remained spotless—an expression of love and devotion.Ammachi was also a diligent letter writer. Church members who had been transferred to remote areas often received encouraging letters from her. Many of these individuals later became pillars of the church.One of the most profound expressions of her ministry was through hospitality. Job seekers, those suffering personal tragedies, and villagers in need of medical care often found food, lodging, and comfort through Ammachi’s compassionate spirit.During times of stress and crisis, Ammachi demonstrated remarkable courage and inner strength. When our family faced persecution from a Hindu landlord—who objected to Christian worship on his premises—verbal abuse and threats escalated into blocked entryways and eventually an eviction notice. At the time, Appachen was in the United States, and the situation was deeply challenging. Following Ammachi’s example, we poured out our hearts before the Lord in prayer. Within a week, we were able to secure a new residence.
            </p>
            <p className='modal-data'>
            Ammachi’s favorite hymn was “There’s Not a Friend Like the Lowly Jesus.” She remained steadfast in her faith and in her calling to serve the Lord.Thus, Annamma Chacko—a daughter of Kerala—consecrated the soil of Andhra as a pioneering missionary, leaving a legacy of faith, courage, and sacrificial service.Presented by Mrs. Aliamma Cherian (daughter of Pastor P.T. Chacko and Annamma Chacko)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnammaChacko;

import conventionVideo from '../../../../Photos/Photos_Church/Conventions/convention-video.mov'
import ConventionHistory from '../../../../Photos/IPC_Meetings_souvner_history _1-59.pdf'
import { useNavigate } from 'react-router-dom';
import './Conventions.css'
function Conventions(){
    const navigate = useNavigate();
    const handleBackToMainPage = () => {
        navigate('/ourministry');
    };
    return(
        <div>
            <h1 className='ConventionsH'>IPC Conventions</h1>
            <div className="convideo-container">
                <div className="con-video-div">
                    <video controls autoPlay loop className="convention-video">
                        <source src={conventionVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className='convention-sep-data'>
                <p>
                    Apostle P. M. Samuel came to the Telugu-speaking region in South India in 1932 and conducted extensive ministry, resulting in the salvation of many people and the establishment of numerous churches. To bring together these believers and strengthen them spiritually, Apostle P. M. Samuel felt a strong desire to host a convention. Inspired by God, the first convention was held for believers from neighbouring IPC churches and was a grand success, drawing large crowds at Antarvedipalem in 1941.
                </p>
                <p>
                    It was very tedious for people to travel by road and rail in those days. Indian railways were powered by steam engines, and public transport buses were few. After seeing the success at Antarvedipalem, Apostle P. M. Samuel held another convention at Baptistpalem, Vijayawada, in 1941 for the IPC believers in Krishna and Guntur districts. In the following years, the IPC Annual Convention was also held at Baptistpalem. As there were more IPC churches in East and West Godavari, Eluru was more convenient, and the IPC Annual Convention was held in Eluru from 1945 to 1981.
                </p>
                <p>
                    As Vijayawada city offered better transportation options, being home to the second busiest railway junction in India and the junction of “Chennai-Kolkata” and “Machilipatnam-Mumbai” highways, the IPC Andhra Pradesh State Council decided to hold the Annual Convention in Vijayawada. God blessed the IPC Andhra Pradesh State Council to purchase land in Gunadala, where conventions took place from 1982 until 2009. From 2010 to 2020, until COVID-19 halted public gatherings, IPC Andhra Pradesh State Annual Conventions were held at a spacious venue at Gudavalli, which is located on the Vijayawada-Visakhapatnam highway. Since 2021 to date, we have been hosting the IPC Andhra Pradesh State Annual Convention online, and for smaller gatherings, we have hosted events at “Makineni Basava Punnaiah Stadium,” “Bishop Azariah High School,” and in 2025 at “Zion Bible College” campus.
                </p>
                <p>
                    The gatherings were initially held for five days, from Wednesday evening to Sunday afternoon, until 2014. Since 2015, the conventions now begin on Monday evening and conclude on Friday afternoon. These meetings include a variety of program such as praise and worship, Bible study, pastors’ meetings, gospel meetings, youth meetings and women’s gatherings, Bible college graduations, children’s festivals, and communion services.
                </p>
            </div>
            <div className="conventions-pdf-div">
            <center>
              <a
                href={ConventionHistory}
                className="pdf-link"
                target="_blank"
                rel="noreferrer"
              >
                History of IPC Conventions
              </a>
            </center>
          </div>
          <div className="prev-page">
        <button className="prev-page" onClick={handleBackToMainPage}>Return</button>
      </div>
        </div>
    )
}
export default Conventions;
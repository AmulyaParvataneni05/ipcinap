import LocationModal from '../modals/Location/LocationModal';
import { useHeaderFooter } from '../../HeaderFooterContext';
import { useState ,useEffect} from 'react';
import Area1 from "../../../Photos/Pastors_Images/1.jpg";
import Area2 from "../../../Photos/Pastors_Images/2.jpg";
import Area3 from "../../../Photos/Pastors_Images/3.jpg";
import Area4 from "../../../Photos/Pastors_Images/4.jpg";
import Area5 from "../../../Photos/Pastors_Images/5.jpg";
import Area6 from "../../../Photos/Pastors_Images/6.jpg";
import Area7 from "../../../Photos/Pastors_Images/7.jpg";
import Area8 from "../../../Photos/Pastors_Images/8.jpg";
import Area9 from "../../../Photos/Pastors_Images/9.jpg";
import Area10 from "../../../Photos/Pastors_Images/10.jpg";
import Area11 from "../../../Photos/Pastors_Images/11.jpg";
import Area12 from "../../../Photos/Pastors_Images/12.jpg";
import Area13 from "../../../Photos/Pastors_Images/13.jpg";
import Area14 from "../../../Photos/Pastors_Images/14.jpg";
import Area15 from "../../../Photos/Pastors_Images/15.jpg";
import Area16 from "../../../Photos/Pastors_Images/16.2.jpg";
import Area17 from "../../../Photos/Pastors_Images/17.jpg";
import Area181 from "../../../Photos/Pastors_Images/18.1.jpg";
import Area182 from "../../../Photos/Pastors_Images/18.2.jpg";
import Area19 from "../../../Photos/Pastors_Images/19.jpg";
import Area20 from "../../../Photos/Pastors_Images/20.jpg";
import Area21 from "../../../Photos/Pastors_Images/21.jpg";
import Area22 from "../../../Photos/Pastors_Images/22.jpg";
import Area23 from "../../../Photos/Pastors_Images/23.jpg";
import Area24 from "../../../Photos/Pastors_Images/24.jpg";
import Area25 from "../../../Photos/Pastors_Images/25.jpg";
import Area26 from "../../../Photos/Pastors_Images/26.jpg";
import Area27 from "../../../Photos/Pastors_Images/27.jpg";
import Area271 from "../../../Photos/Pastors_Images/27.1.jpg";
import Area272 from "../../../Photos/Pastors_Images/27.2.jpg";
import Area273 from "../../../Photos/Pastors_Images/27.3.jpg";
import Area274 from "../../../Photos/Pastors_Images/27.4.jpg";
import Area275 from "../../../Photos/Pastors_Images/27.5.jpg";
import Area28 from "../../../Photos/Pastors_Images/28.jpg";
import Area29 from "../../../Photos/Pastors_Images/29.jpg";

import './Locations.css';

const locationData = [
    {
      area:"1",
      name: 'Agency',
      imagePath: Area1,
      contactName: 'Pr. V. Isaac Samuel',
      phoneNumber: '+91 8985950242',
      address: 'Addateegala, Agency, Andhra Pradesh'
    },
    {
      area:"2",
      name: 'Anantapur',
      imagePath:Area2,
      contactName: 'Pr. D. Yesudas',
      phoneNumber: '+91 9703771579',
      address: 'Hamali Colony, Anantapur, Andhra Pradesh'
    },
    {
        area:"3",
        name: 'Annavaram',
        imagePath: Area3,
        contactName: 'Pr. B. Yesudasu',
        phoneNumber: '+91 9704960012',
        address: 'Annavaram, Andhra Pradesh'
    },
    {
        area:"4",
        name: 'Addanki',
        imagePath: Area4,
        contactName: 'Pr. M. Luka Babu',
        phoneNumber:'+91 9346824159',
        address: 'Darsi, Addanki, Andhra Pradesh'
    },
    {
        area:"5",
        name: "Devarapalli",
        imagePath: Area5,
        contactName: "Pr. P. G. Eliya",
        phoneNumber: "+91 9849010332",
        address: "Beside Chinna Kaluva, Devarapalli, Andhra Pradesh",
      },
      {
        area:"6",
        name: "Durgi",
        imagePath: Area6,
        contactName: "Pr. A. Yohan",
        phoneNumber: "+91 9908448327",
        address: "Obulesunipalli, Durgi, Andhra Pradesh"
      },
      {
        area:"7",
        name: "Eluru",
        imagePath: Area7,
        contactName: "Pr. P. Daveedu",
        phoneNumber: "+91 9701978140",
        address: "Pedapadu, Eluru, Andhra Pradesh"
      },
      {
        area:"8",
        name: "Gannavaram",
        imagePath: Area8,
        contactName: "Pr. Y. Salman Raju",
        phoneNumber: "+91 8000810030",
        address: "Telaprolu, Gannavaram, Andhra Pradesh"
      },
      {
        area:"9",
        name: "Gollavilli",
        imagePath: Area9,
        contactName: "Pr. K. Krupa Paul",
        phoneNumber: "+91 9908245623",
        address: "Ambajipeta, Gollavilli, Andhra Pradesh"
      },
      {
        area:"10",
        name: "Guntur",
        imagePath: Area10,
        contactName: "Pr. M. Korneli",
        phoneNumber: "+91 9490126932",
        address: "Arundalpeta, Guntur, Andhra Pradesh"
    },
    {
        area:"11",
        name: "Jaggayyapeta",
        imagePath: Area11,
        contactName: "Pr. L. Praveen Kumar",
        phoneNumber: "+91 9440266177",
        address: "Kolimi Bazar, Jaggayyapeta, Andhra Pradesh"
    },
    {
        area:"12",
        name: "Kadapa",
        imagePath: Area12,
        contactName: "Pr. B. John Babu",
        phoneNumber: "+91 9985865557",
        address: "Proddatur, Kadapa, Andhra Pradesh"
    },
    {
        area:"13",
        name: "Kakinada",
        imagePath: Area13,
        contactName: "Pr. M. Mosi",
        phoneNumber: "+91 9866021278",
        address: "Sitharamapuram, Kakinada, Andhra Pradesh"
    },
    {
        area:"14",
        name: "Kondapuram",
        imagePath: Area14,
        contactName: "Pr. L. Pushparaju",
        phoneNumber: "+91 9618629646",
        address: "Obannapeta, Kondapuram, Andhra Pradesh"
    },
    {
        area:"15",
        name: "Kulla",
        imagePath: Area15,
        contactName: "Pr. Ch. Jyothi Babu",
        phoneNumber: "+91 9848086682",
        address: "Main road, Church Street, Kulla, Andhra Pradesh"
    },
    {
        area:"16",
        name: "Kurnool",
        imagePath: Area16,
        contactName: "Pr. T. Yesudas",
        phoneNumber:"+91 9177742127",
        address: "Near Government hospital, Kurnool, Andhra Pradesh"
    },
    {
        area:"17",
        name: "Machilipatnam",
        imagePath: Area17,
        contactName: "Pr. A. Finny Samuel",
        phoneNumber: "+91 7675822277",
        address: "Malkapatnam, Machilipatnam, Andhra Pradesh"
    },
    {
        area:"18",
        name: "Mandapeta",
        imagePath: Area181,
        imagePath2: Area182,
        contactName: "Pr. T. A. Antony",
        contactName2: "Pr. P. T. James Paul",
        phoneNumber: "+91 9074673353",
        phoneNumber2:"+91 9849458106",
        address: "Omallor & Yeditha, Mandapeta, Andhra Pradesh"
    },
    {
        area:"19",
        name: "Macherla",
        imagePath: Area19,
        contactName: "Pr. K. J. Devabiksham",
        phoneNumber: "+91 9848565307",
        address: "Railway station road, Macherla, Andhra Pradesh"
    },
    {
        area:"20",
        name: "Mortha",
        imagePath: Area20,
        contactName: "Pr. K. Vijaya Kumar",
        phoneNumber: "+91 7075873468",
        address: "Santha market, Mortha, Andhra Pradesh"
    },
    {
        area:"21",
        name: "Nandyal",
        imagePath: Area21,
        contactName: "Pr. J. Annas",
        phoneNumber: "+91 9246924348",
        address: "M. S. Nagar, Nandyal, Andhra Pradesh"
    },
    {
        area:"22",
        name: "Ongole",
        imagePath: Area22,
        contactName: "Pr. G. Bhagavan Das",
        phoneNumber: "+91 9866708823",
        address: "Kabadipalem, Ongole, Andhra Pradesh"
    },
    {
        area:"23",
        name: "Peravali",
        imagePath: Area23,
        contactName: "Pr. K. Lazar",
        phoneNumber: "+91 9347306211",
        address: "Narsapuram Kaluva Gattu, Peravali, Andhra Pradesh"
    },
    {
        area:"24",
        name: "Repalli",
        imagePath: Area24,
        contactName: "Pr. J. Shadrak",
        phoneNumber: "+91 9849398330",
        address: "Pallekona, Repalli, Andhra Pradesh"
    },
    {
        area:"25",
        name: "Tenali",
        imagePath: Area25,
        contactName: "Pr. A. Methuselah",
        phoneNumber: "+91 9701925799",
        address: "Itha Nagar, Tenali, Andhra Pradesh"
    },
    {
        area:"26",
        name: "Vizianagaram",
        imagePath: Area26,
        contactName: "Pr. P. Anand Babu",
        phoneNumber: "+91 9441814488",
        address: "Contonment, Vizianagaram, Andhra Pradesh"
    },
    {
        area:"27",
        name: "Vijayawada",
        imagePath:  Area27,
        contactName: "Pr. P. Noel Samuel",
        phoneNumber: " +91 9848110020",
        address: "Gunadala, Vijayawada, Andhra Pradesh",
        supporting1 :Area271,
        supporting2 :Area272,
        supporting3 :Area273,
        supporting4 :Area274,
        supporting5 :Area275,
        supportingname1: "Pr. S. Abraham",
        supportingname2: "Pr. Shaik John",
        supportingname3: "Pr. Venu Babu",
        supportingname4: "Pr. G. Mruthyumjayudu",
        supportingname5: "Pr. P. B.V.S.S. GIDEON",
    },
    {
        area:"28",
        name: "Visakhapatnam",
        imagePath:  Area28,
        contactName: "Pr. B. E. Vijaya Kumar",
        phoneNumber: " +91 9866176454",
        address: "Vivekananda Nagar, Visakhapatnam, Andhra Pradesh"
    },
    {
        area:"29",
        name: "Waltair",
        imagePath:  Area29,
        contactName: "Pr. K. Varghese",
        phoneNumber: "+91 9440643040",
        address: "Chinna Waltair, Waltair, Andhra Pradesh"
    }
  ];
function Locations(){
    const [selectedData, setSelectedData] = useState(null);
    const {setHeaderFooterVisibility} = useHeaderFooter();
    const openModal = (index) => {
      setSelectedData(locationData[index]);
      sessionStorage.setItem('locationpos', window.scrollY);
      sessionStorage.setItem('modalIndex', index);
      //navigate(`/no-header-footer/area-details/${index}`);
    };
    const closeModal = () => {
      setSelectedData(null);
      setHeaderFooterVisibility(true);
      sessionStorage.removeItem('locationpos');
      sessionStorage.removeItem('modalIndex');
    };
    useEffect(() => {
    const locationpos = sessionStorage.getItem('locationpos');
    if (locationpos) {
      window.scrollTo(0, Number(locationpos));
    }
    const storedModalIndex = sessionStorage.getItem('modalIndex');
    if (storedModalIndex) {
      setSelectedData(locationData[storedModalIndex]);
      setHeaderFooterVisibility(false);
    }
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  return (
    <div className='location-wrapper'>
      <div className="location-body">
        <h1 className="location-heading">Major Churches of IPC in Andhra Pradesh</h1>
        <p className="information-area">
          In 1932, Apostle P M Samuel arrived in what was then known as the Madras Presidency, now Andhra Pradesh.
          His mission began by visiting Vuyyuru, Eluru, and Machilipatnam, where he spread the gospel and shared
          his vision for Christian ministry. By 1942, he established the Zion Bible College, a significant milestone
          in his ministry. This institution was dedicated to training individuals who would go on to serve as pastors
          and evangelists.
        </p>
        <p className="information-area">
          As Apostle P M Samuel's ministry grew, so did the number of pastors and evangelists. These trained individuals
          were sent to various locations where the Apostle had preached, expanding the church’s presence throughout the
          region. To manage the increasing number of pastors, a regional structure was established. The Telugu-speaking
          congregations were organized by district, and leaders were appointed to oversee specific regions.
        </p>
        <p className="information-area">
          With continued growth, the regions were further divided into 29 locationData, each with a dedicated coordinator or
          head. These area heads serve as points of contact for the pastors and congregations within their regions.
          Below, you will find brief descriptions of each area, along with the contact details of the respective
          area coordinators.
        </p>
        <div className="locations-grid">
          {locationData.map((area, index) => (
            <button
              key={index}
              className="location-btn"
              onClick={() => openModal(index)}
            >
              {area.name}
            </button>
          ))}
        </div>

        <LocationModal show={!!selectedData} onClose={closeModal} data={selectedData || {}} />
      </div>
    </div>
  );
};

export default Locations;

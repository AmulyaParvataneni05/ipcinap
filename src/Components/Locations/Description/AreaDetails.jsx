import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ChurchPhoto1 from "../../../../Photos/Photos_Church/AreaChurchPhotos/1.jpg";
import ChurchPhoto2 from "../../../../Photos/Photos_Church/AreaChurchPhotos/2.jpg";
import ChurchPhoto3 from "../../../../Photos/Photos_Church/AreaChurchPhotos/3.jpg";
import ChurchPhoto4 from "../../../../Photos/Photos_Church/AreaChurchPhotos/4.jpg";
import ChurchPhoto5 from "../../../../Photos/Photos_Church/AreaChurchPhotos/5.jpg";
import ChurchPhoto6 from "../../../../Photos/Photos_Church/AreaChurchPhotos/6.jpg";
import ChurchPhoto7 from "../../../../Photos/Photos_Church/AreaChurchPhotos/7.jpg";
import ChurchPhoto8 from "../../../../Photos/Photos_Church/AreaChurchPhotos/8.jpg";
import ChurchPhoto9 from "../../../../Photos/Photos_Church/AreaChurchPhotos/9.jpg";
import ChurchPhoto10 from "../../../../Photos/Photos_Church/AreaChurchPhotos/10.jpg";
import ChurchPhoto11 from "../../../../Photos/Photos_Church/AreaChurchPhotos/11.jpg";
import ChurchPhoto12 from "../../../../Photos/Photos_Church/AreaChurchPhotos/12.jpg";
import ChurchPhoto13 from "../../../../Photos/Photos_Church/AreaChurchPhotos/13.jpg";
import ChurchPhoto14 from "../../../../Photos/Photos_Church/AreaChurchPhotos/14.jpg";
import ChurchPhoto15 from "../../../../Photos/Photos_Church/AreaChurchPhotos/15.jpg";
import ChurchPhoto16 from "../../../../Photos/Photos_Church/AreaChurchPhotos/16.jpg";
import ChurchPhoto17 from "../../../../Photos/Photos_Church/AreaChurchPhotos/17.jpg";
import ChurchPhoto18 from "../../../../Photos/Photos_Church/AreaChurchPhotos/18.jpg";
import ChurchPhoto19 from "../../../../Photos/Photos_Church/AreaChurchPhotos/19.jpg";
import ChurchPhoto20 from "../../../../Photos/Photos_Church/AreaChurchPhotos/20.jpg";
import ChurchPhoto21 from "../../../../Photos/Photos_Church/AreaChurchPhotos/21.jpg";
import ChurchPhoto22 from "../../../../Photos/Photos_Church/AreaChurchPhotos/22.jpg";
import ChurchPhoto23 from "../../../../Photos/Photos_Church/AreaChurchPhotos/23.jpg";
import ChurchPhoto24 from "../../../../Photos/Photos_Church/AreaChurchPhotos/24.jpg";
import ChurchPhoto25 from "../../../../Photos/Photos_Church/AreaChurchPhotos/25.jpg";
import ChurchPhoto26 from "../../../../Photos/Photos_Church/AreaChurchPhotos/26.jpg";
import ChurchPhoto27 from "../../../../Photos/Photos_Church/AreaChurchPhotos/27.jpg";
import ChurchPhoto28 from "../../../../Photos/Photos_Church/AreaChurchPhotos/28.jpg";
import ChurchPhoto29 from "../../../../Photos/Photos_Church/AreaChurchPhotos/29.jpg";
import ChurchPhoto30 from "../../../../Photos/Photos_Church/AreaChurchPhotos/27.1.jpg";
import ChurchPhoto31 from "../../../../Photos/Photos_Church/AreaChurchPhotos/27.2.jpg";
import ChurchPhoto32 from "../../../../Photos/Photos_Church/AreaChurchPhotos/27.3.jpg";
import ChurchPhoto33 from "../../../../Photos/Photos_Church/AreaChurchPhotos/27.4.jpg";
import ChurchPhoto34 from "../../../../Photos/Photos_Church/AreaChurchPhotos/27.5.jpg";
import PrevPastor1 from "../../../../Photos/Photos_Church/PrevPastors/1.PNG";
import PrevPastor2 from "../../../../Photos/Photos_Church/PrevPastors/2.PNG";
import PrevPastor3 from "../../../../Photos/Photos_Church/PrevPastors/3.PNG";
import PrevPastor4 from "../../../../Photos/Photos_Church/PrevPastors/4.PNG";
import PrevPastor5 from "../../../../Photos/Photos_Church/PrevPastors/5.PNG";
import PrevPastor6 from "../../../../Photos/Photos_Church/PrevPastors/6.PNG";
import PrevPastor7 from "../../../../Photos/Photos_Church/PrevPastors/7.PNG";
import PrevPastor8 from "../../../../Photos/Photos_Church/PrevPastors/8.PNG";
import PrevPastor9 from "../../../../Photos/Photos_Church/PrevPastors/9.PNG";
import PrevPastor10 from "../../../../Photos/Photos_Church/PrevPastors/10.PNG";
import PrevPastor11 from "../../../../Photos/Photos_Church/PrevPastors/11.PNG";
import PrevPastor12 from "../../../../Photos/Photos_Church/PrevPastors/12.PNG";
import PrevPastor13 from "../../../../Photos/Photos_Church/PrevPastors/13.PNG";
import PrevPastor14 from "../../../../Photos/Photos_Church/PrevPastors/14.PNG";
import PrevPastor15 from "../../../../Photos/Photos_Church/PrevPastors/15.PNG";
import PrevPastor16 from "../../../../Photos/Photos_Church/PrevPastors/16.PNG";
import PrevPastor17 from "../../../../Photos/Photos_Church/PrevPastors/17.PNG";
import PrevPastor18 from "../../../../Photos/Photos_Church/PrevPastors/18.PNG";
import PrevPastor19 from "../../../../Photos/Photos_Church/PrevPastors/19.PNG";
import PrevPastor20 from "../../../../Photos/Photos_Church/PrevPastors/20.PNG";
import PrevPastor21 from "../../../../Photos/Photos_Church/PrevPastors/21.PNG";
import PrevPastor22 from "../../../../Photos/Photos_Church/PrevPastors/22.PNG";
import PrevPastor23 from "../../../../Photos/Photos_Church/PrevPastors/23.PNG";
import PrevPastor24 from "../../../../Photos/Photos_Church/PrevPastors/24.PNG";
import PrevPastor25 from "../../../../Photos/Photos_Church/PrevPastors/25.PNG";
import PrevPastor26 from "../../../../Photos/Photos_Church/PrevPastors/26.PNG";
import PrevPastor27 from "../../../../Photos/Photos_Church/PrevPastors/27.PNG";
import PrevPastor28 from "../../../../Photos/Photos_Church/PrevPastors/28.PNG";
import PrevPastor29 from "../../../../Photos/Photos_Church/PrevPastors/29.PNG";

import "./AreaDetails.css";
const areaclearinformation = [
    {
        title: "Agency",
        imagePath: ChurchPhoto1,
        prevpath: PrevPastor1,
        youtubelink: "https://www.youtube.com/@messiahministriesagency1400",
        info: `The IPC Andhra Pradesh State Council officially established the Agency Area on April 3, 2019, under the leadership of Pastor V. Isaac Samuel, who continues to serve faithfully as the Agency Area Pastor. The ministry is headquartered in Addatheegala, a tribal village located in the Alluri Sitarama Raju (ASR) district.Pastor Isaac Samuel was born in Rajavommangi village, also in the ASR district. At birth, he was named Vasa Krishnamayya by his parents. He was introduced to Christ by Pastor Ruben from IPC. After receiving baptism, he changed his name to Isaac Samuel. As he matured in his faith, he felt a profound calling to serve the Lord. In response to this calling, he pursued theological training at Zion Bible College in Vijayawada during the years 1981 and 1982. Upon completing his studies, he began pioneering a church in the village of Doddavaram.
        In 1983, Pastor K.K. Abraham learned of Pastor Isaac Samuel’s pioneering efforts and visited him. He prophesied that Pastor Isaac was called to continue the ministry he had begun in Addatheegala.Pastor K.K. Abraham, a native of Vazhoor in Kerala, pioneered a church in the tribal village of Addatheegala between 1975 and 1984. He began the ministry with a single family—the family of Mr. K. Rathakrishna Rao. Despite many challenges, including traveling alone to Addatheegala every weekend, Pastor Abraham faithfully ministered alongside the local believers. Through his evangelism and commitment, the church in Addatheegala was firmly established. During his time there, he met Pastor Isaac Samuel, mentored him, and encouraged him in ministry.
        Later, Pastor Abraham’s wife was diagnosed with a terminal illness, prompting his return to Kerala. As he transitioned out of the ministry in Addatheegala after nine years of dedicated service, he entrusted the leadership of the church to Pastor Isaac Samuel.
        It was Pastor Kristhdas who had initially introduced Pastor K.K. Abraham to Addatheegala and encouraged him to begin ministry in the region. Due to the dangers of traveling with family, Pastor Abraham journeyed alone each week. Moreover, he faced limited support at the outset of his ministry. Yet, by the grace of God, he persevered through numerous obstacles and established a church that continues to flourish to this day.
        In 1983, Pastor Isaac Samuel took up the ministry in Addatheegala, fully trusting in the Lord’s guidance. With unwavering faith, he began serving the tribal communities—a journey that began with a simple calling and has since grown into a vibrant and impactful ministry.
        Today, by the grace of God, the Agency Area is served by twenty-seven dedicated pastors, all working in unity to uplift and minister to the tribal population. We humbly ask for your continued prayers—for strength, unity, and the ongoing growth of God’s work in this region.
        The Agency Area stands as a living testimony to God’s faithfulness and the unwavering dedication of Pastor Isaac Samuel and his team. As the ministry expands, we covet your prayers to support the divine work being carried out in this blessed region.`
    },
    {
        title: "Anantapur",
        imagePath: ChurchPhoto2,
        prevpath: PrevPastor2,
        youtubelink: "https://www.youtube.com/@zhp2023",
        info: `Anantapur Ares is located in the Rayalaseema region on the Deccan Plateau in southwestern part of Andhra Pradesh, though sparsely populated region when compared to the coastal region, has been touched by God’s grace through the faithful work of IPC Pastors. While churches are fewer in this region, the spiritual impact is significant. Pastor Philip Abraham who was ministering at IPC Church at Hyderguda, Hyderabad was the “Rayalaseema Area Pastor” until his demise in 1986. Pastor Janumala Benjamin was appointed as the Rayalaseema Area Pastor by the IPC Andhra Pradesh State Council which he served faithfully until his demise in 1996.
        After the demise of Pastor Benjamin in 1996, IPC Andhra Pradesh State Council appointed Pastor Janumala Annas as Rayalaseema Area Pastor.  In 1998, Pastor Annas recognised the need for focused ministry in the ‘Anantapur district’ encouraged Pastor D. Yesudas to pioneer IPC work in Anantapur district. God flourished IPC work in Anantapur district under Pastor Annas and Pastor Yesudas leadership.  In 2015 Pastor Annas proposed to separate Anantapur Area from Rayalaseema Area and appoint Pastor Yesudas as the Anantapur Area Pastor which the IPC Andhra Pradesh State Council approved.
        Reflecting on his journey, Pastor Yesudas shares "I completed my theological training at Zion Bible College from 1987 to 1989. It was Apostle Janumala Benjamin who appointed me as an evangelist at Atmakur in 1995. Two years later, I was transferred to Cement Nagar, and in 1998, the State Council sent me to Anantapur District to serve." His pastoral journey included ministry at Mamillapalli (1998), Dharmavaram (1999–2005), and a continued focus on raising future leaders.
        "Since 2006, God placed a burden in my heart to encourage young people to pursue ministry training at Zion Bible College. By God’s grace, two of these young men are now pioneering churches: Pastor Annas Babu at Pulakunta since 2012, and Pastor James, who now pastors the church Pastor D. Yesudas started in Dharmavaram town in 2017."
        Pastor Yesudas continues to faithfully lead and serve, currently overseeing a team of 10 dedicated Pastors across Anantapur Area. His testimony is a living example of obedience to God’s call and the lasting fruit of faithful service.
        `
    },
    {
        title: "Annavaram",
        imagePath: ChurchPhoto3,
        prevpath: PrevPastor3,
        info: `The IPC Andhra Pradesh State Council officially established the Annavaram Area in 1981, with Pastor Bunga Yesudasu as the Area Pastor. However, the roots of this ministry go back to 1964, when Pastor S. Philip (Yanam) began ministering in the region, followed by Pastor Israel (Sankhavaram) in 1979. In 1981, Pastor Abraham Samuel restructured the ministry, formally establishing the Annavaram Area and appointing Pastor Yesudasu as its leader.
        Sharing about his journey, Pastor Yesudasu reflects "In the early days, many pastors and churches in Annavaram were unaware of the Pentecostal truth. Through God’s guidance and the efforts of Pastor B. Yesudasu he was able to bring Pentecostal revival and educate pastors and believers, spreading the message across numerous churches in Annavaram Area."
        Considering the age factor of Pastor B. Yesudasu, since 2005, the IPC Andhra Pradesh State Council appointed Pastor David, the son of Pastor Yesudasu, to assist in overseeing the area ministry and representing the Annavaram Area at council meetings. Currently, Pastor Bunga Yesudasu leads a team of fifteen pastors in the Annavaram Area. Please keep the pastors in your prayers as they continue their faithful service to the Lord.        `
    },
    {
        title: "Addanki",
        // imagePath: ChurchPhoto4,
        // prevpath: PrevPastor4,
        youtubelink: "https://www.youtube.com/@IpcchurchdarsiPastorMLukababug",
        info: `The Addanki Area was originally part of the ‘Guntur Area,’ with Pastor P. Abraham Samuel, as the Guntur Area Pastor since 1959. In 1991, Guntur Area Pastorship was passed on to his son, Pastor P. Noel Samuel. In 2004, the Guntur Area was divided into two, based on geographical localities: Guntur and Addanki. 
        Pastor P. Gabriel, who had been ministering at Nizampatnam, had the responsibility as ‘Guntur Area Pastor’ while Pastor James took charge of the Addanki Area until his passing in 2011. Following Pastor James’s demise, Pastor B. Abraham, who was serving at Nekarikallu, was appointed as the ‘Addanki Area Pastor’ by the IPC Andhra Pradesh State Council. At Present, Pastor M. Luka Babu is providing leadership as Addanki Area Pastor.
        Pastor Luka Babu shares his journey as follows —"I received my training at Zion Bible College from 1988 to 1990. Afterward, Pastor Abraham Samuel sent my wife and me to Darsi to pioneer a new work, where there were no Pentecostal believers or churches. We faced tremendous challenges, walking from village to village to spread the word of God. The financial struggles were real—we couldn’t always afford groceries, and many days we fasted due to lack of money. Tragically, we lost a child because we couldn’t afford medical care, but through it all, we trusted God’s plan and remained faithful."
        By God's grace, the ministry in Darsi has flourished. Pastor Luka Babu now leads a growing congregation, and under his leadership, there are twenty-seven ministers serving in the Addanki Area.
        `
    },
    {
        title: "Devarapalli",
        imagePath: ChurchPhoto5,
        prevpath: PrevPastor5,
        youtubelink: "",
        info: `The Devarapalli Area was established in 1980, with Pastor P.G. Eliya, appointed as the Area Pastor. Pastor Eliya's ministry began in 1960 under extremely challenging circumstances. With minimal resources, he relied on the support of the community, and his meals were simple, with gongura curry being a staple. Despite facing significant resistance—being barred from conducting prayer meetings, enduring stone pelting, and even having his bicycle deflated—he remained steadfast in his calling.
        Reflecting on his journey, Pastor Eliya shares —"Through unwavering faith and determination, I overcame these obstacles and grew in my service to God. Even now, at the age of 90, I continue to be involved in ministry, inspiring others to persevere through hardships with faith and dedication."
        Under his leadership, the Devarapalli Area has grown to include twenty-five pastors who continue the mission of spreading God’s word and strengthening the IPC ministry.
        `
    },
    {
        title: "Durgi",
        imagePath: ChurchPhoto6,
        prevpath: PrevPastor6,
        youtubelink: "",
        info: `In 2017, the IPC Andhra Pradesh State Council separated the ‘Macherla Area’ and formed the ‘Durgi Area’, appointing Pastor Arumulla Yohan as Durgi Area Pastor. 
        Pastor Yohan began his ministry by faith, facing significant challenges in the early days, including the absence of a place of worship. Undeterred by insults and opposition, he continued spreading the gospel across the surrounding villages.
        Reflecting on his journey, Pastor Yohan shares —"Though I faced many trials and insults, I never wavered in my faith. What began with just one or two believers has now grown into a congregation of 80 members. By God’s grace, our ministry continues to grow, and I am blessed to serve the Lord in this region."
        Pastor Yohan now leads a team of twenty-five pastors, working together to further the IPC ministry in the Durgi area. He has also trained his son to continue the work of the Lord, ensuring that the ministry remains strong and committed to God's service.
        `
    },
    {
    title: "Eluru",
    imagePath: ChurchPhoto7,
    prevpath: PrevPastor7,
    youtubelink: "",
    info: `The origins of the Indian Pentecostal Church (IPC) in Eluru can be traced back to Apostle P. M. Samuel, who traveled from Kerala to Eluru in 1932. During his ministry in Machilipatnam, he, along with Brother T. P. Gurupadam, visited Eluru to pray for Gurupadam’s sister, Rajya Lakshmi, who was seriously ill. Her miraculous healing marked the beginning of IPC’s ministry in Eluru.
    From 1936 to 1940, Pastor P. T. Chacko served as the first pastor to the early IPC believers in Eluru. He was succeeded by Pastors C. P. Thomas and C. A. Mathew, who each served short terms. In the early 1940s, Pastor Lukeson assumed leadership of the IPC congregation in Eluru, guiding it for two decades and notably organizing the State Annual Convention in the city.
    In 1963, Pastor T. S. Sastry succeeded Pastor Lukeson but later transitioned to another mission. Subsequently, in 1964, Pastor K. P. Devashayam was appointed Eluru Area Pastor by the IPC Andhra Pradesh State Council. He served faithfully until his passing in 1996. Pastor M. Peter was then appointed and led the area until his untimely demise in 2000.
    Following Pastor Peter’s death, the Council appointed Pastor D. Gabriel as Eluru Area Pastor in 2000. However, due to declining health, he was unable to continue providing active leadership. As a result, in 2003, the IPC Andhra Pradesh State Council appointed Pastor Pitta Davidu Raju as Eluru Area Pastor. Under his leadership, 43 pastors currently serve, continuing to bear witness to God’s blessings throughout the Eluru Area.`
    },
    {
    title: "Gannavaram",
    imagePath: ChurchPhoto8,
    prevpath: PrevPastor8,
    youtubelink: "https://www.youtube.com/@voiceofpentecost6398",
    info: `The Gannavaram Area was once part of Krishna Area, where Pastor P. Abraham Samuel served as the Krishna Area Pastor since 1959. After his heavenly home call in 1993, IPC Andhra Pradesh State Council appointed Pastor Ch. Eliah as Krishna Area Pastor. In 2004, Krishna Area was divided into Krishna Area and Vijayawada Area, and in 2016, it was further divided into Gannavaram Area and Machilipatnam Area. Pastor Ch. Eliah was Gannavaram Area Pastor until his untimely demise in 2022 due to COVID-19. Following his passing, Pastor Y. Salman Raju was appointed as the Gannavaram Area Pastor by the IPC Andhra Pradesh State Council.
    Pastor Y. Salman Raju’s life story is a powerful testimony of God’s redemptive power. He once opposed Jesus, mocking believers and throwing stones at them. However, a life-threatening illness changed everything. After being diagnosed with severe jaundice and given up by doctors, his mother’s persistent prayers resulted in a miraculous healing. This marked the beginning of Pastor Salman’s transformation.
    "I once opposed God and mocked His people, but in my weakest moment, God reached out, healed me, and called me into His service," Pastor Salman shares.
    After studying at Zion Bible College, Pastor Salman began his ministry in Ponangi, later moving to Telaprolu. He faced financial and personal struggles, but God continued to work miracles in his life. He went on to establish a church in Rajugari Narasannapalem and continues to minister there along with Telaprolu. Today, Pastor Salman leads thirty-five pastors in the Gannavaram Area, and his sons, Madhu Babu and Prem Kumar, who are also involved in ministry, support the work.        `
    },
    {
        title:"Gollavilli",
        imagePath: ChurchPhoto9,
        prevpath: PrevPastor9,
        youtubelink:"",
        info:`The Gollavalli Area, established by the IPC Andhra Pradesh State Council, has witnessed a rich legacy of faith, commitment, and growth. For many years, Pastor P. Manohar served as the Gollavalli Area Pastor, guiding the ministry with dedication until his passing in 2008. IPC Andhra Pradesh State Council appointed Pastor P. Manohar’s eldest Pastor Samuel Raju as “Gollavalli Area Pastor” and he continued faithful providing leadership until his untimely death due to COVID-19 in 2021. In the wake of Pastor Samuel Raju's passing, Pastor K. Krupa Paul was appointed as the Gollavalli Area Pastor by the IPC Andhra Pradesh State Council.
        Sharing the words of Pastor Krupa Paul —"I come from a lineage deeply rooted in the ministry of the Indian Pentecostal Church of God (IPC). My father, Pastor K.A. David, dedicated over 45 years of service to IPC, leaving behind a profound legacy. Following his example, I too committed myself to full-time ministry and with the guidance from Pastor P.L. Paramjyothi, I pursued theological education at Southern Asia Bible College, Bangalore, from 1983 to 1986. 
        In 1987, after completing my theological studies, I began ministering in Ambajipeta, East Godavari District. There, I was able to establish a church and build a church hall. I also took over the leadership of the IPC church in Razole, a congregation my father had faithfully served for 40 years until his passing in 2002. These two churches are now an integral part of the Gollavalli Area. My eldest son, Kandikatla Samuel Wesley, felt the call to ministry, leaving his career as an engineer at Nokia to serve God. He now leads the church in Razole, continuing the spiritual mission our family began.”
        With a heart devoted to ministry, Pastor Krupa Paul, along with his son K.S. Wesley are continuing the work that they have pioneered, nurturing churches and fostering spiritual growth. His commitment to God's calling has seen the flourishing of the Gollavalli Area, with eighteen pastors now serving under his leadership.
        `
    },
    {
        title:"Guntur",
        imagePath: ChurchPhoto10,
        prevpath: PrevPastor10,
        youtubelink:"https://www.youtube.com/@ipcchurchguntur",
        info:`The Guntur Area of IPC carries a legacy of strong spiritual leadership and enduring ministry. Pastor P. Abraham Samuel faithfully served as the Guntur Area Pastor since 1959. In 1991, the IPC Andhra Pradesh State Council appointed Pastor P. Noel Samuel, as Guntur Area Pastor and under his leadership the area flourished. In 2004, Pastor Noel Samuel transitioned to serve as the Vijayawada Area Pastor, and Pastor P. Gabriel, who was ministering at Nizampatnam, stepped into the Guntur leadership role. Due to his age related ill health, he later stepped down. Around 2013, Pastor K. Prakash Rao from Chilakaluripet was appointed as Guntur Area Pastor which he led until his passing in 2017. Following this, the Council appointed Pastor M. Korneli as the current Guntur Area Pastor.
        Testimony as Shared by Pastor M. Korneli —“I was born on October 15, 1953, in Peteru village. My journey with the Lord began in 1974 during a life-threatening illness. At the brink of death, God met me through the prayers and encouragement of a worker. I experienced divine healing and gave my life to Christ, receiving baptism from Pastor Thanam Isaac  on November 2, 1975.
        Obeying God’s call, I pursued theological training at Zion Bible College from 1977 to 1978. In 1981, I began ministry in Pallekona near Repalle, serving the Lord there for seven years. In 1988, under the guidance of IPC leadership, I was appointed to minister in Guntur, where I continue to serve faithfully.
        Over the years, God has enabled me to witness His power through miracles and the transformation of many lives. Despite challenges, His grace has sustained me. Today, I oversee thirty-five pastors in the Guntur Area, and it is my prayer to continue glorifying God through every soul reached and every life changed.”
        Pastor M. Korneli’s testimony reflects a life transformed by grace, healed by God, and devoted to lifelong service. His leadership and dedication have strengthened the Guntur Area and continue to inspire the next generation to live faithfully and serve boldly in God’s vineyard.
        `
    },
    {
        title:"Jaggayyapeta",
        // imagePath: ChurchPhoto11,
        // prevpath: PrevPastor11,
        youtubelink:"",
        info:`The IPC work in the Jaggayyapeta Area was pioneered between 1955 and 1960 by Pastor Didla Rathnam, whose faithful labor laid a strong spiritual foundation in the region. During his ministry he raised several pastors in and around Jaggayyapeta. Among those he mentored was Pastor Rathna Raju, who, after graduating from Zion Bible College, began ministering in the area in 1962. IPC Andhra Pradesh State Council appointed Pastor Rathna Raju as the Jaggayyapeta Area Pastor which he served for about a decade. He later branched out of IPC and started the Bethesda Pentecostal Fellowship in Jaggayyapeta in year 1982.
        Following his departure, Pastor M. P. John carried forward the Jaggayyapeta Area Pastor responsibilities for some years, after which Pastor K. T. Samuel was appointed by the IPC Andhra Pradesh State Council which he served sincerely until 2004. The leadership mantle then passed to Pastor Yesuratnam, and IPC Andhra Pradesh State Council appointed him as Jaggayyapeta Area Pastor which he served faithfully until stepping down due to age-related health issues. In 2021 Pastor K. Yohan, who is ministering at Bhimavaram, was appointed as Jaggayyapeta Area Pastor by the IPC Andhra Pradesh State Council. In 2023 IPC Andhra Pradesh State Council appointed Pastor L. Praveen Kumar as the Jaggayyapeta Area Pastor.
        Sharing his testimony, Pastor L. Praveen Kumar said  —“God has placed in my heart a clear vision – to raise faithful servants of God across Andhra Pradesh and Telangana, to plant churches, and to build up believers in strong spiritual foundations. I am continually inspired by the passion of the early apostles and leaders who laid down their lives for the Gospel, and I long to see that same Pentecostal fire reviving in our generation. Currently, I have the privilege of overseeing twenty-three pastors serving under the Jaggayyapeta Area. It is my prayer to see this number grow as more are called, trained, and sent out to fulfill the Great Commission. I earnestly seek your prayers and support as we move forward in faith, holding firm to the Pentecostal truths entrusted to us and guiding the next generation toward a deeper and more active walk with Christ.”
        This leadership marks a new chapter for the Jaggayyapeta Area – one focused on expansion, discipleship, and revival. Rooted in the legacy of past pioneers, Pastor Praveen Kumar’s vision brings fresh momentum to the ministry, sustaining the life of the Holy Spirit of the early church in today’s context.
        `
    },
    {
        title:"Kadapa",
        imagePath:ChurchPhoto12,
        prevpath: PrevPastor12,
        youtubelink:"https://www.youtube.com/@IPCCHURCHPRODDATUR",
        info:`Kadapa Area is located in the Rayalaseema region on the Deccan Plateau in southwestern part of Andhra Pradesh, though sparsely populated region when compared to the coastal region, has been touched by God’s grace through the faithful work of IPC Pastors. While churches are fewer in this region, the spiritual impact is significant. Pastor Philip Abraham who was ministering at IPC Church at Hyderguda, Hyderabad was the “Rayalaseema Area Pastor” until his demise in 1986. Pastor Janumala Benjamin was appointed as the Rayalaseema Area Pastor by the IPC Andhra Pradesh State Council which he served faithfully until his demise in 1996.  After the demise of Pastor Benjamin in 1996, IPC Andhra Pradesh State Council appointed Pastor Janumala Annas as Rayalaseema Area Pastor.
        In 2015, the IPC Andhra Pradesh State Council separated Kadapa Area from Rayalaseema Area and appointed Pastor Lakku Paul from Allagadda as Kadapa Area Pastor. After Pastor Paul’s passing in 2022, Pastor B. John Babu took leadership.
        Pastor John Babu’s journey began in his native village, Mandaluru (Allagadda Mandal, Nandyal District). Through Pastor L. Paul’s ministry, he was spiritually transformed during college. After completing Bible training in 1999, he started ministry in Proddutur, Kadapa District. With vision and faith, he built a strong congregation and church.
        Today, Pastor John Babu leads the Kadapa area, continuing the legacy of his spiritual father. He currently oversees a team of 18 pastors.
        `
    },
    {
        title:"Kakinada",
        imagePath:ChurchPhoto13,
        prevpath: PrevPastor13,
        youtubelink:"",
        info:`During World War II, Telugu believers in Rangoon which is located in modern day Myanmar were divinely led to return to India. Pastor K. G. Paul and Pastor M. Philip were among the refugees. Apostle P. M. Samuel appointed Pastor K. G. Paul as Kakinada Area Pastor.  In 1960, following Pastor K. G. Paul’s departure to another ministry, Apostle P. M. Samuel renamed the region Injaram Area and appointed Pastor M. Philip. After Pastor M. Philip’s passing in 2000, Pastor Ch. Philip was appointed Area Pastor and served faithfully until 2022.
        In 2022, the Council established a separate Kakinada Area with Pastor Mortha Mosi as Area Pastor. Pastor Mosi, son of Pastor M. Ashirvadam, previously served as a teacher at Zion Bible College and ministering in Seetharamapuram. Under his guidance, the area is growing steadily, with his son Pastor Ernest Ashirvadam who is assisting Pastor Mosi in pastoral ministry.
        Currently, there are 16 pastors serving under the leadership of Pastor Mortha Mosi in the Kakinada Area.`
    },
    {
        title:"Kondapuram",
        imagePath:ChurchPhoto14,
        prevpath: PrevPastor14,
        youtubelink:"https://www.youtube.com/@akhilsamuel996",
        info:`Kondapuram is also part of the Rayalaseema region on the Deccan Plateau in southwestern part of Andhra Pradesh, though sparsely populated region when compared to the coastal region, has been touched by God’s grace through the faithful work of IPC Pastors. While churches are fewer in this region, the spiritual impact is significant. Pastor Philip Abraham who was ministering at IPC Church at Hyderguda, Hyderabad was the “Rayalaseema Area Pastor” until his demise in 1986. Pastor Janumala Benjamin was appointed as the Rayalaseema Area Pastor by the IPC Andhra Pradesh State Council which he served faithfully until his demise in 1996.  After the demise of Pastor Benjamin in 1996, IPC Andhra Pradesh State Council appointed Pastor Janumala Annas as Rayalaseema Area Pastor.
        In 2015, Pastor Annas encouraged Pastor D. Yesudas to lead pastors in and around Anantapur, which led to the formation of Anantapur Area.  Initially, Kondapuram churches were under Anantapur Area. In January 2021, IPC Andhra Pradesh State Council created Kondapuram Area and appointed Pastor Lomada Pushpa Raju as Area Pastor.
        Following a divine call, Pastor Pushpa Raju began ministry in Chenchaiah Gari Palle, where he saw visions and witnessed miracles, including healing of leprosy. Through these, many believed, and the ministry expanded to towns like Brahmamgari Matam, Kondapuram, Jammalamadugu, Pulivendula, Prodduturu, Devuni Kadapa, Kondepalli, and Vasapuram. Currently, 12 pastors serve under his leadership.
        `
    },
    {
        title:"Kulla",
        imagePath:ChurchPhoto15,
        prevpath: PrevPastor15,
        youtubelink:"https://www.youtube.com/@joysonkeys",
        info:`Similar to Kakinada Area, Kulla Area traces its origin to World War II, Telugu believers in Rangoon which is located in modern day Myanmar were divinely led to return to India. Pastor K. G. Paul and Pastor M. Philip were among the refugees. Apostle P. M. Samuel appointed Pastor K. G. Paul as Kakinada Area Pastor.  In 1960, following Pastor K. G. Paul’s departure to another ministry, Apostle P. M. Samuel renamed the region Injaram Area and appointed Pastor M. Philip. After Pastor M. Philip’s passing in 2000, Pastor Ch. Philip was appointed Kulla Area Pastor and served faithfully until 2022.
        In 2022, the IPC Andhra Pradesh State Council appointed his son, Pastor Ch. Jyothi Babu, as Kulla Area Pastor. He now continues the rich legacy established by his father.  Currently, 25 pastors are ministering under the leadership of Pastor Jyothi Babu in the Kulla Area.
        `
    },
    {
        title:"Kurnool",
        imagePath: ChurchPhoto16,
        prevpath: PrevPastor16,
        youtubelink:"",
        info:`Kurnool Area is also part of the Rayalaseema region on the Deccan Plateau in southwestern part of Andhra Pradesh, though sparsely populated region when compared to the coastal region, has been touched by God’s grace through the faithful work of IPC Pastors. While churches are fewer in this region, the spiritual impact is significant. Pastor Philip Abraham who was ministering at IPC Church at Hyderguda, Hyderabad was the “Rayalaseema Area Pastor” until his demise in 1986. Pastor G.R. Purushottam and Pastor Janumala Benjamin were appointed as Hyderabad and Rayalaseema Area Pastors respectively. Though geographically closer to Rayalaseema, several IPC pastors in Kurnool remained affiliated with Hyderabad due to long-standing ties.
        After Telangana separated from Andhra Pradesh in June 2014, IPC Pastors in Rayalaseema who were associated with Hyderabad joined IPC Andhra Pradesh. The IPC AP State Council appointed Pastor Swami Das (ministering in Srisailam) as Kurnool Area Pastor, with his son-in-law Pastor T. Yesudas assisting and serving as Associate Kurnool Area Pastor and IPC AP State Council member representing Kurnool Area.
        Pastor T. Yesudas began ministry in 1998 at N.G.O’s Colony, Nivarthi Nagar, Nandyal, starting in a small hut and facing immense challenges. In 2000, land was acquired, and by 2005, a church was dedicated with the support of leaders like Pastor John Sundara Rao.
        Now, Pastor Swami Das due to his age factor and also because of his location of ministry at Srisailam which is located in a hilly forest area the IPC Andhra Pradesh State Council, appointed Pastor Yesudas as Kurnool Area Pastor.
        Pastor Yesudas oversees a team of 14 pastors in the Kurnool Area. His journey reflects perseverance and God’s provision.
        `
    },
    {
        title:"Machilipatnam",
        // imagePath:ChurchPhoto17,
        // prevpath: PrevPastor17,
        youtubelink:"",
        info:`Machilipatnam Area was once part of Krishna Area, where Pastor P. Abraham Samuel served as the Krishna Area Pastor since 1959. After his heavenly home call in 1993, IPC Andhra Pradesh State Council appointed Pastor Ch. Eliah as Krishna Area Pastor. In 2004, Krishna Area was divided into Krishna Area and Vijayawada Area, and in 2016, it was further divided into Gannavaram Area and Machilipatnam Area with Pastor A. Finny Samuel appointed as Machilipatnam Area Pastor.
        Pastor Finny Samuel hails from a spiritual lineage. His father, Pastor A. D. Isaac, left his government job in 1956 to attend Zion Bible College and dedicated the next 51 years to ministry across many regions, including Machilipatnam.
        In 1993, Pastor Finny began his ministry alongside his father. He married Eunice, daughter of Pastor D. Ratnam, in 2000. After Pastor A. D. Isaac’s passing in 2007, Pastor Finny Samuel took over the IPC church in Machilipatnam and expanded it significantly.
        His ministry has grown to include churches in Gilakaladindi, Balaramunipeta, Naveen Mittal Colony, YSR Nagar, and Bandaru Kota. He continues to serve faithfully and prays for his son, Dennis Naison Isaac, to carry forward the family legacy.
        Currently, the Machilipatnam Area includes 31 pastors under the leadership of Pastor Finny Samuel.
        `
    },
    {
        title:"Mandapeta",
        imagePath: ChurchPhoto18,
        prevpath: PrevPastor18,
        youtubelink:"",
        info:`Since 2013, Pastor T. Antony from Kerala has provided leadership and financial support to approximately 40 Pentecostal pastors in the Mandapeta Area (East Godavari District). In December 2021, the IPC Andhra Pradesh State Council officially recognized this work, appointing Pastor T. Antony as Mandapeta Area Pastor and Pastor P. T. James Paul as Area-in-Charge Pastor.
        This ministry traces its roots to Pastor P. Prakasham, a Zion Bible College graduate from 1968. He served in Prathipadu and the surrounding villages and also in Eluru. Inspired by his dedication, all four of his sons followed his footsteps in ministry across Yeleswaram, Mandapeta, and Eluru.
        His youngest son, Pastor Prakash Paul, received Bible training in Kerala and collaborated with Pastor Antony. With active involvement from Pastor P. T. James Paul and Pastor P. Swatantra Kumar, the ministry began as a fellowship of like-minded pastors and has since grown into a thriving area with strong IPC support.
        Today, the Mandapeta Area flourishes with 40 pastors serving under the leadership of Pastor T. Antony and Pastor P. T. James Paul.`
    },
    {
        title:"Macherla",
        imagePath: ChurchPhoto19,
        prevpath: PrevPastor19,
        youtubelink:"",
        info:`Macherla Area was originally part of “Hyderabad Area” under Pastor Philip Abraham until his demise in 1986.  After Pastor Philp Abraham’s demise Pastor G.R. Purushotham succeeded as Hyderabad Area Pastor.
        In 1996, the IPC Andhra Pradesh State Council recognized the growing ministry in the Palnadu region and officially formed the Macherla Area, appointing Pastor K. J. Devabiksham as the first and current Macherla Area Pastor.
        Pastor Devabiksham’s ministry journey began with a divine calling. Born as the only son after six daughters in response to his parents’ fervent prayers, he was named “Devabiksham,” meaning divine alms, and dedicated to God’s service. In 1969, he received a vision and heard God’s voice, compelling him to begin full-time ministry.
        He began as a co-worker under Pastor K. V. Joseph at Nagarjuna Sagar and then moved into pioneering work across the Palnadu region. He spread the gospel across 18 mandals, often traveling on foot or by bicycle, enduring insults, accusations, and hardships. Yet, by God’s grace, his tireless efforts bore fruit—establishing churches, raising 82 pastors, and building a strong spiritual foundation.
        Today, 21 pastors serve faithfully under the leadership of Pastor Devabiksham and his son, Pastor Eliazer, continuing the mission to expand and strengthen IPC churches across the Macherla Area. Pastor Devabiksham’s hope is that the next generation will carry this legacy with the same passion and perseverance.
        `
    },
    {
        title:"Mortha",
        // imagePath: ChurchPhoto20,
        // prevpath: PrevPastor20,
        youtubelink:"https://www.youtube.com/@EPMthewordofGod",
        info:`The Mortha Area was formally established in 1970, with Pastor K. Jeevarathnam as the first Mortha Area Pastor. Pastor Jeevarathnam laid a strong spiritual foundation that continues to guide the area even after his homegoing in 20-02-2011.
        Following his passing, the IPC Andhra Pradesh State Council appointed Pastor K. Lazar as Mortha Area Pastor. Later, in 29-11-2022, Pastor K. Vijaya Kumar, son of Pastor K. Jeevarathnam, was appointed as the current Mortha Area Pastor.
        Growing up witnessing his parents’ unwavering faith and commitment, Pastor Vijaya Kumar developed a deep-rooted call to ministry. Despite various hardships, his parents led with resilience, and that legacy now fuels his leadership. Pastor Vijaya Kumar encourages the younger generation to remain strong in their faith amidst trials and continues to prepare people for the Kingdom of God.
        Currently, the Mortha Area is served by 12 pastors under the leadership of Pastor Vijaya Kumar.`
    },
    {
        title:"Nandyal",
        imagePath: ChurchPhoto21,
        prevpath: PrevPastor21,
        youtubelink:"",
        info:`Nandyala Area is located in the Rayalaseema region on the Deccan Plateau in southwestern part of Andhra Pradesh, though sparsely populated region when compared to the coastal region, has been touched by God’s grace through the faithful work of IPC Pastors. While churches are fewer in this region, the spiritual impact is significant. Pastor Philip Abraham who was ministering at IPC Church at Hyderguda, Hyderabad was the “Rayalaseema Area Pastor” until his demise in 1986.
        Pastor J. Benjamin, in 1968, received a divine vision and began ministry in Nandyal, expanding IPC’s reach across Rayalaseema. which he served faithfully until his demise in 1996.  Pastor Janumala Benjamin was appointed as the Rayalaseema Area Pastor by the IPC Andhra Pradesh State Council which he served faithfully until his demise in 1996.  After the demise of Pastor Benjamin IPC Andhra Pradesh State Council appointed Pastor Janumala Annas as Rayalaseema Area Pastor.
        Carrying his father’s spiritual burden, Pastor Annas now leads the Nandyala Area. His son, Pastor Janumala Benjamin Jr., serves as the current IPC Nandyala church pastor, continuing the ministry legacy.
        Under Pastor Annas’ leadership, there are 14 pastors currently serving in Nandyala Area. He requests prayer for the ministry’s continued growth and faithfulness.`
    },
    {
        title:"Ongole",
        imagePath: ChurchPhoto22,
        prevpath: PrevPastor22,
        youtubelink:"https://www.youtube.com/@ipcchurchongole9948",
        info:`Ongole Area was part of the broader Prakasam & Nellore Districts under the leadership of Pastor K. R. Yesudas, who served over 20 IPC pastors in the region.
        Pastor G. Bhagavan Das, who began ministering in Ongole in 1984, played a vital role in strengthening the IPC work in these two districts of Andhra Pradesh and also built a vibrant church in Ongole city.
        When Pastor K. R. Yesudas left IPC along with many pastors, only Pastor G. Bhagavan Das and Pastor Yacob remained committed to IPC work. Recognizing their loyalty, IPC Andhra Pradesh State Council appointed Pastor Bhagavan Das as Ongole Area Pastor.
        Together with Pastor Yacob and Brother Ruben, Pastor Bhagavan Das expanded IPC work throughout the Ongole and Nellore districts, sending young leaders to Zion Bible College and planting churches in areas like Santhanuthalapadu, Pokuru, Mangamuru, Vetapalem, Chintagumpa, and Naladalapuru.
        Pastor G. Bhagavan Das now serves as the Ongole Area Pastor and President of IPC Andhra Pradesh State. Under his leadership, 19 pastors minister across the Ongole Area. He is also recognized as a revival speaker and mentor to the next generation.`
    },
    {
        title:"Peravali",
        imagePath: ChurchPhoto23,
        prevpath: PrevPastor23,
        youtubelink:"",
        info:`The Peravali Area was part of Mortha Area until the demise of Mortha Area Pastor K. Jeevarathnam in 2010. In 2011, IPC Andhra Pradesh State Council appointed Pastor K. Lazar to lead the Mortha Area.
        Pastor Lazar’s ministry is deeply rooted in a legacy of faith and dedication. His father, Pastor K. Samuel, served faithfully from 1965 to 2000. After Pastor Samuel’s passing in 2000, the IPC Andhra Pradesh State Council entrusted Pastor Lazar with leading the church in Peravali.
        In 2002, inspired by teachings on “cell groups,” Pastor Lazar established 11 cell groups. Over time, these groups developed into independent churches, significantly expanding the ministry. Today, Pastor Lazar continues to serve with dedication, supported by his son Sam, a Zion Bible College graduate. The Peravali Area now includes 13 pastors under Pastor Lazar’s leadership.`
    },
    {
        title:"Repalli",
        imagePath: ChurchPhoto24,
        prevpath: PrevPastor24,
        youtubelink:"https://www.youtube.com/@jshadrakipc5923",
        info:`The Repalli Area was originally part of the larger Guntur Area, which carries a legacy of strong spiritual leadership and enduring ministry. Since 1959, Pastor P. Abraham Samuel faithfully served as the Guntur Area Pastor. In 1991, the IPC Andhra Pradesh State Council appointed Pastor P. Noel Samuel as the Guntur Area Pastor, under whose leadership the area flourished.
        Due to the rapid growth of the IPC work in Guntur district, pastors faced difficulties travelling long distances to attend monthly pastors’ meetings. It also became inconvenient to the host pastor and their churches to accommodate all pastors in Guntur Area during the monthly gatherings. To address this, the IPC Andhra Pradesh State Council reorganized the Guntur Area into Guntur and Addanki Areas, appointing Pastor James, who ministered in Addanki, as the Addanki Area Pastor. In 2004, Pastor Noel Samuel was transferred to lead IPC work in Gunadala and also became the Vijayawada Area Pastor. Pastor P. Gabriel, who served in Nizampatnam, was appointed as the Guntur Area Pastor. Around 2013, due to health reasons, Pastor Gabriel stepped down, and Pastor K. Prakash Rao from Chilakaluripet was appointed, serving until his passing in 2017. Following his death, Pastor M. Korneli was appointed as the Guntur Area Pastor.
        In 2020, the Tenali Area was separated from Guntur Area, and Pastor J. Shadrak was appointed as Tenali Area Pastor. Continued growth led to the creation of Repalli Area from the Tenali Area in 2023. Pastor Shadrak was appointed as Repalli Area Pastor, and Pastor A. Methuselah took on the Tenali Area Pastor role.
        In Pastor Shadrak’s words —“I began my ministry in August 1988 at the IPC church in B.K. Palem. In 1990, I moved to Solasa, where I served until 2004. During this time, I faced many challenges, including personal losses and opposition from church members. Yet, God provided miraculously—for instance, a man named Pulla Reddy  gave land, enabling me to build a new church. Over the years, I established three new churches and baptized 500 members. I was blessed to raise and send out pastors like Pastor Peturu Reddy. In 2004, I was transferred to Kopparru church, where the congregation grew from 10 to 100 members in just two years. I also led prayer meetings in places such as Chirala beach and Kondaveedu hills. In 2016, I was transferred to Pallekona, continuing my service faithfully. Eventually, I was appointed as the Repalli Area Pastor. Throughout my ministry, I have faced many trials, but God’s grace has sustained me. Today, the Repalli Area is blessed with 21 pastors, and I remain committed to advancing God’s work here. I humbly ask for your prayers and support as we seek to grow and strengthen the ministry in this region.”`
    },
    {
        title:"Tenali",
        imagePath: ChurchPhoto25,
        prevpath: PrevPastor25,
        youtubelink:"https://www.youtube.com/@ipc_tenali",
        info:`The Tenali Area was created in 2020 when the IPC Andhra Pradesh State Council reorganized the Guntur Area—whose legacy of spiritual leadership began with Pastor P. Abraham Samuel in 1959—into Guntur and Addanki Areas, and later into Tenali and Repalli Areas. Pastor J. Shadrak initially led Tenali, and in 2023, Pastor A. Methuselah was appointed as the Tenali Area Pastor.
        Pastor A. Methuselah shares —
        “When I took over as Area Pastor, we had 14 pastors serving across Tenali. By God’s grace and mercy, our team has doubled to 28 pastors. I thank the Lord for His favor in this growth and pray that His grace continues to guide and sustain us as we reach more souls with the Gospel.”
        Under his leadership, Tenali Area is experiencing renewed vigor in ministry, and Pastor Methuselah invites your prayers for continued unity, wisdom, and expansion of God’s work in the region.
        `
    },
    {
        title:"Vizianagaram",
        imagePath:ChurchPhoto26,
        prevpath: PrevPastor26,
        youtubelink:"https://www.youtube.com/@ipc-churchvizianagaram",
        info:`The Vizianagaram Area was established by the IPC A. P. State Council in 2022, with Pastor Pilla Anand Babu as Vizianagaram Area Pastor. 
        The roots of the IPC ministry in this region date back to 1964 when it began in Visakhapatnam. By 1965, the ministry expanded to the Tadipudi area, and in 1970, it reached the Vizianagaram Cantonment area through Pastor Moses. Starting with just two or three believers, the ministry has grown significantly over the years. 
        Today, by God’s grace, the IPC Vizianagaram area boasts 70 churches under the leadership of Pastor Pilla Anand Babu, continuing the mission to spread the gospel and foster community growth.
        `
    },
    {
        title:"Vijayawada",
        imagePath: ChurchPhoto27,
        prevpath: PrevPastor27,
        youtubelink:"https://www.youtube.com/@ipcapstate",
        info:`The Vijayawada area, established in the 1940s, holds a rich history of ministry and spiritual leadership. Apostle P. M. Samuel, who arrived in Andhra Pradesh from Kerala in 1932, played a pivotal role in its foundation. After serving in Machilipatnam and Eluru, following divine guidance he settled in Vijayawada, a city with excellent railway and road transportation facilities.
        This legacy was carried forward by his son, Pastor P. Abraham Samuel, who—after pursuing his theological studies in the United States—returned in 1959 to assist Apostle P. M. Samuel. He oversaw the IPC work in Krishna and Guntur areas until his untimely death in 1993. Following Pastor P. Abraham Samuel’s demise, the IPC A.P. State Council appointed Pastor Ch. Eliah as Krishna Area Pastor from 1993 to 2004. In 2004 the Council separated the IPC churches in and around the greater Vijayawada Municipal Corporation as the “Vijayawada Area” and appointed Pastor P. Noel Samuel—then serving the Guntur Area—as Vijayawada Area Pastor.
        Over decades, the area witnessed remarkable growth under their stewardship, including the establishment of numerous churches in line with the IPC Constitution. Today, under Pastor P. Noel Samuel’s leadership—and with dedicated leaders like Pastor S. Abraham, Pastor G. Mrutyumjayudu, Pastor S. John, Pastor Venu, and Pastor P. B. V. S. Gideon—the Vijayawada Area team of 131 pastors meets monthly to foster collaboration, spiritual growth, and the next generation of leaders.
        `
    },
    {
        title:"Visakhapatnam",
        imagePath: ChurchPhoto28,
        prevpath: PrevPastor28,
        youtubelink:"",
        info:`The Visakhapatnam Area was established in 1962, with Pastor Isaac Nathan as the first Visakhapatnam Area Pastor. In 1965 Pastor Isaac Nathan left IPC and joined World Missionary Evangelism.
        IPC A. P. State Council appointed Pastor K. C. Mathew, as Visakhapatnam Area Pastor. Pastor K. C. Mathew served as Visakhapatnam Area Pastor until 1982 before departing IPC work to help found COTR Theological Seminary at Bheemunipatnam. 
        IPC A. P. State Council appointed Pastor Krupa Rakshna as Visakhapatnam Area Pastor which he shepherded the area until his death in 1996. 
        The IPC A.P. State Council appointed Pastor Sanjeeva Rao, in 1996 who faithfully led the Visakhapatnam Area. Due to Pastor Sanjeeva Rao’s age-related ill health, Pastor B. E. Vijaya Kumar was appointed by the IPC A.P. State Council as Assistant Visakhapatnam Area Pastor in 2018 and succeeded him as Visakhapatnam Area Pastor after the demise of Pastor Sanjeeva Rao in 2021. 
        To inspire future generations, Pastor Vijaya Kumar emphasizes shared responsibility—delegating tasks to various leaders to foster enthusiasm and collective ownership of the mission. Under his leadership, 60 pastors work together to expand the ministry’s impact throughout the region.
        `
    },
    {
        title:"Waltair",
        //imagePath: ChurchPhoto29,
        //prevpath: PrevPastor29,
        youtubelink:"",
        info:`The Waltair Area was established in 2022, with Pastor Kurvilla Varghese as its founding Area Pastor. In its early days, the ministry overcame challenges including financial hardship, political unrest, and spiritual struggles, alongside basic needs like shelter and food scarcity. Despite these obstacles, the focus remained on teaching and creating opportunities to inspire the new generation.
        Today, by God’s grace and under Pastor Varghese’s leadership, 44 pastors serve the Waltair Area, committed to building and strengthening the ministry for years to come.
        `
    },
    {
        title:"Kreesthurajapuram",
        //imagePath: ChurchPhoto30,
        // prevpath: "../../../Photos/Photos_Church/PrevPastors/1.PNG",
        youtubelink:"",
        phoneNUmber:"8886428778",
        info:`The Vijayawada Area was established in the year 2007, with Pastor P. Noel Samuel  serving as the Area Pastor. By the grace of God, the ministry began with 70 pastors and gradually grew—first to 100 pastors, and eventually to 150—as the area expanded. Following the COVID-19 pandemic, the Vijayawada Area was reorganized and divided into five separate regions:Vijayawada Area,Mangalagiri Area,Nunna Area,Moolapadu Area,Chittapur Area.Currently, there are 50 ministers actively serving in the Vijayawada Area.`
    },
    {
        title:"Mulapadu",
        imagePath: ChurchPhoto31,
        //prevpath: "../../../Photos/Photos_Church/PrevPastors/1.PNG",
        youtubelink:"https://www.youtube.com/@zionprayerhousemulapadu909",
        phoneNUmber:"9440660153",
        info:`My name is Shaik Jhan Saida, and I was born into a Muslim family. In 1989, I received water baptism, and in 1990, I was filled with the Holy Spirit. I joined Zion Bible College in 1993–1994 for theological training, and later pursued a Bachelor of Theology at CIBC, Itarsi, from 1994 to 1996. While still undergoing Bible training, I began ministering in the village of Moolapadu in 1994. In 1996, my wedding was officiated by Pastor C.H. Sudarshanam and Pastor Noel Samuel . That same year, I was anointed as a pastor in Moolapadu under the banner of the Indian Pentecostal Church (IPC). Since then, by God’s grace, I have been faithfully serving in the same village. Today, I pastor a congregation of around 700 believers. The Lord has blessed me with a daughter and a son. Since 2020, I have also been serving as the Area Pastor for Moolapadu under IPC, where 21 pastors are currently ministering.`
    },
    {
        title:"Nunna",
        imagePath: ChurchPhoto32,
        //prevpath: "../../../Photos/Photos_Church/PrevPastors/1.PNG",
        youtubelink:"",
        phoneNUmber:"9849858609",
        info:"The Nunna area was established in 2020 during the COVID-19 pandemic. Until then, it was part of the Vijayawada area. However, due to the challenges of gathering pastors in one place during that period, the Vijayawada area was divided into smaller regions, leading to the formation of the Nunna area. The first area pastor was the late Pr. Ramesh . In the early days, despite the difficulties brought on by the pandemic, God's grace enabled the pastors in the newly formed area to come together, support one another, and strengthen their ministry. It was a time when workers could encourage each other and extend help to those in need. Currently, 18 Pastors and 2 Pastorammas are faithfully serving in the Nunna area."
    },
    {
        title:"Mangalagiri",
        imagePath: ChurchPhoto33,
        //prevpath: "../../../Photos/Photos_Church/PrevPastors/1.PNG",
        youtubelink :"https://www.youtube.com/@IPCMruthyumjayudughanta",
        phoneNUmber:"9441692697",
        info:"In 1999, Pastor G Mruthumjayudu began his ministry in Mangalagiri, answering God's call to serve a community facing significant hardships.  Widespread illiteracy hampered progress and individual well-being, while numerous young people struggled with addictions, further hindering community development.  Pastor Mruthumjayudu dedicated himself to addressing both the spiritual and practical needs of the people.  He focused on inspiring hope and positive transformation, particularly among the youth.  From the outset, his wife and children have been essential partners in his ministry, providing invaluable support and contributing their unique skills.Pastor Mruthumjayudu's ministry has had a profound impact.  He has guided countless young people to embrace Christianity, providing them with a strong faith foundation and leading them away from destructive behaviors.  This spiritual guidance has empowered them to overcome addictions and pursue positive change.  Consequently, the community has seen a significant increase in literacy, opening new opportunities and empowering individuals to improve their lives.  His ministry has expanded significantly.  His initial congregation has grown to 200 members, and he has established two additional church branches, broadening his reach and influence.  He leads a variety of ministries, including all-night prayer services, women's meetings, men's prayer gatherings, Sunday school, and youth programs, all focused on spiritual growth and community betterment.  Currently, he mentors 17 pastors, further extending his impact.  His wife and children remain integral to his ministry, working alongside him to serve the community and share the Gospel."
    },
    {
        title:"Chithapur",
        imagePath: ChurchPhoto34,
        //prevpath: "../../../Photos/Photos_Church/PrevPastors/1.PNG",
        youtubelink:"",
        phoneNUmber:"9849858609",
        info:`In 2021, during the COVID-19 pandemic, several sub-areas were separated from the Vijayawada area. Under the leadership of our organization’s head, P. Noel Samuel , Chittapur was designated as a sub-area, and I was appointed as the in-charge. I was born in Kovvali village near Eluru. Back in 1934–35, P.M. Samuel , P.T. Chacko , and their ministry team stayed for some time in a room at my grandfather’s house, preaching the Gospel, even though our family were idol worshippers at the time. According to God’s plan, through their prayers, I was later transferred to the Visakhapatnam area for work. There, through my friend Caleb, I was introduced to Pastor B. Martin Luther  of IPC BHPV Church. Under his preaching, I repented, received baptism, and began to grow spiritually. Responding to God’s call for ministry, I was sent by our spiritual father to Zion Bible College. After completing my training in 2001–02, I was appointed by Noel  on May 2, 2002, along with my wife, to serve as wardens at the Zion Girls Home in Kondaparva. We began conducting worship services in one of the hostel halls, initially with just the hostel girls. Over time, the girls’ parents and local villagers also began to attend. By God’s grace, many experienced deliverance, blessings, and healing. On October 15, 2002, 15 people received baptism after removing their ornaments. We served in the hostel for two years, faithfully doing the Lord’s work. Since then, the ministry has continued to grow and reach surrounding villages. Currently, 16 pastors are actively serving in the Chittapur area.`
    },
]
function AreaDetails() {
    const navigate = useNavigate();
    const { index } = useParams();
    const areaIndex = parseInt(index, 10);
    const area = areaclearinformation[areaIndex-1];
    const [currentImage, setCurrentImage] = useState(area ? area.imagePath : "");

    useEffect(() => {
        if (!area) return;
        if(areaIndex == 29)
        {
            setCurrentImage(null);
            return;
        }
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) =>
                prevImage === area.imagePath ? (!area.prevpath? area.imagePath : area.prevpath): area.imagePath
            );
        }, 5000);
        return () => clearInterval(intervalId);
    }, [area]);

    if (!area) {
        return <div className="error">No information available for this area.</div>;
    }
    const handleBackToMainPage = () => {
        navigate('/locations');
    }
    return (
        <div>
        <h1 className="area-heading">History - {area.title} Church</h1>
        <section className="history">
            <div className="history-content">
                {currentImage && (
                    <div className="history-image">
                        <img src={currentImage} alt={`${area.title} Historical`} />
                    </div>
                    )}
                <div className="history-details">
                    {area.youtubelink && (
                    <a
                    className="youtube-btn-pastor"
                    href={area.youtubelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Catch Up on
                    </a>
                    )}
                    {area.phoneNUmber && (
                        <p className="phone-supp">Phone Number : {area.phoneNUmber}</p>
                    )}
                    <h2 className="heading-area-details">Our Story</h2>
                    <div className="history-text">
                        <p>{area.info}</p>
                    </div>
                </div>
            </div>
        </section>
        <div className="prev-page">
            <button className="prev-page" onClick={handleBackToMainPage}> Return</button>
      </div>
        </div>
    );
}
export default AreaDetails;

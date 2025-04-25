import './Cards.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";
import img1 from './assets/img1.webp';
import img2 from './assets/img2.webp';
import img3 from './assets/img3.webp';
import img4 from './assets/img4.webp';
import img5 from './assets/img5.webp';
import img6 from './assets/img6.webp';
import img7 from './assets/img7.webp';
import logo1 from './assets/logo1.webp';
import logo2 from './assets/logo2.webp';
import logo3 from './assets/logo3.webp';
import logo4 from './assets/logo4.webp';
import logo5 from './assets/logo5.webp';
import logo6 from './assets/logo6.webp';
import logo7 from './assets/logo7.webp';

function Cards(){

    const Cards=[
        {
            img:img1,
            profile:logo1,
            name:"Alfrey Davilla",
            tag:"PRO",
            likes:"96",
            views:"18.3k"
        },
        {
            img:img2,
            profile:logo2,
            name:"BL/S",
            tag:"TEAM",
            likes:"36",
            views:"36"
        },
        {
            img:img3,
            profile:logo3,
            name:"Afterglow",
            tag:"TEAM",
            likes:"3k",
            views:"6k"
        },
        {
            img:img4,
            profile:logo4,
            name:"Gert venn",
            tag:"PRO",
            likes:"23",
            views:"28"
        },
        {
            img:img5,
            profile:logo5,
            name:"Emote",
            tag:"TEAM",
            likes:"358",
            views:"256"
        },
        {
            img:img6,
            profile:logo6,
            name:"Lucian Radu",
            tag:"TEAM",
            likes:"567",
            views:"2k"
        },
        {
            img:img7,
            profile:logo7,
            name:"Upnow Studio",
            tag:"PRO",
            likes:"197",
            views:"500"
        },
        {
            img:img1,
            profile:logo1,
            name:"Nixtio",
            tag:"PRO",
            likes:"243",
            views:"691"
        },
        {
            img:img2,
            profile:logo2,
            name:"Halo Lab",
            tag:"PRO",
            likes:"12k",
            views:"200k"
        },
        {
            img:img3,
            profile:logo3,
            name:"UNOM Design",
            tag:"TEAM",
            likes:"412",
            views:"500"
        },
        {
            img:img4,
            profile:logo4,
            name:"OutCrowd",
            tag:"TEAM",
            likes:"623",
            views:"1k"
        },
        {
            img:img5,
            profile:logo5,
            name:"ThreeDee",
            tag:"PRO",
            likes:"537",
            views:"17k"
        },
        {
            img:img6,
            profile:logo6,
            name:"Zalo Estives",
            tag:"TEAM",
            likes:"12.3k",
            views:"190k"
        },
        {
            img:img7,
            profile:logo7,
            name:"Vadium Carazen",
            tag:"PRO",
            likes:"746",
            views:"600"
        },
        {
            img:img1,
            profile:logo1,
            name:"Ronas IT",
            tag:"TEAM",
            likes:"135",
            views:"2k"
        },
        {
            img:img2,
            profile:logo2,
            name:"ElmeraGokor",
            tag:"TEAM",
            likes:"1.34k",
            views:"200K"
        },
        {
            img:img7,
            profile:logo7,
            name:"Upnow Studio",
            tag:"PRO",
            likes:"197",
            views:"500"
        },
        {
            img:img1,
            profile:logo1,
            name:"Nixtio",
            tag:"PRO",
            likes:"243",
            views:"691"
        },
        {
            img:img2,
            profile:logo2,
            name:"Halo Lab",
            tag:"PRO",
            likes:"12k",
            views:"200k"
        },
        {
            img:img3,
            profile:logo3,
            name:"UNOM Design",
            tag:"TEAM",
            likes:"412",
            views:"500"
        },
        {
            img:img4,
            profile:logo4,
            name:"OutCrowd",
            tag:"TEAM",
            likes:"623",
            views:"1k"
        },
        {
            img:img5,
            profile:logo5,
            name:"ThreeDee",
            tag:"PRO",
            likes:"537",
            views:"17k"
        },
        {
            img:img6,
            profile:logo6,
            name:"Zalo Estives",
            tag:"TEAM",
            likes:"12.3k",
            views:"190k"
        },
        {
            img:img7,
            profile:logo7,
            name:"Vadium Carazen",
            tag:"PRO",
            likes:"746",
            views:"600"
        }
    ]

    return(
        <>
        <div className="Buttons">

            <div className="popular">
                <button>Popular <RiArrowDropDownLine className="popularIcon" /></button>
            </div>

            <div className="Button">
                <button id="discover">Discover</button>
                <button>Animation</button>
                <button>Branding</button>
                <button>Illustration</button>
                <button>Mobile</button>
                <button>Print</button>
                <button>Product Design</button>
                <button>Typography</button>
                <button>Web Design</button>
            </div>

            <div className="filter">
                    <button><IoFilter className="filterIcon"/> Filters</button>
            </div>

        </div>

        <div className="cards">

           { Cards.map((Card) =>(

            <div className="card">

                <div className="card-image">
                    <img src={Card.img} alt="" height="100%" width="100%"/>
                </div>

                <div className="card-info">

                    <div className="left-card-info">
                        <img src={Card.profile} alt="" height="30vh"  width="30vw"/>
                    </div>

                    <div className="mid-card-info">
                            <h6>{Card.name}</h6>
                            <button>{Card.tag}</button>
                    </div>

                    <div className="right-card-info">

                    <div className="likes">
                        <FaHeart/><h5>{Card.likes}</h5>
                    </div>

                    <div className="views">
                        <IoEyeOutline/><h5>{Card.views}</h5>
                    </div>

                    </div>

                </div>
            </div>

            ))
        }

        </div>

        
        </>
    )
}

export default Cards;
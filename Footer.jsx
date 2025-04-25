import './Footer.css';
import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";

function Footer(){
    return(
        <>
        <div className="footer">

        <div className="upper-footer">
            <div className="left-upper-footer">
                <h1>Dribbble</h1>
            </div>
            <div className="mid-upper-footer">
                <a href="#">For designers</a>
                <a href="#">Hire talent</a>
                <a href="#">Inspiration</a>
                <a href="#">Advertising</a>
                <a href="#">Blog</a>
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Support</a>
            </div>
            <div className="right-upper-footer">
               <FaTwitter />
               <AiFillFacebook />
               <FaInstagram />
               <FaPinterestSquare />

            </div>
        </div>

        <div className="lower-footer">
            <div className="left-lower-footer">
                    <a href="#">&copy 2025 Dribble</a>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Cookies</a>
            </div>
            <div className="right-lower-footer">
                <a href="#">Jobs</a>
                <a href="#">Designers</a>
                <a href="#">freelancers</a>
                <a href="#">Tags</a>
                <a href="#">Places</a>
                <a href="#">Resources</a>
            </div>

        </div>

        </div>

        </>
    )
}

export default Footer;
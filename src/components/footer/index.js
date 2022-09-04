import './footer.css';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return(
        <section className="contact" id="contact">

        <h1 className="heading"> <span>contact</span> me </h1>

        <div className="row">

            <div className="content">

                <h3 className="title">contact info</h3>

                <div className="info">
                    <h3> <i className="FaEnvelope"><FaEnvelope /></i> suvanshnayyar14@gmail.com </h3>
                    <h3> <i className="FaPhoneAlt"><FaPhoneAlt /></i> 9354361137 </h3>
                    <h3> <i className="FaPhoneAlt"><FaPhoneAlt /></i> 9811595952 </h3>
                    <h3> <i className="FaMapMarkerAlt"><FaMapMarkerAlt /></i> India, Delhi - 110015. </h3>
                </div>

            </div>

            <form action="">
                
                <input type="text" placeholder="name" className="box"/>
                <input type="email" placeholder="email" className="box"/>
                <input type="text" placeholder="project" className="box"/>
                <textarea name="" id="" cols="30" rows="10" className="box message" placeholder="message"></textarea>
                <button type="submit" className="btn"> Send <i className="FaTelegramPlane"><FaTelegramPlane /></i> </button>

            </form>

        </div>

        <h3 className="title">Social Media</h3>

        <div id="contact-box">
            <div class="social">
                <SocialIcon url="https://www.linkedin.com/in/suvansh-nayyar-16b278185/" fgColor='white'/>
            </div>
            <div class="social">
                <SocialIcon url="https://www.instagram.com/official_suvansh/" network="instagram" bgColor='red' fgColor='white'/>
            </div>
            <div class="social">
                <SocialIcon url="https://github.com/Suvansh9354" fgColor='white' network="github" />
            </div>
            <div class="social">
                <SocialIcon url="https://www.facebook.com/suvansh.suvansh.58/" network="facebook" fgColor='white'/>
            </div>

            <div class="social">
                <SocialIcon url="https://wa.me/9354361137" network="whatsapp" fgColor='white'/>
            </div>
        </div>


    </section>
    );
}

export default Footer;
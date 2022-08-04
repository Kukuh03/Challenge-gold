import "../../components/Footer/style.css"
import listFacebook from "../../Asset/icon_facebook.png"
import listInstagram from "../../Asset/icon_instagram.png"
import listTwitter from "../../Asset/icon_twitter.png"
import listMail from "../../Asset/icon_mail.png"
import listTwitch from "../../Asset/icon_twitch.png"

const Footer = () => {
    return (
        <div className="footer-container">
            <div>
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="List-footer">
                <a href="#Ourservices">Our services</a>
                <a href="#Whyus">Why Us</a>
                <a href="#Testimonial">Testimonial</a>
                <a href="#FAQ">FAQ</a>
            </div>
            <div>
                <p>Connect with us</p>
                    <div className= "icon-social">
                    <a href="https://web.facebook.com/"><img src={listFacebook} /></a>
                    <a href="https://www.instagram.com/"><img src={listInstagram} /></a>
                    <a href="https://twitter.com/"><img src={listTwitter} /></a>
                    <a href="https://mail.google.com/"><img src={listMail} /></a>
                    <a href="https://www.twitch.tv/"><img src={listTwitch} /></a>
                    </div>
                <div>

                </div>
            </div>
            <div>
                <p>Copyright Binar 2022</p>
                <p>Binar Rental Car</p>
            </div>
        </div>
    )
}

export default Footer;
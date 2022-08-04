import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import "../../components/Testimonial/style.css"
import rate from "../../Asset/Rate.png"
import foto from "../../Asset/img_photo@2x.png"

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "250px",
      slidesToShow: 1,
      speed: 500
    };
    return (
      <div>
        <div id="Testimonial">
          <center> <h2>Testimonial</h2> </center>
          <center> <p> Berbagai review positif dari para pelanggan kami </p> </center>
        </div>
        <div>
           <Slider {...settings}>
          <div className="border-slider1">
            <div>
            <img src={foto} />
            </div>
            <div>
            <img src={rate} />
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod” </p>
            <p>John Dee 32, Bromo</p>
            </div>
          </div>
          <div className="border-slider2">
            <div>
            <img src={foto} />
            </div>
            <div>
            <img src={rate} />
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod” </p>
            <p>John Dee 32, Bromo</p>
            </div>
          </div>
          <div className="border-slider3">
            <div>
            <img src={foto} />
            </div>
            <div>
            <img src={rate} />
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod” </p>
            <p>John Dee 32, Bromo</p>
            </div>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}
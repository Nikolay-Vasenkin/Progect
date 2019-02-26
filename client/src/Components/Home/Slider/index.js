import React, {Component} from 'react';
import './style.css';
import SlickSlider from 'react-slick';

export default class Slider extends Component {

    constructor(props){
        super(props);
        this.state = {
            settings : {
                dots: true,
                infinite: true,
                autoplay: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    { breakpoint: 800, settings: { arrows: false}},
                    { breakpoint: 550, settings: { dots: false, arrows: false}},
                ]
            },
            arrayImg: [
                "https://storage.cloud.google.com/pomelov/slider/slider_1.jpg",
                "https://storage.cloud.google.com/pomelov/slider/slider_2.jpg",
                "https://storage.cloud.google.com/pomelov/slider/slider_3.jpg",
            ]
        }
    }

    render(){
        const {arrayImg, settings} = this.state;
        return(
            <SlickSlider {...settings}>
                {arrayImg.map((el, i) => {
                    return (
                        <div key={i}>
                            <img src={el} alt="sliderImage" className="slider_images"/>
                        </div>
                    )
                })}
            </SlickSlider>
        )
    }
}
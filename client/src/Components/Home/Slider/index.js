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
                slidesToScroll: 1
            }
        }
    }

    render(){
        return(
            <SlickSlider {...this.state.settings}>
                <div><div className="main_bg main_bg_1"/></div>
                <div><div className="main_bg main_bg_2"/></div>
                <div><div className="main_bg main_bg_3"/></div>
            </SlickSlider>
        )
    }
}
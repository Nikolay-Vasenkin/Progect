import React, {Component} from 'react';

/** Img **/
import WaterIMG from '../../../Static/img/product/water.png';

/** Module **/
import connect from "react-redux/es/connect/connect";

class PostItem extends Component {
    render() {
        return (
            <div className="product_box">
                <h4>Спрайт, 0.5 л</h4>
                <img src={WaterIMG} alt="pizza"/>
                <h6 className="water_price">85 руб</h6>
                <button className="grad buy water_buy">В корзину</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
    }
};

export default connect(mapStateToProps)(PostItem);
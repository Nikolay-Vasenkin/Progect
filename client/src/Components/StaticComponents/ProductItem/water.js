import React, {Component} from 'react';

/** Img **/
import WaterIMG from '../../../Static/img/product/water.png';

/** Module **/
import connect from "react-redux/es/connect/connect";

class PostItem extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className="product_box">
                <h4>{data.name}</h4>
                <img src={data.img} alt="pizza"/>
                <h6 className="water_price">{data.price} руб</h6>
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
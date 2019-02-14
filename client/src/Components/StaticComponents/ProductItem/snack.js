import React, {Component} from 'react';

/** Img **/
import SnackIMG from '../../../Static/img/product/snack.png';

/** Module **/
import connect from "react-redux/es/connect/connect";

class PostItem extends Component {
    render() {
        return (
            <div className="product_box">
                <img src={SnackIMG} alt="pizza"/>
                <h4>Четыре сыра</h4>
                <p>Сливочный соус, сыр блю чиз, моцарелла и смесь сыров чеддер и пармезан</p>
                <div className="price_panel">
                    <h6>750 руб</h6>
                    <button className="grad buy">В корзину</button>
                </div>
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
import React, {Component} from 'react';

/** Module **/
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {addProduct} from "../../../Store/actions";

class WaterItem extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className="product_box">
                <h4>{data.name}</h4>
                <img src={data.img} alt="pizza"/>
                <h6 className="water_price">{data.price} руб</h6>
                <button className="grad buy water_buy"
                        onClick={() => this.props.addProduct(data)}
                >
                    В корзину</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: bindActionCreators(addProduct, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WaterItem);
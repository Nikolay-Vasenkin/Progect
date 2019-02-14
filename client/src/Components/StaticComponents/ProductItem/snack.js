import React, {Component} from 'react';

/** Module **/
import connect from "react-redux/es/connect/connect";

class PostItem extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className="product_box">
                <img src={data.img} alt="pizza"/>
                <h4>{data.name}</h4>
                <p>{data.description}</p>
                <div className="price_panel">
                    <h6>{data.price} руб</h6>
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
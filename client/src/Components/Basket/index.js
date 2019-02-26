import React, {Component} from 'react';
import './style.css';

/** COMPONENTS **/
import LightBox from './Lightbox';

/** MODULE **/
import {bindActionCreators} from "redux";
import {
    changeCurrentPage,
    changeCountProduct,
    deleteProduct,
    changeModal,
} from "../../Store/actions";
import {Link} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";

/** IMG **/
import lineImg from '../../Static/img/basket/basket_line.svg';
import deleteImg from '../../Static/img/basket/delete_product.svg';
import plusImg from '../../Static/img/basket/plus.svg';
import minusImg from '../../Static/img/basket/minus.svg';


const Test = () => {
    return (
        <div className="row_table">
            <div className="b_name">
                <h3 className="orange_color">Пицца</h3>
                <span>20 см</span>
            </div>
            <div className="b_price">234 рублей</div>
            <div className="b_count">
                <div className="count_box">
                    <div className="btn_count">
                        <img src={minusImg} alt="minus"/>
                    </div>
                    <span>2</span>
                    <div className="btn_count">
                        <img src={plusImg} alt="plus"/>
                    </div>
                </div>
            </div>
            <div className="b_sum">12345 рублей</div>
            <div className="delete_product">
                <img
                    src={deleteImg}
                    alt="deleteProduct"
                />
            </div>
        </div>
    )
};

class Basket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
        }
    }

    componentWillMount() {
        this.props.changeCurrentPage('basket');
        this.setState({openModal: false});
        window.scrollTo(0,0);
    }

    render() {
        const {basket, changeModal} = this.props;
        return (
            <div className="basket_page ">
                <LightBox/>
                {
                    basket.length === 0 ?
                    <div className="empty_basket">
                        <p>В вашей корзине нет продуктов</p>
                        <Link to="/">
                            <button>Вернуться в меню</button>
                        </Link>
                    </div>
                    :
                    <div>
                        <h1 className="title_basket">Корзина</h1>
                        <div className="my_container">
                            <div className="basket_table flex">
                                <div className="row_table header_row">
                                    <div className="b_name">Наименование</div>
                                    <div className="b_price">Цена</div>
                                    <div className="b_count">Количество</div>
                                    <div className="b_sum">Стоимость</div>
                                    <div className="delete_product"/>
                                </div>
                                <img src={lineImg} alt="line" className="line_basket"/>
                                {basket.map((el, i) => {
                                    return (
                                        <div className="row_table" key={i}>
                                            <div className="b_name">
                                                <h3 className="orange_color">{el.name}</h3>
                                                <span>{el.size}</span>
                                            </div>
                                            <div className="b_price">{el.price} рублей</div>
                                            <div className="b_count">
                                                <div className="count_box">
                                                    <div className="btn_count"
                                                         onClick={() => this.props.changeCountProduct({
                                                             _id: el._id,
                                                             act: "dec"
                                                         })}
                                                    >
                                                        <img src={minusImg} alt="minus"/>
                                                    </div>
                                                    <span>{el.count}</span>
                                                    <div className="btn_count"
                                                         onClick={() => this.props.changeCountProduct({
                                                             _id: el._id,
                                                             act: "inc"
                                                         })}
                                                    >
                                                        <img src={plusImg} alt="plus"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="b_sum">{el.price * el.count} рублей</div>
                                            <div className="delete_product">
                                                <img
                                                    src={deleteImg}
                                                    alt="deleteProduct"
                                                    onClick={() => this.props.deleteProduct(el)}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                                {basket.map((el, i) => {
                                    return (
                                        <div className="row_table_mini" key={i}>
                                            <img
                                                src={deleteImg}
                                                alt="deleteProduct"
                                                className="b_mini_delete"
                                                onClick={() => this.props.deleteProduct(el)}
                                            />
                                            <div className="b_mini_name">
                                                <h3 className="orange_color">{el.name}</h3>
                                                <span> {el.size}</span>
                                            </div>
                                            <div className="b_mini_price flex">
                                                <div className="b_mini_price_slice">
                                                    <p>{el.price} рублей</p>
                                                    <div className="count_box">
                                                        <div className="btn_count"
                                                             onClick={() => this.props.changeCountProduct({
                                                                 _id: el._id,
                                                                 act: "dec"
                                                             })}
                                                        >
                                                            <img src={minusImg} alt="minus"/>
                                                        </div>
                                                        <span>{el.count}</span>
                                                        <div className="btn_count"
                                                             onClick={() => this.props.changeCountProduct({
                                                                 _id: el._id,
                                                                 act: "inc"
                                                             })}
                                                        >
                                                            <img src={plusImg} alt="plus"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="b_mini_price_slice">
                                                    {el.price * el.count}<br/>
                                                    рублей
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                                <img src={lineImg} alt="line" className="line_basket"/>
                                <div className="basket_buy_panel flex">
                                    <Link to="/">
                                        <button>Вернуться в меню</button>
                                    </Link>
                                    <div className="flex">
                                        <p>Сумма вашего заказа: <span className="orange_color">
                                        {basket.reduce((sum, el) => {
                                            return sum + el.price * el.count
                                        }, 0)} </span> рублей
                                        </p>
                                        <button onClick={() => changeModal(true)}>
                                            Заказать
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        basket: state.basket,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
        changeCountProduct: bindActionCreators(changeCountProduct, dispatch),
        deleteProduct: bindActionCreators(deleteProduct, dispatch),
        changeModal: bindActionCreators(changeModal, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
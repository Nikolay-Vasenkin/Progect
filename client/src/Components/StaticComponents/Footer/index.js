import React, {Component} from 'react';
import './style.css';

/** IMG **/
import logoImg from '../../../Static/img/logo.svg';
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        const {currentPage} = this.props;
        return (
            <footer>
                {currentPage !== 'basket' ?
                    <div>
                        <div className="footer_line grad">Мы рады стараться для вас</div>
                        <div className="my_container footer">
                            <Link to="/" className="footer_logo">
                                <img src={logoImg} alt="logo"/>
                            </Link>
                            <div className="footer_center">
                                <ol>
                                    <li>Пицца</li>
                                    <li>Закуски</li>
                                    <li>Напитки</li>
                                    <li>О нас</li>
                                </ol>
                                <ol>
                                    <li className="orange_color">© 2019 Подберег Pizza</li>
                                    <li>Правовая информация</li>
                                    <li>Колорийность и состав</li>
                                    <li>Помощь</li>
                                </ol>
                            </div>
                            <div className="footer_contact">
                                <div className="telephone">
                                    <h2>+7929292929</h2>
                                    <p>
                                        Ежедневно с <i className="orange_color">8:30</i> до <i className="orange_color">22:00</i>
                                    </p>
                                    <a className="mail">info@podbereg.pizza.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="orange_line"/>
                        <div className="my_container footer_basket ">
                            <Link to="/" className="footer_logo">
                                <img src={logoImg} alt="logo"/>
                            </Link>
                            <div className="footer_center">
                                <h3 className="orange_color">info@podbereg.pizza.com</h3>
                                <ol>
                                    <li className="orange_color">© 2019 Подберег Pizza</li>
                                    <li>Правовая информация</li>
                                    <li>Колорийность и состав</li>
                                    <li>Помощь</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                }
            </footer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
    }
};

export default connect(mapStateToProps)(Footer);
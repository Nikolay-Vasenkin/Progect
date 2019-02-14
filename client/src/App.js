import React, {Component} from "react";
import {Route, HashRouter} from 'react-router-dom';

/*** Components ***/
import Header from './Components/StaticComponents/Header';
import Footer from './Components/StaticComponents/Footer';
import Home from './Components/Home';
import Basket from './Components/Basket';
import Create from './Components/Create';

/** Redux **/
import {bindActionCreators} from "redux";
import {getPostList} from "./Store/actions";
import connect from "react-redux/es/connect/connect";

class App extends Component {

    startRequest = async () => {
        const requestGetPizza = await fetch('/api/pizza');
        const pizzaList = await requestGetPizza.json();
        this.props.getPostList(pizzaList);
    };

    componentWillMount() {
        this.startRequest();
        console.log();
    };

    render() {
        return (
            <HashRouter>
                <div className="vh_block">
                    <div>
                        <Header scroll={this.props.scroll}/>
                        <main className="container global_main">
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/basket" component={Basket}/>
                            <Route exact path="/create" component={Create}/>
                        </main>
                    </div>
                    <Footer/>
                </div>
            </HashRouter>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPostList: bindActionCreators(getPostList, dispatch),
    }
};

export default connect("", mapDispatchToProps)(App);
import React, {Component} from 'react';

export default class Create extends Component {

    send = async () => {
        const cdn = 'https://storage.googleapis.com/pomelov/pizza/';

        const IMG = cdn + "цыпленок_барбекю" + ".jpg";
        const name = "Цыпленок барбекю";
        const decs1 = "Цыпленок, соус барбекю, томатный соус, лук красный, моцарелла и бекон; 490±50гр;";
        const decs2 = "Цыпленок, соус барбекю, томатный соус, лук красный, моцарелла и бекон; 990±50гр;";
        const price = [425,745];


        const sendData = {
            img: IMG,
            type:[
                {
                    name: name,
                    size: 25,
                    price: price[0],
                    description: decs1,
                },
                {
                    name: name,
                    size: 35,
                    price: price[1],
                    description: decs2,
                }
            ],
        };

        console.log(JSON.stringify(sendData));

        // return false;

        const requestPublish = await fetch('/api/create_pizza', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(sendData),
        });
        const statusPublish = await requestPublish.text();

        console.log(statusPublish);
    };

    render() {
        return (
            <div>
                <button
                    style={{margin: 40, height: 300, width: 300}}
                    // onClick={() => this.send()}
                >Add</button>
            </div>
        )
    }
}
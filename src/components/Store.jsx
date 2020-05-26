import React, {useState} from 'react';
import PropTypes from 'prop-types';
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";
import Product from '../models/Product'

Store.propTypes = {
    startmode: PropTypes.string.isRequired
};

function Store(props) {
    const {startmode} = props;
    let startView = '';
    let startIcon = '';
    if (startmode) {
        startView = startmode;

    }

    const [view, setView] = useState(startmode);
    const [icon, setIcon] = useState((startmode !== 'cards') ? 'view_module' : 'view_list');
    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];
    let product_obj_array = products.map(item => {
        return new Product(item)
    });
    const onStoreSwitch = evt => {
        setView(prev => (prev === 'cards' ? 'list' : 'cards'));
        setIcon(prev => (prev === 'view_list' ? 'view_module' : 'view_list'));
    };

    return (
        <div className={'store'}>
            <div className={'icon-bar'}>
                <IconSwitch icon={icon} onSwitch={onStoreSwitch}/>
            </div>
            {(view == 'cards') ? <CardsView cards={product_obj_array}></CardsView> :
                <ListView items={product_obj_array}></ListView>}
        </div>
    );
}

export default Store;
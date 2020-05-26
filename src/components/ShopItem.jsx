import React from 'react';
import PropTypes from 'prop-types';
import '../css/main.css';
ShopItem.propTypes = {
    
};

function ShopItem(props) {
    const { item } = props;
    return (
        <div className={'list-item'}>
            <span className={'list-img-container'}>
                <img className={'list-img img'} src={item.img} alt={item.name} />
            </span>
            <span className={'list-name title'}>{item.name}</span>
            <span className={'list-color color'}>{item.color}</span>
            <span className={'list-price price'}>${item.price}</span>
            <span className={'list-cartbutton cartbutton'}>Add to Cart</span>
        </div>
    );
}

export default ShopItem;
import React from 'react';
import PropTypes from 'prop-types';
import Product from '../models/Product';

ShopCard.propTypes = {
    card: PropTypes.instanceOf(Product).isRequired
};

function ShopCard(props) {
    const {card} = props;
    return (
        <div className={'card'}>
            <div className={'card-name name'}>{card.name}</div>
            <span className={'card-color color'}>{card.color}</span>
            <div>
                <img className={'card-img img'} src={card.img} alt={card.name}/>
                <span className={'price-line'}>
                    <span className={'card-price price'}>${card.price}</span>
                    <span className={'card-cartbutton cartbutton'}>Add to Cart</span>
                </span>
            </div>
        </div>
    );
}

export default ShopCard;
import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from "./ShopCard";
import Product from "../models/Product";

CardsView.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.instanceOf(Product))
};

function CardsView(props) {
    const {cards} = props;
    return (
        <div className={'cards-view'}>
            {cards.map((card, i) => <ShopCard key={('shopcard-' + i)} card={card}/>)}
        </div>
    );
}

export default CardsView;
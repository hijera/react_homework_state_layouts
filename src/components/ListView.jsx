import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from "./ShopItem";

import Product from "../models/Product";
ListView.propTypes = {
    items: PropTypes.arrayOf(PropTypes.instanceOf(Product))
};

function ListView(props) {
    const { items } = props;
    return (
        <div className={'list-view'}>
        {items.map((item,i) => <ShopItem key={('shopitem-'+i)} item={item} />) }
        </div>
    );
}

export default ListView;
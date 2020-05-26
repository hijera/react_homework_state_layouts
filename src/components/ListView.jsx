import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from "./ShopItem";
import '../css/main.css';
ListView.propTypes = {
    
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
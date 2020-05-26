import React from 'react';
import PropTypes from 'prop-types';
import '../css/main.css';

IconSwitch.propTypes = {

};

function IconSwitch(props) {
    const { icon,onSwitch } = props;
    const onSwitchClick = evt => {
        onSwitch(evt);
    };
    return (
        <div class={'switch-icon'}>
            <a className="material-icons" onClick={onSwitchClick}>{icon}</a>
        </div>
    );
}

export default IconSwitch;
import React from 'react';
import PropTypes from 'prop-types';
import '../css/main.css';

IconSwitch.propTypes = {
    onSwitch: PropTypes.func.isRequired,
    icon: PropTypes.string
};

function IconSwitch(props) {
    const {icon, onSwitch} = props;
    const onSwitchClick = evt => {
        onSwitch(evt);
    };
    return (
        <div className={'switch-icon'}>
            <span className="material-icons" onClick={onSwitchClick}>{icon}</span>
        </div>
    );
}

export default IconSwitch;
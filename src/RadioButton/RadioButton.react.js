/* eslint-disable import/no-unresolved, import/extensions */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
/* eslint-enable import/no-unresolved, import/extensions */
import Checkbox from '../Checkbox/ExpoCheckBox';

const propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
    theme: PropTypes.string,
};
const defaultProps = {
    theme: 'light',
    disabled: false,
    checked: false,
};

class RadioButton extends PureComponent {
    onPress = () => {
        const {
            value, checked, disabled, onSelect,
        } = this.props;

        if (disabled && !checked) {
            return;
        }

        onSelect(value);
    }

    render() {
        return (
            <Checkbox
                checkedIcon="md-radio-button-on"
                uncheckedIcon="md-radio-button-off"
                onCheck={this.onPress}
                {...this.props}
            />
        );
    }
}

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;

export default RadioButton;

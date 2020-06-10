import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import KZUIComponent from '../base/index';
import { uiSizeType } from '../base/types';
import Icon from '../icon/index.tsx';
import './style.less';

class NumberInput extends KZUIComponent {
    constructor(props) {
        super(props);
        this.autoBind('onIncrease', 'onDecrease');
    }

    initStateFromProps(props) {
        return {
            value: props.value,
        };
    }

    setValue(value) {
        if (value >= this.props.min && value <= this.props.max) {
            this.setState({
                value,
            });
            if (this.props.onChange) {
                this.props.onChange({ value, name: this.props.name });
            }
        }
    }

    onIncrease() {
        this.setValue(this.state.value + this.props.step);
    }

    onDecrease() {
        this.setValue(this.state.value - this.props.step);
    }

    render() {
        const clsPrefix = 'kui-number-input';
        const { className, style, disabled, error, size, name, min, max, step } = this.props;
        const cls = classNames(clsPrefix, className, {
            [`${clsPrefix}-error`]: error,
            [`${clsPrefix}-disabled`]: disabled,
            [`${clsPrefix}-${size}`]: true,
        });

        const NoIncrease = this.state.value + step > max;
        const NoDecrease = this.state.value - step < min;
        const NoIncreaseCls = NoIncrease ? `${clsPrefix}-disabled` : '';
        const NoDecreaseCls = NoDecrease ? `${clsPrefix}-disabled` : '';

        return (
            <div
                className={cls}
                style={style}
                disabled={disabled}
            >
                <input
                    type="text"
                    name={name}
                    value={this.state.value}
                    disabled={disabled}
                />
                <div className={`${clsPrefix}-controls`}>
                    <div
                        className={`${clsPrefix}-increase ${NoIncreaseCls}`}
                        onClick={this.onIncrease}
                        role="button"
                        tabIndex={0}
                    >
                        <Icon type="drop-up" />
                    </div>
                    <div
                        className={`${clsPrefix}-decrease ${NoDecreaseCls}`}
                        onClick={this.onDecrease}
                        role="button"
                        tabIndex={0}
                    >
                        <Icon type="drop-down" />
                    </div>
                </div>
            </div>
        );
    }
}

NumberInput.defaultProps = {
    size: 'normal',
    disabled: false,
    error: false,
    name: '',
    value: 0,
    step: 1,
    min: 0,
    max: 100,
    onChange: null,
};

NumberInput.propTypes = {
    size: uiSizeType,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.number,
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func,
};

export default NumberInput;

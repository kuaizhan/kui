import * as React from 'react';
import classNames from 'classnames';
import KZUIComponent, { baseDefaultProps } from '../base/component';
import './style.less';
import { UiSizeType } from '../../../types/base';

interface TextAreaProps {
    error?: boolean
    name?: string
    value?: string
    placeholder?: string
    disabled?: boolean
    onChange?: (e: { name?: string, value: string }) => void
    onKeyPress?: (e: Event) => void
    maxLength?: number
    onBlur?: (e: Event) => void
    size: UiSizeType
    rows?: number
}
class TextArea extends KZUIComponent<TextAreaProps> {
    static defaultProps = {
      ...baseDefaultProps,
      maxLength: undefined,
      placeholder: '',
      value: '',
      name: '',
      onChange: null,
      onKeyPress: null,
      error: false,
      size: 'normal',
      disabled: false,
      rows: undefined
    }

    constructor(props) {
        super(props);
        this.autoBind('handleChange', 'handleKeyPress', 'handleBlur');
    }

    initStateFromProps(props) {
        return {
            value: props.value,
        };
    }

    handleChange(event) {
        // this.setState({ value: event.target.value });
        this.props.onChange?.({ value: event.target.value, name: this.props.name });
    }

    handleKeyPress(event) {
        this.props.onKeyPress?.(event);
    }

    handleBlur(event) {
        this.props.onBlur?.(event)
    }

    render() {
        const clsPrefix = 'kui-textarea';
        const {
            className,
            style,
            placeholder,
            maxLength,
            size,
            disabled,
            value,
            rows
        } = this.props;
        const error = this.props.error || (maxLength && value && value.length > maxLength);

        const cls = classNames(clsPrefix, className);

        const textAreaClass = classNames(`${clsPrefix}-input`, {
            [`${clsPrefix}-error`]: error,
            [`${clsPrefix}-input-${size}`]: true,
            [`${clsPrefix}-input-disabled`]: !!disabled,
        });

        return (
            <div className={cls} style={style}>
                <textarea
                    className={textAreaClass}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    maxLength={maxLength}
                    rows={rows}
                />
                {
                    maxLength > 0 ?
                        <p className={`${clsPrefix}-counter ${error ? `${clsPrefix}-counter--error` : ''}`}>{value ? value.length : 0}/{maxLength}</p> :
                        null
                }
            </div>
        );
    }
}

export default TextArea;

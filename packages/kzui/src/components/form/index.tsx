import * as React from 'react';
import classNames from 'classnames';
import KZUIComponent, { baseDefaultProps } from '../base/component';
import './index.less';

const clsPrefix = 'kui-form';

interface FormProps {
    children?: React.ReactNode //表单行节点
}

interface FormRowProps {
    children?: React.ReactNode //表单行节点
    label?: string | React.ReactNode // 表单行label	
    labelStyle?: React.CSSProperties
    isRequired?: boolean
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
    extra?: any
}

class FormRow extends KZUIComponent<FormRowProps> {

    static defaultProps = {
        ...baseDefaultProps,
        children: null,
        label: '',
        labelStyle: {},
        isRequired: false,
    }

    render() {
        const { labelStyle, style, isRequired, className, alignItems, extra } = this.props;
        const labelCls = isRequired ? 'required-label' : '';
        const rowCls = classNames(`${clsPrefix}-row`, className, {
            [`${clsPrefix}-row--required`]: isRequired,
        });
        const _style = alignItems ? { alignItems, ...style } : style
        return (
            <div className={rowCls} style={_style}>
                {this.props.label ?
                    (<label className={labelCls} style={labelStyle}>{this.props.label}</label>) :
                    null
                }
                <div className={`${clsPrefix}-cell`}>
                    {this.props.children}
                    {
                        extra ? <p className='form-item-description'>{extra}</p> : null
                    }
                </div>
            </div>
        );
    }
}

class Form extends KZUIComponent<FormProps> {

    static defaultProps = {
        ...baseDefaultProps,
        children: null,
    }

    render() {
        const { className, style } = this.props;
        const cls = classNames(clsPrefix, className);
        return (
            <div className={cls} style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default Form;
export {
    Form,
    FormRow,
};

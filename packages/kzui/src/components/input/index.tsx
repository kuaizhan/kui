import * as React from 'react'
import { useState } from 'react'
import classNames from 'classnames'
import { UiSizeType } from '../../../types/base'
import './style.less'

interface InputProps {
  type?: 'text' | 'password' | 'number' //输入类型,
  size?: UiSizeType //按钮尺寸,
  disabled?: boolean //是否禁用输入,
  error?: boolean //是否输入验证出错,
  name?: string //表单输入项名,
  value?: any //初始值,
  placeholder?: string //输入默认显示
  onChange?: (e: { value: string; name?: string }) => void
  control?: boolean
  onKeyPress?: (e: any, value: string) => void
  onBlur?: (e: { value: string; name?: string }) => void
  onFocus?: () => void
  style?: React.CSSProperties
  className?: string
  setRef?: (ref: HTMLInputElement) => void
}

const clsPrefix = 'kui-input'
const Input: React.FC<InputProps> = ({
  type,
  size,
  disabled,
  error,
  name,
  value,
  placeholder,
  onChange,
  control,
  onKeyPress,
  onBlur,
  style,
  className,
  onFocus,
  setRef,
}) => {
  // control 为显性受控属性，如果有 value 或 onChange 则认为是受控
  const _control = control || !!(value || onChange)

  const [stateValue, setStateValue] = useState(value) // 非受控
  const [prevValue, setPrevValue] = useState(value)

  if (prevValue !== value && _control) {
    // 如果受控，stateValue 是用不上的
    setPrevValue(value)
  }

  const realValue = _control ? value || '' : stateValue

  function handleKeyPress (event: React.KeyboardEvent<HTMLInputElement>) {
    onKeyPress?.(event, realValue)
  }

  function handleBlur (event: React.FocusEvent<HTMLInputElement>) {
    onBlur?.({ value: event.target.value, name })
  }

  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    if (!_control) {
      setStateValue(e.target.value)
    }

    onChange?.({ value: e.target.value, name })
  }

  const cls = classNames(
    {
      [clsPrefix]: true,
      [`${clsPrefix}-disabled`]: !!disabled,
      [`${clsPrefix}-error`]: !!error,
      [`${clsPrefix}-${size}`]: true
    },
    className
  )

  return (
    <input
      className={cls}
      type={type}
      name={name}
      value={realValue}
      placeholder={placeholder}
      disabled={disabled}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      style={style}
      onFocus={onFocus}
      ref={el => {
        setRef?.(el)
      }}
    />
  )
}

Input.defaultProps = {
  type: 'text',
  size: 'normal',
  disabled: false,
  error: false,
  name: '',
  placeholder: '',
  control: false,
  onBlur: null,
  onChange: null,
  onKeyPress: null,
  style: {},
  className: '',
  value: ''
}

export default Input

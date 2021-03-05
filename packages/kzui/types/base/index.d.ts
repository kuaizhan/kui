import { ReactElement } from "react"

// 组件尺寸
export type UiSizeType = 'tiny' | 'normal' | 'small' | 'large' | 'huge'

// 表单值类型
export type valueType = string | number

export interface CallBackArg<T = string> {
  name: string,
  value: T
}
export interface OptionType {
  value: valueType,
  text: React.ReactNode,
  selected?: boolean
  disabled?: boolean
  className?: string
  isLabel?: boolean
  isSubOption?: boolean
  isMultiple?: boolean
}

export type OptionListType = Array<OptionType>

export interface DimensionType {
  left?: string | number,
  top?: string | number,
  width?: string | number,
  height?: string | number
}

export type SingleChildNode = number | string | ReactElement | Function

export type ChildrenType = SingleChildNode | Array<SingleChildNode>

export interface TextNavItem {
  href: string,
  text: string,
  cur: boolean
}

export type TextNavItemsType = Array<TextNavItem>

export interface IconNavItem {
  href: string,
  text: string,
  iconClass: string,
  cur: boolean
}

export type IconNavItemsType = Array<IconNavItem>

export type TipType = 'inline' | 'info' | 'warn' | 'error' | 'success'

export class KZUIComponent {
  className?: string
  onError?: (e: any) => void
  style?: React.CSSProperties
  children?: React.ReactNode
}
import React from 'react'
import classNames from 'classnames';
export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = "primary",
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps {
    className ?:string;
    disabled ?:boolean;
    size?:ButtonSize;
    btnType?:ButtonType;
    children:React.ReactNode;
    href?:string;
}

// 通过React的ButtonHTMLAttributes拿到Button的所有原生属性 ，并且使用联合类型合并两者类型
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
// 合并a链接的原生属性和基础属性
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;

// Partial 是ts提供的，用于将所有的属性都变成可选的。
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, disabled, size, children, href, className, ...restProps} = props;
  // btn,btn-lg,btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    // a标签没有disabled属性，因此需要手动添加disabled类。但是
    // button是有disabled属性的。因此不需要添加这个类
    'disabled': (btnType === ButtonType.Link) && disabled
  });

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>{children}</a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>{children}</button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button

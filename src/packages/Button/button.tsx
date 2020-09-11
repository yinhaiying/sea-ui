import React from 'react'
import classNames from 'classnames';
export enum ButtonSize {
    Large = 'lg',
    smaill = 'sm'
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
    type?:ButtonType;
    children:React.ReactNode;
    href?:string;
}

const Button:React.FC<BaseButtonProps> =(props) => {
    const { type, disabled, size, children,href} = props;
    // btn,btn-lg,btn-primary
    const classes = classNames("btn", {
      [`btn-${type}`]: type,
      [`btn-${size}`]: size,
      // a标签没有disabled属性，因此需要手动添加disabled类。但是
      // button是有disabled属性的。因此不需要添加这个类
      "disabled": (type === ButtonType.Link) && disabled
    });

    if(type === ButtonType.Link && href){
        return (
            <a className = {classes} href={href}>{children}</a>
        )
    }else{
        return (
            <button  className = {classes} disabled = {disabled}>{children}</button>
        )
    }
}

Button.defaultProps = {
    disabled:false,
    type:ButtonType.Default
}

export default Button
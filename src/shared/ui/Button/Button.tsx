import React, {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss';

export enum ThemeButton{
    CLEAR = 'clear',
    COOL = 'cool'

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames (cls.Button, {[cls[theme]]:true}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface ThemeSwitcherProps{
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {t} = useTranslation()
    const { toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.COOL}
            className={classNames(cls.ThemeSwitcher ,{},[className])}
            onClick={toggleTheme}
        >
            {t('ТЕМА')}
        </Button>
    );
};

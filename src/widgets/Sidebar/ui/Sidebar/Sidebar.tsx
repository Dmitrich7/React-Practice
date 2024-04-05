import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {Button} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true)

    const onToggle = () => {
        setCollapsed(prev=>!prev)
    }

    return (
        <div className={classNames (cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button onClick={onToggle}>
                toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>

            </div>
        </div>
    );
};

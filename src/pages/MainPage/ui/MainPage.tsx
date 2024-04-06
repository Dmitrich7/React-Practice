import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {
    const {t} = useTranslation('mainpage');
    return (
        <div>
            {t('бух')}
        </div>
    );
};

export default MainPage;
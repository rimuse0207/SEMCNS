import React from 'react';
import PersonalNavigationMainPage from './PersonalNavigation/PersonalNavigationMainPage';
import { PersonalMainPageApplyMainDiv } from './PersonalMainPageApply/PersonalApplyMainPage';

const PersonalMainPage = () => {
    return (
        <PersonalMainPageApplyMainDiv>
            <div className="Personal_Main_Float">
                <div className="Personal_Main_Float_Left">
                    <PersonalNavigationMainPage currentPageOn="MainPage"></PersonalNavigationMainPage>
                </div>
                <div className="Personal_Main_Float_Right"></div>
            </div>
        </PersonalMainPageApplyMainDiv>
    );
};

export default PersonalMainPage;

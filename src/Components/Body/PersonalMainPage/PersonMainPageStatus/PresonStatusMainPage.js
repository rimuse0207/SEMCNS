import React, { useState } from 'react';
import { PersonalMainPageApplyMainDiv } from '../PersonalMainPageApply/PersonalApplyMainPage';
import PersonalNavigationMainPage from '../PersonalNavigation/PersonalNavigationMainPage';
import PersonStatusCalendarMainPage from './PersonStatusCalendarPage/PresonStatusCalendarMainPage';
import PersonStatusHistoryMainPage from './PersonStatusHistoryPage/PresonStatusHistoryMainPage';
import PersonStatusNaviMainPage from './PersonStatusNaviPage/PresonStatusNaviMainPage';
const PersonStatusMainPage = () => {
    const [StaticsNaviButton, setStaticsNaviButton] = useState('History');
    return (
        <PersonalMainPageApplyMainDiv>
            <div className="Personal_Main_Float">
                <div className="Personal_Main_Float_Left">
                    <PersonalNavigationMainPage currentPageOn="statistics"></PersonalNavigationMainPage>
                </div>
                <div className="Personal_Main_Float_Right">
                    <PersonStatusNaviMainPage
                        NaviSelected={StaticsNaviButton}
                        setStaticsNaviButton={setStaticsNaviButton}
                    ></PersonStatusNaviMainPage>
                    {StaticsNaviButton === 'History' ? <PersonStatusHistoryMainPage></PersonStatusHistoryMainPage> : <div></div>}
                    {StaticsNaviButton === 'Calendar' ? <PersonStatusCalendarMainPage></PersonStatusCalendarMainPage> : <div></div>}
                </div>
            </div>
        </PersonalMainPageApplyMainDiv>
    );
};

export default PersonStatusMainPage;

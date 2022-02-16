import React, { useEffect, useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { PersonStatusHistoryMainPageDivBox } from '../PersonStatusHistoryPage/PresonStatusHistoryMainPage';
import PersonStatusCalendarTable from './PersonStatusCalendarTable';
import moment from 'moment';
const PersonStatusCalendarMainPage = () => {
    const [MonthDateData, setMonthDateData] = useState(moment());

    useEffect(() => {
        console.log(MonthDateData);
    }, [MonthDateData]);
    return (
        <PersonStatusHistoryMainPageDivBox>
            <div className="HistoryMianNaviFlexBox">
                <div className="ReactIcons_ArrowIcon" onClick={() => setMonthDateData(MonthDateData.clone().subtract(1, 'months'))}>
                    <MdArrowBackIos></MdArrowBackIos>
                </div>
                <h2>{MonthDateData.format('YYYY년 M월')}</h2>
                <div className="ReactIcons_ArrowIcon" onClick={() => setMonthDateData(MonthDateData.clone().add(1, 'months'))}>
                    <MdArrowForwardIos></MdArrowForwardIos>
                </div>
            </div>
            <PersonStatusCalendarTable></PersonStatusCalendarTable>
        </PersonStatusHistoryMainPageDivBox>
    );
};

export default PersonStatusCalendarMainPage;

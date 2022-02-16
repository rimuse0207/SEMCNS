import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { AiFillCalendar } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';
import { BsBarChartFill } from 'react-icons/bs';

const PersonalNavigationMainPageMainDivBox = styled.div`
    .PersonalNavigation_Box {
        border-bottom: 2px solid lightgray;
        height: 100px;
        padding: 20px 5px 18px;
        a {
            color: #fff;
        }
    }
    .PersonalNavigation_ApplyPage {
        width: 90%;
        margin: 0 auto;
        border-radius: 5px;
        height: 50px;
        line-height: 50px;
        font-size: 1.1em;
        text-align: center;
        background: #2985db;
        font-weight: bolder;
        border-bottom: 1px solid lightgray;

        :hover {
            cursor: pointer;
            background: #056ac9;
        }
    }

    .PersonalNavigation_WorkStatus {
        padding: 20px 5px 18px;
        .PersonalNavigation_WorkStatus_HiddenShowDiv {
            height: 40px;
            line-height: 40px;
            font-size: 1em;
            font-weight: bold;
            padding-left: 5px;
            color: #8e8d8d;
            :hover {
                background: #eeef;
                cursor: pointer;
            }
            .PersonalNavigation_WorkStatus_HiddenShowDiv_iconsUp {
                svg {
                    -ms-transform: rotate(-180deg); /* IE 9 */
                    -webkit-transform: rotate(-180deg); /* Chrome, Safari, Opera */
                    transform: rotate(-180deg);
                    transition: all 0.5s;
                    font-size: 1.6em;
                }
            }
            .PersonalNavigation_WorkStatus_HiddenShowDiv_iconsDown {
                svg {
                    transition: all 0.5s;
                    font-size: 1.6em;
                }
            }
        }
        .PersonalNavigation_WorkStatus_ListsShow {
            margin: 10px;
        }
        li {
            padding-top: 13px;
            padding-bottom: 13px;
            padding-left: 30px;
            .PersonalNavigation_WorkStatus_ListsShow_Icons {
                color: gray;
                margin-right: 10px;
            }
            :hover {
                background: #eeef;
                cursor: pointer;
            }
        }
        #PersonalNavigation_WorkStatus_CurrentPage {
            background: rgba(41, 133, 219, 0.1);
            color: #056ac9;
            font-weight: bold;
            .PersonalNavigation_WorkStatus_ListsShow_Icons {
                color: #056ac9;
            }
            :hover {
                cursor: pointer;
            }
        }
    }
`;

const PersonalNavigationMainPage = ({ currentPageOn }) => {
    const [ClicksOnOff, setClicksOnOff] = useState(true);
    return (
        <PersonalNavigationMainPageMainDivBox>
            <div className="PersonalNavigation_Box">
                <Link to="/personal/apply">
                    <div className="PersonalNavigation_ApplyPage">
                        <div>휴가 신청</div>
                    </div>
                </Link>
            </div>
            <div>
                <div className="PersonalNavigation_WorkStatus">
                    <div className="PersonalNavigation_WorkStatus_HiddenShowDiv" onClick={e => setClicksOnOff(!ClicksOnOff)}>
                        <span
                            className={
                                ClicksOnOff
                                    ? 'PersonalNavigation_WorkStatus_HiddenShowDiv_iconsUp'
                                    : 'PersonalNavigation_WorkStatus_HiddenShowDiv_iconsDown'
                            }
                        >
                            <MdKeyboardArrowUp></MdKeyboardArrowUp>{' '}
                        </span>
                        <span> 내 근무</span>
                    </div>
                    {ClicksOnOff ? (
                        <ul className="PersonalNavigation_WorkStatus_ListsShow">
                            <Link to="/personal">
                                <li id={currentPageOn === 'MainPage' ? 'PersonalNavigation_WorkStatus_CurrentPage' : ''}>
                                    <span className="PersonalNavigation_WorkStatus_ListsShow_Icons">
                                        <AiFillCalendar></AiFillCalendar>
                                    </span>
                                    <span>휴가/근무</span>
                                </li>
                            </Link>
                            <Link to="/personal/statistics">
                                <li id={currentPageOn === 'statistics' ? 'PersonalNavigation_WorkStatus_CurrentPage' : ''}>
                                    <span className="PersonalNavigation_WorkStatus_ListsShow_Icons">
                                        <FaCalendarAlt></FaCalendarAlt>
                                    </span>
                                    <span>근무 현황</span>
                                </li>
                            </Link>
                            <li>
                                <span className="PersonalNavigation_WorkStatus_ListsShow_Icons">
                                    <BsBarChartFill></BsBarChartFill>
                                </span>
                                <span>부서 근무 현황</span>
                            </li>
                        </ul>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </PersonalNavigationMainPageMainDivBox>
    );
};

export default PersonalNavigationMainPage;

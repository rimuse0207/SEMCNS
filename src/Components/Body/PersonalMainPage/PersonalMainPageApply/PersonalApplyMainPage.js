import React from 'react';
import PersonalNavigationMainPage from '../PersonalNavigation/PersonalNavigationMainPage';
import styled from 'styled-components';

import PersonApplyContentSettingPage from './PersonApplyContent/PersonApplyContentSettingPage';
import PersonApplyContentPaymentPage from './PersonApplyContent/PersonApplyContentPaymentPage';
import PersonApplyContentUserSelectPage from './PersonApplyContent/PersonApplyContentUserSelectPage';
import PersonApplyContentInfoPage from './PersonApplyContent/PersonApplyContentInfoPage';
import PersonApplyContentSelectTablePage from './PersonApplyContent/PersonApplyContentSelectTablePage';
import PersonApplyContentReasonPage from './PersonApplyContent/PersonApplyContentReasonPage';
export const PersonalMainPageApplyMainDiv = styled.div`
    min-height: 100vh;
    width: 100vw;
    .Personal_Main_Float {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        ::after {
            display: block;
            content: '';
            clear: both;
        }
        .Personal_Main_Float_Left {
            float: left;
            width: 17%;
            min-width: 250px;
            height: 100vh;
            position: fixed;
            left: 0;
            top: 60px;
            background: #eff4fc;
            z-index: 1;
        }
        .Personal_Main_Float_Right {
            float: right;
            width: 82%;
            position: absolute;
            top: 60px;
            right: 0;
            padding-left: 20px;
            padding-right: 10px;
            min-width: 1200px;
        }
    }
`;

const PersonalApplyBodyConentDivBox = styled.div`
    .PersonalApplyBodyConent_ApplyButton {
        background: #fff;
        height: 70px;
        line-height: 70px;
        position: fixed;
        width: 79%;
        z-index: 3;
        button {
            outline: none;
            color: #056ac9;
            font-size: 1em;
            font-weight: 500;
            border: none;
            background: #fff;
            :hover {
                cursor: pointer;
            }
        }
    }

    .PersonalApplyBodyConent_ApplyContents_CalendarTable {
        font-size: 0.8em;
        table {
            border-collapse: collapse;
            width: 100%;
        }
        tbody {
            th {
                background: #eff4fc;
                text-align: center;
                width: 80px;
                padding: 15px 5px 15px 5px;
                border: 0.5px solid lightgray;
                font-weight: 500;
                height: 45px;
            }
            td {
                border: 0.5px solid lightgray;

                height: 45px;
                border-top: none;
                border-bottom: 0.5px solid lightgray;
                text-align: center;
            }
            .PersonalApplyBodyConent_ApplyContents_CalendarTable_ArrowClick {
                width: 40px;
                border-top: 0.5px solid lightgray;
                border-bottom: 0.5px solid lightgray;
                border-right: none;
                border-left: none;
                svg {
                    height: 20px;
                    width: 20px;
                    color: gray;
                    border-radius: 50%;
                    :hover {
                        cursor: pointer;
                        background: lightgray;
                        color: black;
                    }
                }
            }
            .PersonalApplyBodyConent_ApplyContents_CalendarTable_ButtonTable {
                height: 90px;
                td {
                    :hover {
                        cursor: pointer;
                        background: #eff4fc;
                    }
                }
            }
        }
    }
`;

const PersonalMainPageApplyMainPage = () => {
    return (
        <PersonalMainPageApplyMainDiv>
            <div className="Personal_Main_Float">
                <div className="Personal_Main_Float_Left">
                    <PersonalNavigationMainPage></PersonalNavigationMainPage>
                </div>
                <div className="Personal_Main_Float_Right">
                    <PersonalApplyBodyConentDivBox>
                        <div>
                            <div className="PersonalApplyBodyConent_ApplyButton">
                                <button>기안하기</button>
                            </div>
                            <PersonApplyContentSettingPage></PersonApplyContentSettingPage>
                            <PersonApplyContentPaymentPage></PersonApplyContentPaymentPage>
                            <PersonApplyContentUserSelectPage></PersonApplyContentUserSelectPage>
                            <PersonApplyContentInfoPage></PersonApplyContentInfoPage>
                            <PersonApplyContentSelectTablePage></PersonApplyContentSelectTablePage>
                            <PersonApplyContentReasonPage></PersonApplyContentReasonPage>
                        </div>
                    </PersonalApplyBodyConentDivBox>
                </div>
            </div>
        </PersonalMainPageApplyMainDiv>
    );
};

export default PersonalMainPageApplyMainPage;

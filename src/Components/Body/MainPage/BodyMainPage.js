import React from 'react';
import styled from 'styled-components';
import BodyMainPageMenuBar from './BodyMainPage/BodyMainPageMenuBar';
import BodyMainPageWorkStatus from './BodyMainPage/BodyMainPageContentLeft/BodyMainPageWorkStatus';
import BodyMainPagePayment from './BodyMainPage/BodyMainPageContentLeft/BodyMainPagePayment';
import PersonApplyContentDragMainPage from '../PersonalMainPage/PersonalMainPageApply/PersonApplyContent/PersonApplyContentModals/PersonApplyContentDrag/PersonApplyContentDragMainPage';

const BodyMainPageDivBox = styled.div`
    position: relative;
    .BodyMenbar {
        max-height: 273px;
        min-height: 150px;
        background: #e0e8ee;
        position: absolute;
        width: 100%;
        top: 60px;

        .BodyContentBox {
            width: 70%;
            margin: 0 auto;
            .BodyContnetListsShow {
                display: flex;
                margin-top: 30px;
                    margin-bottom: 60px;
                flex-flow: wrap;
                li {
                    width: 72px;
                    height: 72px;
                    border-radius: 50%;
                    background: #fff;
                    margin-right: 40px;
                    text-align: center;
                    :hover {
                        cursor: pointer;
                        background: #cae4f7;
                        .BodyContentIcons {
                            svg {
                                color: #2985db;
                                opacity: 0.5;
                            }
                        }
                    }

                    .BodyContentIcons {
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        position: relative;
                        svg {
                            position: absolute;
                            left: 5px;
                            top: 5px;
                            padding: 10px;
                            width: 60px;
                            height: 60px;
                            color: darkgray;
                        }
                    }
                    .BodyContentText {
                        margin-top: 20px;
                        color: #535559;
                    }
                }
            }

           
                }
                .BodyContentRight {
                    float: right;
                    width: 64%;
                    height: 100vh;
                    border: 1px solid blue;
                }
            }
        }
    }
`;

const BodyContentMainContainerDivBox = styled.div`
    background: #eaeced;
    padding-top: 30px;
    .BodyContentFloat {
        width: 70%;
        margin: 0 auto;

        ::after {
            clear: both;
            content: '';
            display: block;
        }
        .BodyContentLeft {
            float: left;
            width: 33%;
            height: 100vh;
            min-width: 300px;
            .MainBodyContent_Left_WorkCheck {
                background: #fcfcfc;
                border-radius: 10px;
                h4 {
                    background: #eaeced;
                }
                .MainBodyContent_Left_WorkCheckDesc {
                    border: 1px solid lightgray;
                    padding: 14px 0 14px 14px;
                    .TimerContainer {
                        display: flex;
                        position: relative;
                        .TimerContainer_WorkStatus {
                            margin-left: 20px;
                            padding: 8px 15px 8px 15px;
                            background: #e0e8ee;
                            border-radius: 5px;
                            font-size: 0.9em;
                            color: blue;
                        }
                        .TimerContainer_WorkStatusArrowDown {
                            position: absolute;
                            right: 20px;
                            width: 40px;
                            height: 40px;
                            line-height: 40px;
                            text-align: center;
                            border-radius: 50%;
                            svg {
                                height: 40px;
                            }
                            :hover {
                                cursor: pointer;
                                background: darkgray;
                                opacity: 0.5;
                            }
                        }
                        .TimerContainer_WorkStatusArrowUp {
                            position: absolute;
                            right: 20px;
                            width: 40px;
                            height: 40px;
                            line-height: 40px;
                            text-align: center;
                            border-radius: 50%;
                            svg {
                                -ms-transform: rotate(180deg); /* IE 9 */
                                -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
                                transform: rotate(180deg);

                                height: 40px;
                            }
                            :hover {
                                cursor: pointer;
                                background: darkgray;
                                opacity: 0.5;
                            }
                        }
                    }
                }
            }
        }
    }
`;

const BodyMainPage = () => {
    return (
        <BodyMainPageDivBox>
            <div className="BodyMenbar">
                <BodyMainPageMenuBar></BodyMainPageMenuBar>
                <BodyContentMainContainerDivBox>
                    <div className="BodyContentFloat">
                        <div className="BodyContentLeft">
                            <BodyMainPageWorkStatus></BodyMainPageWorkStatus>
                            <BodyMainPagePayment></BodyMainPagePayment>
                        </div>
                        <div className="BodyContentRight">{/* <PersonApplyContentDragMainPage></PersonApplyContentDragMainPage> */}</div>
                    </div>
                </BodyContentMainContainerDivBox>
            </div>
        </BodyMainPageDivBox>
    );
};

export default BodyMainPage;

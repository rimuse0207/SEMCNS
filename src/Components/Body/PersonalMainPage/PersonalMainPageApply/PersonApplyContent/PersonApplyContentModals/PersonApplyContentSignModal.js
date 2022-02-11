import React, { useState } from 'react';
import styled from 'styled-components';
import { ControlledTreeEnvironment, UncontrolledTreeEnvironment, Tree, StaticTreeDataProvider } from 'react-complex-tree';
import 'react-complex-tree/lib/style.css';
import { IoIosArrowUp, IoIosArrowDown, IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import './PersonApplyContentSignModal.css';
const PersonApplyContentSignModalMainDivBox = styled.div`
    h4 {
        border-bottom: 1px solid lightgray;
        padding-bottom: 20px;
        width: 850px;
    }
    .SignMainFloat {
        ::after {
            clear: both;
            content: '';
            display: block;
        }
        .SignMainFloat_Left {
            float: left;
            width: 500px;
            .SignMainFloat_Left_FirstBox {
                border: 1px solid lightgray;
                height: 450px;
            }
        }
        .SignMainFloat_Right {
            float: right;
            width: 250px;

            select {
                width: 100%;
                height: 30px;
                border: 1px solid lightgray;
                padding-left: 10px;
                border-radius: 5px;
            }
            .SelectMainDivBox {
                margin-top: 14px;
                h5 {
                    font-size: 0.9em;
                    font-weight: 500;
                    margin-bottom: 4px;
                }
                .SelectedLineBorderBox {
                    min-height: 120px;
                    border: 1px solid lightgray;
                    position: relative;
                    .IconDivMainBox {
                        position: absolute;
                        top: -23px;
                        right: 0px;
                        .IconDivBox {
                            display: inline-block;
                            border: 1px solid lightgray;
                            margin-left: 4px;
                            width: 20px;
                            height: 20px;
                            line-height: 20px;
                            text-align: center;
                            color: gray;
                            border-radius: 5px;
                            :hover {
                                cursor: pointer;
                                background: #d6d6d6;
                            }
                        }
                    }

                    .IconInsert_DivMainBox {
                        position: absolute;
                        top: 0;
                        left: -70px;
                        .IconInsert_DivBox {
                            border: 1px solid lightgray;
                            margin-top: 7px;
                            width: 35px;
                            height: 35px;
                            line-height: 35px;
                            text-align: center;
                            color: gray;
                            border-radius: 5px;
                            font-size: 1.3em;
                            :hover {
                                cursor: pointer;
                                background: #d6d6d6;
                            }
                        }
                    }
                }
            }
        }
        .SignMainFloat_Left_InputBox {
            height: 35px;
            margin-bottom: 20px;
            input {
                width: 100%;
                height: 100%;
                border: 1px solid lightgray;
                padding-left: 10px;
                border-radius: 5px;
            }
        }
        .SignMainFloat_Left_FirstBox {
            width: 250px;

            h5 {
                padding-left: 10px;
            }
        }
        .SignMainFloat_Left_SecondBox {
            width: 230px;
            border: 1px solid lightgray;
            .UserChecked_MainDivBox {
                height: 90%;
            }
            .AllCheck_MainDivBox {
                height: 10%;
                background: #efefef;

                .AllCheck_SubDivBox {
                    line-height: 45px;
                    margin-left: 10px;
                    span {
                        color: #056ac9;
                        margin-right: 5px;
                        :hover {
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        .SignMainFloat_Second_Box_Float {
            display: flex;
            flex-flow: wrap;
            justify-content: space-between;
        }
    }
    li {
        :hover {
            cursor: pointer;
        }
        button {
            :hover {
                cursor: pointer;
            }
        }
    }
`;

const PersonApplyContentSignModal = () => {
    const [userShow, setUserShow] = useState([]);
    const items = {
        root: {
            index: 'root',
            canMove: true,
            hasChildren: true,
            children: ['SEMCNS'],
            data: 'Root item',
            canRename: true,
        },
        SEMCNS: {
            index: 'SEMCNS',
            canMove: true,
            hasChildren: true,
            children: ['child2', 'child3'],
            data: 'SEMCNS',
            canRename: true,
        },
        child2: {
            index: 'child2',
            canMove: true,
            hasChildren: true,
            children: ['child4', 'child5', 'child6', 'child7', 'child8'],
            data: '대표이사',
            canRename: true,
            virture: [
                {
                    name: '최명배',
                    id: 'adadad',
                    inputCheck: false,
                    team: 'SEMCNS',
                },
                {
                    name: '최유진',
                    id: 'adadad',
                    inputCheck: false,
                    team: '대표이사',
                },
            ],
        },
        child3: {
            index: 'child3',
            canMove: true,
            hasChildren: false,
            children: [],
            data: '기타',
            canRename: true,
        },
        child4: {
            index: 'child4',
            canMove: true,
            hasChildren: true,
            children: ['child9', 'child10'],
            data: '연구소',
            canRename: true,
        },
        child5: {
            index: 'child5',
            canMove: true,
            hasChildren: true,
            children: [],
            data: '제조혁신팀',
            canRename: true,
        },
        child6: {
            index: 'child6',
            canMove: true,
            hasChildren: true,
            children: [],
            data: '제조팀',
            canRename: true,
        },
        child7: {
            index: 'child7',
            canMove: true,
            hasChildren: true,
            children: [],
            data: '마케팅팀',
            canRename: true,
        },
        child8: {
            index: 'child8',
            canMove: true,
            hasChildren: true,
            children: [],
            data: '경영지원팀',
            canRename: true,
        },
    };
    return (
        <PersonApplyContentSignModalMainDivBox>
            <div>
                <div>
                    <h4>결재선 선택</h4>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <div className="SignMainFloat">
                        <div className="SignMainFloat_Left">
                            <div className="SignMainFloat_Left_InputBox">
                                <input placeholder="이름/조직 검색"></input>
                            </div>
                            <div className="SignMainFloat_Second_Box_Float">
                                <div className="SignMainFloat_Left_FirstBox">
                                    <div>
                                        <style>{`
                                             :root {
                                                --rct-color-tree-bg: #fff;
                                                --rct-color-tree-focus-outline: #fff;
                                                --rct-color-focustree-item-selected-bg: #efefef;
                                                --rct-color-focustree-item-selected-color:#168;
                                                --rct-color-focustree-item-focused-border: #fff;
                                                --rct-color-focustree-item-draggingover-bg: #ecdede;
                                                --rct-color-focustree-item-draggingover-color: #168;
                                                --rct-color-search-highlight-bg: #efff;
                                                --rct-color-drag-between-line-bg: #efefef;
                                                --rct-color-arrow: #168;
                                                --rct-item-height: 30px;
                                                }
                                        `}</style>
                                        <UncontrolledTreeEnvironment
                                            dataProvider={new StaticTreeDataProvider(items, (item, data) => ({ ...item, data }))}
                                            getItemTitle={item => item.data}
                                            viewState={{
                                                'tree-1': {
                                                    expandedItems: ['SEMCNS'],
                                                },
                                            }}
                                            onFocusItem={item => {
                                                console.log(item);
                                                // setUserShow(item.virture);
                                            }}
                                            onMissingItems={item => {
                                                console.log(item);
                                                // setUserShow(item.virture);
                                            }}
                                            // defaultInteractionMode={{
                                            //     // mode: 'custom',
                                            //     createInteractiveElementProps: (item, treeId, actions, renderFlags) => ({
                                            //         onClick: e => {
                                            //             console.log(e);
                                            //             console.log(item);
                                            //             console.log(treeId);
                                            //             console.log(actions);
                                            //             console.log(renderFlags);
                                            //             setUserShow(item.virture);
                                            //         },
                                            //         onFocus: () => {
                                            //             actions.focusItem();
                                            //         },
                                            //         onMissingItems: item => {
                                            //             console.log('떠남', item);
                                            //         },

                                            //         tabIndex: !renderFlags.isRenaming ? (renderFlags.isFocused ? 0 : -1) : undefined,
                                            //     }),
                                            // }}
                                        >
                                            <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example"></Tree>
                                        </UncontrolledTreeEnvironment>
                                        {/* <div style={{ background: '#eff4fc', height: '30px', lineHeight: '30px' }}>
                                            <h5>SEMCNS</h5>
                                        </div>
                                        <div style={{ padding: '5px', fontSize: '0.8em' }}>
                                            <ul>
                                                <li>SEMCNS</li>
                                                <li>
                                                    <ul>대표이사</ul>
                                                </li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="SignMainFloat_Left_SecondBox">
                                    <div className="UserChecked_MainDivBox">
                                        <div style={{ padding: '5px', fontSize: '0.8em' }}>
                                            <ul>
                                                {userShow.map((item, i) => {
                                                    return (
                                                        <li>
                                                            <div>
                                                                <input type="checkbox" checked={item.inputCheck}></input>
                                                                <span>{item.name}</span>
                                                                <span>( {item.team} )</span>
                                                            </div>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="AllCheck_MainDivBox">
                                        <div className="AllCheck_SubDivBox">
                                            <span>전체 </span>
                                            <span> 선택안함</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="SignMainFloat_Right">
                            <div>
                                <div style={{ width: '250px' }}>
                                    <div>
                                        <select></select>
                                    </div>
                                    <div>
                                        <div className="SelectMainDivBox">
                                            <h5>신청</h5>
                                            <div className="SelectedLineBorderBox">
                                                <div className="IconInsert_DivMainBox">
                                                    <div className="IconInsert_DivBox">
                                                        <IoIosArrowForward></IoIosArrowForward>
                                                    </div>
                                                    <div className="IconInsert_DivBox">
                                                        <IoIosArrowBack></IoIosArrowBack>
                                                    </div>
                                                </div>
                                                <div className="IconDivMainBox">
                                                    <div className="IconDivBox">
                                                        <IoIosArrowUp></IoIosArrowUp>
                                                    </div>
                                                    <div className="IconDivBox">
                                                        <IoIosArrowDown></IoIosArrowDown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="SelectMainDivBox">
                                            <h5>처리</h5>
                                            <div className="SelectedLineBorderBox">
                                                <div className="IconInsert_DivMainBox">
                                                    <div className="IconInsert_DivBox">
                                                        <IoIosArrowForward></IoIosArrowForward>
                                                    </div>
                                                    <div className="IconInsert_DivBox">
                                                        <IoIosArrowBack></IoIosArrowBack>
                                                    </div>
                                                </div>
                                                <div className="IconDivMainBox">
                                                    <div className="IconDivBox">
                                                        <IoIosArrowUp></IoIosArrowUp>
                                                    </div>
                                                    <div className="IconDivBox">
                                                        <IoIosArrowDown></IoIosArrowDown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="SelectMainDivBox">
                                            <h5>참조</h5>
                                            <div className="SelectedLineBorderBox">
                                                <div className="IconInsert_DivMainBox">
                                                    <div className="IconInsert_DivBox">
                                                        <IoIosArrowForward></IoIosArrowForward>
                                                    </div>
                                                    <div className="IconInsert_DivBox">
                                                        <IoIosArrowBack></IoIosArrowBack>
                                                    </div>
                                                </div>
                                                <div className="IconDivMainBox">
                                                    <div className="IconDivBox">
                                                        <IoIosArrowUp></IoIosArrowUp>
                                                    </div>
                                                    <div className="IconDivBox">
                                                        <IoIosArrowDown></IoIosArrowDown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PersonApplyContentSignModalMainDivBox>
    );
};
export default PersonApplyContentSignModal;

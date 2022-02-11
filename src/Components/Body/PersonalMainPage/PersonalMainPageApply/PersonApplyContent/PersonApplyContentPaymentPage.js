import React, { useState } from 'react';
import styled from 'styled-components';
import { BsPlusCircle } from 'react-icons/bs';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import PersonApplyContentSignModal from './PersonApplyContentModals/PersonApplyContentSignModal';
import PersonApplyContentApplyModal from './PersonApplyContentModals/PersonApplyContentApplyModal';
import DragLand from './PersonApplyContentModals/PersonApplyContentDrag/DragLand';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        animation: 'smoothAppear 0.3s ease',
        zIndex: '105',
    },
};

Modal.setAppElement('#Modals');

const PersonApplyContentPaymentPageMainDivBox = styled.div`
    .PersonalApplyBodyConent_ApplyContents_Sign {
        table {
            border-collapse: collapse;
            width: 1000px;
            text-align: left;
            min-width: 700px;
            margin-top: 20px;
            margin-bottom: 20px;
            tbody {
                th {
                    background: #eff4fc;
                    text-align: center;
                    width: 170px;
                    padding: 15px;
                    border: 1px solid lightgray;
                    font-weight: 500;
                    height: 45px;
                }
                td {
                    border: 1px solid lightgray;

                    height: 45px;
                    border-top: none;
                    border-bottom: 0.5px solid lightgray;
                    text-align: center;
                }
            }
            .PersonalApplyBodyCotent_ApplyContentsTable {
                td {
                    height: 100px;
                }
            }
            .ClicksButtonMainTh {
                position: relative;
            }
            .ClicksButtonMainIcon {
                position: absolute;
                top: 3px;
                right: 3px;
                color: gray;
                width: 30px;
                height: 30px;
                line-height: 30px;
                border-radius: 50%;
                :hover {
                    cursor: pointer;
                    background: lightgray;
                }
            }
        }
        .PayMentFlexDivBox {
            h4 {
                margin-right: 30px;
                display: inline;
            }
            div {
                display: inline;
                button {
                    border: none;
                    background: none;
                    color: blue;
                    :hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
`;

const PersonApplyContentPaymentPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [ApplyMainModalOpen, setApplyMainModalOpen] = useState(false);
    const [ApplyModalOpen, setApplyModalOpen] = useState(false);
    const [SendSelectApplyNames, setSendSelectApplyNames] = useState([
        {
            id: 1,
            text: '테스트',
        },
        {
            id: 2,
            text: '김종대',
        },
        {
            id: 3,
            text: '유성재',
        },
    ]);
    const [SelectApplyNames, setSelectApplyNames] = useState([
        {
            id: 1,
            text: '테스트',
        },
        {
            id: 2,
            text: '김종대',
        },
        {
            id: 3,
            text: '유성재',
        },
    ]);
    const closeModal = () => {
        setApplyMainModalOpen(false);
        setApplyModalOpen(false);
        setModalIsOpen(false);
    };
    const ApplyModalhandleClicks = e => {
        console.log(e);
        setModalIsOpen(true);
        setApplyModalOpen(true);
    };
    return (
        <PersonApplyContentPaymentPageMainDivBox>
            <div className="PersonalApplyBodyConent_ApplyContents_Sign">
                <div>
                    <div>
                        <div className="PayMentFlexDivBox">
                            <h4>결재선</h4>
                            <div>
                                <button
                                    onClick={() => {
                                        setModalIsOpen(true);
                                        setApplyMainModalOpen(true);
                                    }}
                                >
                                    결재선 설정
                                </button>
                            </div>
                        </div>

                        <table>
                            <tbody>
                                <tr>
                                    <th rowSpan={3} className="ClicksButtonMainTh">
                                        <div>신청</div>
                                        <div className="ClicksButtonMainIcon" onClick={e => ApplyModalhandleClicks(e)}>
                                            <BsPlusCircle></BsPlusCircle>
                                        </div>
                                    </th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th rowSpan={3} className="ClicksButtonMainTh">
                                        <div>처리</div>
                                        <div className="ClicksButtonMainIcon">
                                            <BsPlusCircle></BsPlusCircle>
                                        </div>
                                    </th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr className="PersonalApplyBodyCotent_ApplyContentsTable">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    {SendSelectApplyNames.map((list, i) => {
                                        return <td>{list.text}</td>;
                                    })}
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>참조</th>
                                    <td colSpan="9" style={{ textAlign: 'left', paddingLeft: '20px' }}>
                                        <input
                                            style={{ height: '30px', border: '1px solid lightgray', paddingLeft: '10px' }}
                                            placeholder="클릭후 입력하세요"
                                        ></input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalIsOpen} style={customStyles}>
                <div>
                    {ApplyMainModalOpen ? <PersonApplyContentSignModal></PersonApplyContentSignModal> : <div></div>}
                    {ApplyModalOpen ? (
                        <PersonApplyContentApplyModal
                            setSelectApplyNames={data => setSelectApplyNames(data)}
                            SelectApplyNames={SelectApplyNames}
                        ></PersonApplyContentApplyModal>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div>
                    <div className="PersonApplyContent_Modal_divButton">
                        <button onClick={() => closeModal()}>취소</button>
                        <button
                            onClick={() => {
                                closeModal();
                                setSendSelectApplyNames(SelectApplyNames);
                            }}
                        >
                            확인
                        </button>
                    </div>
                </div>
            </Modal>
        </PersonApplyContentPaymentPageMainDivBox>
    );
};

export default PersonApplyContentPaymentPage;

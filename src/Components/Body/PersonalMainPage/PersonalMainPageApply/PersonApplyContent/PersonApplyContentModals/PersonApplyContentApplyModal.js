import React, { useState } from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PersonApplyContentDragMainPage from './PersonApplyContentDrag/PersonApplyContentDragMainPage';
import DragLand from './PersonApplyContentDrag/DragLand';

const PersonApplyContentApplyModalMainDivBox = styled.div`
    h4 {
        border-bottom: 1px solid lightgray;
        padding-bottom: 20px;
        width: 350px;
    }
`;

const PersonApplyContentApplyModal = ({ setSelectApplyNames, SelectApplyNames }) => {
    return (
        <PersonApplyContentApplyModalMainDivBox>
            <div>
                <div>
                    <h4>신청 설정</h4>
                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <DragLand
                                    SelectApplyNames={SelectApplyNames}
                                    setSelectApplyNames={data => {
                                        setSelectApplyNames(data);
                                    }}
                                ></DragLand>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PersonApplyContentApplyModalMainDivBox>
    );
};
export default PersonApplyContentApplyModal;

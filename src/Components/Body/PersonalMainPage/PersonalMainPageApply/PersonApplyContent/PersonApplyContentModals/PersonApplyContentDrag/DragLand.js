import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Example from './example';
const DragLand = ({ setSelectApplyNames, SelectApplyNames, handleDeleteNames }) => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Example
                SelectApplyNames={SelectApplyNames}
                setSelectApplyNames={data => setSelectApplyNames(data)}
                handleDeleteNames={data => handleDeleteNames(data)}
            />
        </DndProvider>
    );
};

export default DragLand;

import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
};
const PersonApplyContentDragMainPage = ({ id, text, moveCard, findCard }) => {
    const originalIndex = findCard(id).index;
    const [{ isDragging }, drag] = useDrag({
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
        end: (dropResult, monitor) => {
            const { id: droppedId, originalIndex } = monitor.getItem();
            const didDrop = monitor.didDrop();
            if (!didDrop) {
                moveCard(droppedId, originalIndex);
            }
        },
    });
    const [, drop] = useDrop({
        canDrop: () => false,
        hover({ id: draggedId }) {
            if (draggedId !== id) {
                const { index: overIndex } = findCard(id);
                moveCard(draggedId, overIndex);
            }
        },
    });
    const opacity = isDragging ? 0 : 1;
    return (
        <div ref={node => drag(drop(node))} style={{ ...style, opacity }}>
            {text}
        </div>
    );
};

export default PersonApplyContentDragMainPage;

import { useState, useCallback, useEffect } from 'react';
import { Card } from './Card.js';
import update from 'immutability-helper';
import styled from 'styled-components';

const DragMainPageStyled = styled.div`
    height: 250px;
    overflow: auto;
    margin-top: 30px;
    border: 1px solid lightgray;
    padding: 10px;
`;

const style = {
    width: '80%',
    marginTop: '10px',
};
export const Container = ({ setSelectApplyNames, SelectApplyNames }) => {
    // eslint-disable-next-line no-lone-blocks
    {
        const [cards, setCards] = useState(SelectApplyNames);
        const moveCard = useCallback((dragIndex, hoverIndex) => {
            setCards(prevCards =>
                update(prevCards, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, prevCards[dragIndex]],
                    ],
                })
            );
        }, []);
        const renderCard = useCallback((card, index) => {
            return <Card key={card.id} index={index} id={card.id} text={card.text} moveCard={moveCard} />;
        }, []);

        useEffect(() => {
            console.log(cards);
            setSelectApplyNames(cards);
        }, [cards]);

        return (
            <DragMainPageStyled>
                <div>
                    <input></input>
                </div>
                <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
            </DragMainPageStyled>
        );
    }
};

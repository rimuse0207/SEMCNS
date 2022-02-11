import React from 'react';
import styled from 'styled-components';
import { IoMdPerson } from 'react-icons/io';
import { Link } from 'react-router-dom';
const NavigationMainPageMainDivBox = styled.div`
    position: fixed;
    height: 60px;
    width: 100%;
    padding: 0 20px 0 24px;
    border-bottom: 1px solid #dadce0;
    z-index: 1;
    background: white;
    .NavigationMainFlexdiv {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        width: 90%;
        margin: 0 auto;
    }
    .Navigation_Icons {
        width: 45px;
        height: 45px;
        background-color: lightgray;
        border-radius: 50%;

        svg {
            padding: 10px;
            width: 100%;
            height: 100%;
            color: darkgray;
        }
    }
`;

const NavigationMainPage = () => {
    return (
        <NavigationMainPageMainDivBox>
            <div className="NavigationMainFlexdiv">
                <div>
                    <Link to="/main">
                        <h2>SEMCNS</h2>
                    </Link>
                </div>
                <div className="Navigation_Icons">
                    <IoMdPerson></IoMdPerson>
                </div>
            </div>
        </NavigationMainPageMainDivBox>
    );
};

export default NavigationMainPage;

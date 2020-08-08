import React from 'react';
import styled from 'styled-components'

import Title from '../title/title'
import {animatedBackground} from '../../keyframes/keyframes'

const CardContainer = styled.div`
    border: 1px solid grey;
    border-radius: 15px;
    height: auto;
    max-height: 180px;
    overflow: hidden;
    cursor: pointer;
    transition: 0.2s ease;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover, &:focus{
        color: white;
        background: linear-gradient(to right, rgba(204,26,112,1) 0%, rgba(118,26,204,1) 41%, rgba(52,13,178,1) 60%, rgba(41,11,174,1) 63%, rgba(34,10,171,1) 65%, rgba(33,56,177,1) 74%, rgba(31,189,194,1) 100%);
        background-size: 1000%;
        border: none;
        transform: translate(0, -10px);
        box-shadow: -20px 10px 8px 0px rgba(156,154,156,1);
        animation: ${animatedBackground} 10s alternate infinite;
    }

    &:active{
        transform: translate(0, 0);
    }
`

const CardHeader = styled.header`
    height: 60px;
    width:20;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardSection = styled.section`
    padding: 10px;
    color: grey; 
    word-break: break-all; 

    ${CardContainer}:hover &{
        color:  rgba(237,216,237,1);
    }
`

function Notes({title, children, handleClick}) {
    return (
        <CardContainer onClick={handleClick} tabIndex={0}>
            <CardHeader>
                <Title fontSize='18px'>{title}</Title>
            </CardHeader>
            <CardSection>
                {children}
            </CardSection>
        </CardContainer>
    )
}

export default Notes;

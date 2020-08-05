import React from 'react';
import styled from 'styled-components'

import Title from '../title/title'

const CardContainer = styled.div`
    width: 180px;
    margin: 20px;
    border: 1px solid black;
    border-radius: 30px;
    height: auto;
    max-height: 300px;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover{
        transform: translate(15px, -10px);
        box-shadow: -20px 10px 8px 0px rgba(156,154,156,1);
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
`

function Notes({title, children, handleClick}) {
    return (
        <CardContainer onClick={handleClick}>
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

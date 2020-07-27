import React from 'react';
import styled from 'styled-components'

import Title from '../title/title'

const CardContainer = styled.div`
    width: 20%;
    margin: 10px;
    border: 1px solid black;
    border-radius: 10px;
    height: 300px;
`

const CardHeader = styled.header`
    height: 20%;
    width:20;
    border-bottom: 1px solid black;
    text-align: center;
`

const CardSection = styled.section`
`

function Notes({title, children}) {
    return (
        <CardContainer>
            <CardHeader>
                <Title>{title ? title : 'DEMOSTRATION TEXT'}</Title>
            </CardHeader>
            <CardSection>
                {children}
            </CardSection>
        </CardContainer>
    )
}

export default Notes;

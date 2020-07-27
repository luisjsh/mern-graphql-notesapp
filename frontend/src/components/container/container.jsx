import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width: ${props => props.width ? props.width : '40%'};
    height: ${props => props.height ? props.height : '70%'};
    max-height: ${props => props.maxheight ? props.maxheight : ''};
    background: white;
    border: 1px solid ${props => props.border ? props.border : 'black'};
    border-radius: 4px;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 30px;
    z-index: 3;
    transition: 0.3s;

    ${props => props.mediaquery ? props.mediaquery : ''}
`

function container({children, ...otherProps}) {
    return (
        <Container {...otherProps}>
            {children}
        </Container>
    )
}

export default container;

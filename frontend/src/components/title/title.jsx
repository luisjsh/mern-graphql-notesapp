import React from 'react'
import styled from 'styled-components'

import {upperArrowDisappear} from '../../keyframes/keyframes'

const Title = styled.h1`
    font-size: ${props => props.fontSize ? props.fontSize : '28px'};
    line-height: ${props => props.lineHeight ? props.lineHeight : '8px'};
    text-align: ${props => props.textAlign ? props.textAlign : 'center'};
    position: ${props => props.position ? props.position : 'relative'};
    bottom: ${props => props.bottom ? props.bottom : 'none'};
    margin: ${props => props.margin ? props.margin : '0'};
    cursor: ${props => props.cursor ? props.cursor : ''};

    &::before{
        ${props => props.before ? props.before : ''};
        position: absolute;
        top:-20px;
        width: 100%;
        transform: scale(1.5,1);
        animation: ${upperArrowDisappear} 1s linear infinite;
    }
`

const title = ({children , ...otherProps}) =>{
    return (
        <Title {...otherProps}>{children}</Title>
    )
}
export default title

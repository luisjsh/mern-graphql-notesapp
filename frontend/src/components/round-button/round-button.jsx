import React from 'react';
import styled from 'styled-components'

const RoundButton = styled.button`
    width: ${props => props.width ? props.width : '30px'};
    height: ${props => props.height ? props.height : '30px'};
    border: 1px solid ${props => props.borderColor ? props.borderColor : 'red'};
    border-radius: 100%;
    position: absolute;
    background: ${ props => props.icon ? `url(${props.icon}) no-repeat` : '' };
    background-color: white;
    background-size: ${props => props.iconSize ? props.iconSize : ''};
    background-position: center;
    top: ${props => props.top ? props.top : ''};
    right: ${props => props.right ? props.right : ''};
    left: ${props => props.left ? props.left : ''};
    bottom: ${props => props.bottom ? props.bottom : ''};
    transition: 0.3s;
    cursor: pointer;

    &:hover{
        width: 40px;
        height: 40px;
    }
`

function roundbutton({ handleClick, ...otherProps}) {
    return (
        <RoundButton onClick={handleClick} {...otherProps} />
    )
}

export default roundbutton;

import React from 'react';
import styled from 'styled-components'

import RoundButton from '../round-button/round-button'

const Sidebar = styled.div`
    height: 100%;
    width: 25%;
    background: white;
    position: fixed;
    border-left: 1px solid black;
    right: ${props => props.right ? props.right : '0'};
    top: 0;
    margin: 0;
    display: ${props => props.display ? props.display: ''};
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function sidebar({handleClick, ...otherProps}) {
    return (
        <div>
        <RoundButton borderColor='black' handleClick={handleClick} top='10px' right='10px' />
        <Sidebar {...otherProps}>
        </Sidebar>
        </div>
    )
}

export default sidebar;

import React from 'react';
import reactDOM from 'react-dom'
import styled from 'styled-components'

import {notificationPopUp} from '../../keyframes/keyframes'

const Notification = styled.div`
    position: fixed;
    top: 10px;
    width: 90%;
    background: ${ props => props.color ? props.color :'red'};
    height: 50px;
    border-radius: 4px;
    display:flex;
    align-items: center;
    justify-content: center;
    animation: ${notificationPopUp} 3s linear forwards;
    color: white;
    font-size: 20px;
    z-index: 10;   
`

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`

function notification({children, ...otherProps}) {
    return (
        reactDOM.createPortal(
            <Wrapper>
                <Notification {...otherProps}>
                    {children}
                </Notification>
            </Wrapper>,
            document.querySelector('#modal')
        )
    )
}

export default notification;

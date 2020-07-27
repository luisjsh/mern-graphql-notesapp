import React from 'react';
import styled from 'styled-components'

import {notificationPopUp} from '../../keyframes/keyframes'

const Notification = styled.div`
    position: fixed;
    top: 10px;
    width: 100%;
    background: ${ props => props.color ? props.color :'red'};
    height: 50px;
    border-radius: 4px;
    display:flex;
    align-items: center;
    justify-content: center;
    animation: ${notificationPopUp} 3s linear infinite;
    color: white;
    font-size: 20px;
    
`

function notification({children, ...otherProps}) {
    return (
        <Notification {...otherProps}>
            {children}
        </Notification>
    )
}

export default notification;

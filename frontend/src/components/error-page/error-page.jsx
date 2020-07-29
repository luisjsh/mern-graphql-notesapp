import React from 'react';
import styled from 'styled-components'

import CustomButton from '../CustomButton/CustomButton'
import Title from '../title/title'

import ServerErrorIcon from '../img/server-error-icon.svg'

const ErrorPage = styled.div`
    width: 100%;
    height: 100%;
    position absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const IconBackground = styled.div`
    background: url(${ServerErrorIcon}) no-repeat;
    background-size: 200px;
    background-position: center;
    width: 100%;
    height: 40%;
`

function errorpage({title, handleClick}) {
    return (
        <ErrorPage>
            <Title lineHeight='25px'>{title}</Title>
            <IconBackground/>
            <CustomButton handleClick={handleClick}>Go back</CustomButton>
        </ErrorPage>
    )
}


export default errorpage;

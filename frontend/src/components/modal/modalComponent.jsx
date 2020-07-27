import React from 'react'
import reactDOM from 'react-dom'
import styled from 'styled-components'

const Modal = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Close = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: grey;
    opacity: 0.6;
    z-index: 0;
`

const modal  = ({children, handleClick}) =>(
    
    reactDOM.createPortal(
        <Modal>
            <Close onClick={handleClick} />
            {children}
        </Modal>,
        document.querySelector('#modal')
    )
)



export default modal
import styled from 'styled-components'
import {animatedBackground} from '../../keyframes/keyframes'

export const Nav = styled.nav`
    margin: 0;
    padding: 0;
    width: 100%;
    position: fixed;
    background: white;
    box-shadow: 0px 4px 56px 15px rgba(255,255,255,1);
    display: grid;
    grid-template-columns: .5fr 4fr .1fr .1fr;
    grid-gap: 10px;
    justify-items: center;
    align-items: center;
    z-index: 2;
`

export const NavTitle = styled.h1`
    color: black;
    font-size: 30px;
    cursor: pointer;
    transition: 0.3s;
    
    &:hover{
        transform: translateX(3px);
        background: linear-gradient(to right, rgba(204,26,112,1) 0%, rgba(118,26,204,1) 41%, rgba(52,13,178,1) 60%, rgba(41,11,174,1) 63%, rgba(34,10,171,1) 65%, rgba(33,56,177,1) 74%, rgba(31,189,194,1) 100%);     
        background-size: 10000%;
        animation: ${animatedBackground} 4s alternate infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;  
    }
`

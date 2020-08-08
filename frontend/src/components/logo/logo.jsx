import React from 'react'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import logoImage from './img/logo/logo-icon.svg'


const Logo = styled.button`
    background: url(${logoImage}) no-repeat;
    background-size:60px;
    background-position:center;
    width:70px;
    height:70px;
    cursor: pointer;
    border:none;
    transition: 0.3s;

    &:hover{
        width: 80px;
        height: 80px;
        background-size: 70px;
    }
`

function logo (props){
    return(
        <Logo onClick={()=>props.history.push(`/${props.username? 'homepage' : '' }`)} />
    )
}

const mapStatetoProps = ({user: {username}})=>{
    return{
        username
    }
}

export default connect (mapStatetoProps) (withRouter(logo));

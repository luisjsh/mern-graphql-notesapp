import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import RoundButton from '../round-button/round-button'
import CustomButton from '../CustomButton/CustomButton'

import userIcon from '../img/user-icon.svg'

const LogedUser = styled.div`
    margin: 0;
    width: 80px;
    height: 80px;
    display:flex;
    align-items:center;
`

const Sidebar = styled.div`
    height: 100%;
    width: 0;
    background: white;
    position: fixed;
    border-left: 1px solid black;
    right: ${props => props.right ? props.right : '0'};
    top: 0;
    margin: 0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s;

    ${LogedUser}:focus-within &, ${LogedUser}:hover &{
        width: 20%;
    }
`

const SidebarHeader = styled.header`
    width: 100%;
    height: 30%;
    border-bottom: 1px solid black;
`

const SidebarSection = styled.section`
    width: 100%;
    height: 70%;
    display: block;
    justify-content: center;

    ${LogedUser}:focus-within &, ${LogedUser}:hover &{
        display: flex;
    }
`

function UserLoged(props) {
    return (
        <LogedUser>
            <RoundButton icon={userIcon} iconSize='30px' width='50px' height='50px' borderColor='black'/>
            <Sidebar>   
                <SidebarHeader>
                </SidebarHeader>
                <SidebarSection>
                    <a onClick={()=>props.history.push('/')}>Change password</a>
                    <CustomButton handleClick={()=>props.logOut()}fontColor='red' borderColor='red'>LogOut</CustomButton>
                </SidebarSection>
            </Sidebar>    
        </LogedUser>    
    )
}

const mapDispatchtoProps = (dispatch)=>(
    {
        logOut: ( )=>{dispatch({type:'LOG_OUT'})}
    }
)

export default connect(null, mapDispatchtoProps)(withRouter(UserLoged));

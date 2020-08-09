import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import RoundButton from '../round-button/round-button'
import CustomButton from '../CustomButton/CustomButton'
import Title from '../title/title'

import userIcon from '../img/user-icon.svg'

const LogedUser = styled.div`
    margin: 0;
    width: 80px;
    height: 80px;
    display:flex;
    align-items:center;
`

const Sidebar = styled.div`
    height: 40%;
    width: 0;
    background: white;
    position: fixed;
    border: 1px solid grey;
    border-radius: 10px;
    right: ${props => props.right ? props.right : '0'};
    top: 100px;
    margin: 0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.3s;

    ${LogedUser}:focus-within &, ${LogedUser}:hover &, &:hover, &:focus-within{
        width: 20%;
        right: 10px;
    }
`

const SidebarSection = styled.section`
    width: 100%;
    height: 70%;
    display: block;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    ${LogedUser}:focus-within &, ${LogedUser}:hover &{
        display: flex;
        height: auto;
    }
`

function UserLoged(props) {
    return (
        <LogedUser>
            <RoundButton icon={userIcon} iconSize='50%' width='50px' height='50px' borderColor='black'/>
            <Sidebar>   
                <SidebarSection>
                    <Title cursor='pointer' fontSize='20px' onClick={()=>props.history.push('/')}>Change password</Title>
                    <CustomButton position='absolute' bottom='5px' handleClick={()=>props.logOut()}fontColor='red' borderColor='red'>LogOut</CustomButton>
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

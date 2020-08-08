import React , {useState} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import DefaultUserRedirect from '../../functions/user'

import CustomButton from '../CustomButton/CustomButton'
import RoundButton from '../round-button/round-button'
import Modal from '../modal/modalComponent'
import Logo from '../logo/logo'
import {Nav, NavTitle} from './navbar-styles'
import LoginModal from '../login-modal/login-modal'
import UserLoged from '../user-loged/user-loged'
import Title from '../title/title'

import PlusIcon from '../img/plus-icon.svg'

function Navbar(props) {

    const [viewModal, setViewModal] = useState(false)
 
    return (
       <Nav>
           {viewModal ?
           <Modal handleClick={ ()=>setViewModal(!viewModal)}>
               <LoginModal closeModal={ ()=>setViewModal(!viewModal)}/>
           </Modal> : ''}

            {
                props.username === undefined || props.username === 'undefined' ? 

                ''
                :

                <NavTitle onClick={()=>props.history.push('/homepage')} cursor='pointer'>Notes</NavTitle>

            }
            
            <Logo handleClick={DefaultUserRedirect} />

            {
                props.username === undefined || props.username === 'undefined' ? 

                ''
                :

                <RoundButton 
                icon={PlusIcon} 
                iconSize='50%' 
                width='40px' 
                height='40px' 
                borderColor='black' 
                position='relative' 
                hoverTransition="translateX(-10px) rotate(-90deg)" 
                onClick={()=>{props.history.push('/addnote')}}
                />
            }

            {
                props.username === undefined || props.username === 'undefined' ? 

                <CustomButton width='140px' handleClick={ ()=>setViewModal(!viewModal)}>Login</CustomButton>

                :

                <UserLoged />
            }
       </Nav>
    )
}

const mapStatetoProps = ({user: {username , userid}}) =>{
    return({
        username , userid
    })
}

export default connect (mapStatetoProps)(withRouter(Navbar));

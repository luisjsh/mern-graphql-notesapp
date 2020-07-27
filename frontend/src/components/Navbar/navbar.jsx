import React , {useState} from 'react';
import {connect} from 'react-redux'
import DefaultUserRedirect from '../../functions/user'

import CustomButton from '../CustomButton/CustomButton'
import Modal from '../modal/modalComponent'
import Logo from '../logo/logo'
import Nav from './navbar-styles'
import LoginModal from '../login-modal/login-modal'
import UserLoged from '../user-loged/user-loged'

function Navbar(props) {

    const [viewModal, setViewModal] = useState(false)

    console.log(props)
    return (
       <Nav>
           {viewModal ?
           <Modal handleClick={ ()=>setViewModal(!viewModal)}>
               <LoginModal closeModal={ ()=>setViewModal(!viewModal)}/>
           </Modal> : ''}

            <Logo handleClick={DefaultUserRedirect} />

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

export default connect (mapStatetoProps)(Navbar);

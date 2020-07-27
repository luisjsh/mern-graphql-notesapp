import React , {useState} from 'react';
import {graphql} from 'react-apollo'
import {connect} from 'react-redux'
import {flowRight as compose} from 'lodash'

import Title from '../title/title'
import CustomButton from '../CustomButton/CustomButton'
import CustomInput from '../custom-input/custom-input'
import Notification from '../notification/notification'

import {addUserMutation, getAllUsers} from '../../queries/queries' 

import EmailIcon from '../img/email-icon.svg'
import UserIcon from '../img/user-icon.svg' 
import PasswordIcon from '../img/lock-icon.svg'

function SignUp(props) {

    const [ items , setItem ] = useState({
        email: '',
        password: '',
        passwordconfirm: '',
        username: '',
        usernameValidated: false,
        emailValidated: false,
        passwordConfirmValidated: false,
        usernameInputBorder: '#9D9D9D',
        emailInputBorder: '#9D9D9D',
        passwordInputBorder: '#9D9D9D',
        passwordConfirmInputBorder: '#9D9D9D'
    })  

    let {users} = props.getUsers        

    const formHandler = ( event ) => {
        let { name, value } = event.target

        switch(name){
            case 'username':
                const finduser = users.filter( ({email, username}) =>{return username === value})

                if(finduser.length === 0 || value.length === 0 ||  finduser.length === users.length) setItem({...items, usernameInputBorder: '#9D9D9D', usernameValidated: true, [name]: value})
                if(finduser.length > 0 && value.length > 0) setItem({...items, usernameInputBorder: 'red', usernameValidated: false, [name]: value})
                
                break;

            case 'email':
                const findemail = users.filter( ({email, username}) =>{return email === value})
                
                if(findemail.length === 0 || findemail.length === users.length) setItem({...items, emailInputBorder: '#9D9D9D', emailValidated: true, [name]: value})
                if(findemail.length > 0) setItem({...items, emailInputBorder: 'red', emailValidated:false , [name]: value})
                break;

            case 'password':

                if(value.length >= 7) setItem({...items, passwordInputBorder: '#9D9D9D', [name]: value})
                if(value.length < 7) setItem({...items, passwordInputBorder: 'red', [name]: value})
                break;

            case 'passwordconfirm':

                if(value === items.password) setItem({...items, passwordConfirmInputBorder: '#9D9D9D', passwordConfirmValidated: true , [name]: value})
                if(value !== items.password) setItem({...items, passwordConfirmInputBorder: 'red', passwordConfirmValidated: false ,[name]: value})
                break;

            default: 
                return items
        }


    }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        let {usernameValidated, emailValidated, passwordConfirmValidated} = items 
        
        if(usernameValidated === false || emailValidated === false || passwordConfirmValidated === false)  return alert('empty values')

        
        const {data} = await props.addUser({
            variables:{
                email: items.email,
                password: items.password,
                username: items.username
            }
        })
        props.setUser(data.addUser)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Title margin='80px' fontSize='40px'>Sign up</Title>
            
            <CustomInput type='text' onChange={formHandler} value={items.username} name='username' title='Please add your username' label='Username' icon={UserIcon} borderColor={items.usernameInputBorder}/>
            <CustomInput type='email' onChange={formHandler} value={items.email} name='email' label='Email' title='Please add your email' icon={EmailIcon} borderColor={items.emailInputBorder}/>
            <CustomInput type='password' onChange={formHandler} value={items.password} name='password' label='Password' pattern=".{8,}" title="Eight or more characters" icon={PasswordIcon} borderColor={items.passwordInputBorder}/>
            <CustomInput type='password' onChange={formHandler} value={items.passwordconfirm} name='passwordconfirm' pattern=".{8,}" title="Eight or more characters" label='Confirm password' icon={PasswordIcon} borderColor={items.passwordConfirmInputBorder}/>

            <CustomButton width='100%'>SignUp</CustomButton>
            
        </form>
    )
}

const stateDispatchToProps = (dispatch)=>(
    {
        setUser: (user) =>{dispatch({ type:'SAVE_USER' , payload: user})}
    }
)

export default connect (null, stateDispatchToProps)
     (
         compose(
            graphql(getAllUsers, {name: 'getUsers'}),
            graphql(addUserMutation, {name: 'addUser'})
        )         
        (SignUp)
    );
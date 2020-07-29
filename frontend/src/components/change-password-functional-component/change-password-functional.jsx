import React, {useState} from 'react';
import {useQuery, useMutation} from '@apollo/client'
import {withRouter} from 'react-router-dom'

import {getUserWithEmail, changeUserPassword} from '../../queries/queries'

import Title from '../title/title'
import CustomButton from '../CustomButton/CustomButton'
import CustomInput from '../custom-input/custom-input'
import Notification from '../notification/notification'
import ErrorPage from '../error-page/error-page'

import lockIcon from '../img/lock-icon.svg'
import Logo from '../logo/logo'

function ChangePasswordFunctional({handleClose, email, PageStyle, history}) {
 
    const [items, setItems] = useState({
        password: '',
        confirmPassword: ''
    })

    const {loading, error, data} = useQuery(getUserWithEmail, {
        variables: {email}
    })
    

    let userInfo = data

    const [changePassword] = useMutation(changeUserPassword)

    const formHandler = (event)=>{
        const {name, value} = event.target        
        switch(name){
            case 'password':
                
                setItems({...items, [name]: value})
                break;
            
            case 'confirmPassword':
                
                setItems({...items, [name]: value})
                break;

            default: 
                return items;
        }
    }

    const handleSubmitPassword = async (event)=>{
        event.preventDefault()
        if(items.password !== items.confirmPassword) return alert('the password dont match!')
        let{useremail} = userInfo
        const {data} = await changePassword({
            variables:{
                id: useremail.id,
                password: items.password
            }
        })
        setItems({...items, notification: true})
        setTimeout(()=>{history.push('/')}, 300)
    }

    

    if(loading) return (
        <PageStyle>
            <Logo/>
        </PageStyle>
    )

    if(error)return(
        <PageStyle>
            <ErrorPage title='Something went wrong!' handleClick={handleClose}/>
        </PageStyle>
    )

    if(data.useremail== null) return(
        <PageStyle>
            <ErrorPage title='There is no account with that email' handleClick={handleClose}/>
        </PageStyle>
    )

    if(data.undefined !== null) return (
        <PageStyle>
            <Title margin='30px' lineHeight='25px'>Please enter your new password</Title>
            <form onSubmit={handleSubmitPassword} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <CustomInput type='password' name='password' onChange={formHandler} value={items.password} label='Password' title='email' icon={lockIcon} />
                <CustomInput type='password' name='confirmPassword' onChange={formHandler} value={items.confirmPassword} label='Confirm password' title='email' icon={lockIcon} />
                <CustomButton entitie='003E'>Save</CustomButton>
            </form>
        </PageStyle>
    )
}



export default withRouter(ChangePasswordFunctional);

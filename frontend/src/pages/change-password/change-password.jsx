import React, {useState} from 'react';
import styled from 'styled-components'

import Title from '../../components/title/title'
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomInput from '../../components/custom-input/custom-input'

import EmailIcon from '../../components/img/email-icon.svg'
import lockIcon from '../../components/img/lock-icon.svg'

const ChangepasswordPage = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

function ChangePassword() {

    const [email, setEmail] = useState('')
    const [id, setId] = useState(false)
    const [items, setItems] = useState({
        password: '',
        passwordConfirm: ''
    })

    const formHandler = (event)=>{
        const {name, value} = event.target
        
        switch(name){
            case 'email':
                
                setEmail(value)
                break;

            case 'password':

                setItems(...items, {[name]: value})
                break;
            
            case 'passwordConfirm':

                setItems(...items, {[name]: value})
                break;

            default: 
                return items;
        }
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()
        if(email.length == 0 ) return alert('bad')

        await fetch('http://localhost:4000/login/'+email)
            .then(async response =>{
                let {id} = await response.json()
                setId(id)
            })
    }

    const handleSubmitPassword = (event)=>{
        event.preventDefault()
        console.log(items)
    }

    return (

        id ? 

        <ChangepasswordPage>
            <Title margin='30px'>Please put your email</Title>
            <form onSubmit={handleSubmitPassword} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <CustomInput type='password' name='password' onChange={formHandler} value={items.password} label='Password' title='email' icon={lockIcon} />
                <CustomInput type='password' name='confirmPassword' onChange={formHandler} value={items.passwordConfirm} label='Confirm password' title='email' icon={lockIcon} />
                <CustomButton entitie='003E'>Save</CustomButton>
            </form>
        </ChangepasswordPage>

        :

        <ChangepasswordPage>
            <Title margin='30px'>Please put your email</Title>
            <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <CustomInput type='email' name='email' onChange={formHandler} value={email} label='Email' title='email' icon={EmailIcon} />
                <CustomButton entitie='003E'>Next</CustomButton>
            </form>
        </ChangepasswordPage>
    )
}


export default ChangePassword;

import React, {useState} from 'react';
import styled from 'styled-components'

import ChangePasswordVerificationAndSubmit from '../../components/change-password-functional-component/change-password-functional'

import Title from '../../components/title/title'
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomInput from '../../components/custom-input/custom-input'

import EmailIcon from '../../components/img/email-icon.svg'

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

    const formHandler = (event)=>{
        const {name, value} = event.target
       setEmail(value)
    }
    

    const handleSubmit = async (event)=>{
        event.preventDefault()
        if(email.length == 0 ) return alert('bad')

        setId(true)
    }


    return (

        id ? 
        
        <ChangePasswordVerificationAndSubmit email={email} id={id} PageStyle={ChangepasswordPage}/>

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

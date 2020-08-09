import React, {useState} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

//components
import CustomInput from '../custom-input/custom-input'
import CustomButton from '../CustomButton/CustomButton'
import CustomRoundButtom from '../round-button/round-button'
import Container from '../container/container'
import Title from '../title/title'
import breakpoint from '../breakpoint'

//icons
import EmailIcon from '../img/email-icon.svg'
import PasswordIcon from '../img/lock-icon.svg'

const containerMediaQuery = `
    @media ${breakpoint.laptop}{
        width: auto;
        height: auto;
        padding: 30px;
    }
`

function LoginModal(props) {

    const [items, setItems] = useState({
        email: '',
        password: '',
        passwordLabel: 'Password',
        passwordInputBorder: '#9D9D9D'
    })

    const formHandler = (event)=>{
        let { name, value } = event.target
        setItems({...items, [name]: value})
    }
    
    const SubmitHandler = async (event)=>{
        event.preventDefault()
        
        await fetch('http://localhost:4000/login/'+items.email).then( 
            async res => {         
                let {id, password, username} = await res.json()

                if(password !== items.password) return setItems({...items, passwordLabel: 'Wrong password' , passwordInputBorder: 'red'})
                props.setUser({id, username})
                props.closeModal()
                props.history.push('/homepage')
            })
    }

    return (
        <Container mediaquery={containerMediaQuery}>
            <CustomRoundButtom handleClick={props.closeModal} top='15px' right='10px'/>
            <form onSubmit={SubmitHandler} style={{height: '100%', display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <Title margin='30px' fontSize='35px'>Login</Title>
                <CustomInput type='email' onChange={formHandler} value={items.email} name='email' label='Email' margin='10px' icon={EmailIcon} />
                <CustomInput type='password' onChange={formHandler} value={items.password} name='password' label={items.passwordLabel} margin='10px' icon={PasswordIcon} borderColor={items.passwordInputBorder}/>  
                <CustomButton width='100%'>Login</CustomButton>
                <span onClick={()=>{props.history.push('/changepassword'); props.closeModal() }}>Change password</span>
            </form>
        </Container>
    )
}

const mapDispatchtoProps = (dispatch)=>(
    {
        setUser: (item)=>{dispatch({type:'SAVE_USER', payload:item})}
    }
)

export default connect (null, mapDispatchtoProps) (withRouter(LoginModal));

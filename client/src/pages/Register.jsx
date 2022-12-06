import React from 'react'
import styled from "styled-components"



const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)),
     url(/images/register-background.png) center;
     background-size: cover;
     display: flex;
     align-items: center;
     justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: #FFFFFF;

`

const Title = styled.h1`
    font-size: 45px;
    font-weight: 9900;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 20px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 20%;
    border: none;
    padding: 15px 20px;
    background-color: #94C9A9;  {seafoam green color}
    color: #FFFFFF;
    cursor: pointer;
    font-weight: 600;
`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="first name"/>
                <Input placeholder="last name"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="re-enter password"/>
                <Agreement> 
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE ACCOUNT</Button>
            </Form>
        </Wrapper>
    </Container>    
  )
}

export default Register
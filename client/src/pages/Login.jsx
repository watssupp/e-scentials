import React from 'react'
import styled from "styled-components"


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)),
     url(/images/login-background.png) center;
     background-size: cover;
     display: flex;
     align-items: center;
     justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: #FFFFFF; 

`

const Title = styled.h1`
    padding: 30px;
    font-size: 45px;
    font-weight: 9900;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 30px;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 10px 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    margin: 30px 0px;
    width: 20%;
    border: none;
    padding: 15px 20px;
    background-color: #94C9A9; {seafoam green color}
    color: white;
    cursor: pointer;
    font-weight: 600;
`

const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
            <Button>LOGIN</Button>
            <Link>FORGOT PASSWORD/USERNAME?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
    </Wrapper>
</Container>      
  )
}

export default Login
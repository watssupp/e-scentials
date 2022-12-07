import React from "react"
import { ArrowRightAltRounded } from "@material-ui/icons"
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #c6ecae;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const InputContainer=styled.div`
    width: 50%;
    height: 40px;
    background: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;

`

const Input=styled.input`
    border: none;
    outline: none;
    flex: 8;
    padding-left: 20px;
`

const Button=styled.button`
    flex: 1;
    border: none;
    background-color: #fbf2ef;
    color: #5a352a;
    cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
        <Title> NEWSLETTER</Title>
        <Desc>GET TIMELY UPDATES ON YOUR FAVORITE PRODUCTS. AND GET 15% OFF WHEN YOU SIGN UP FOR THE FIRST TIME! Exclusions apply.</Desc>
        <InputContainer>
            <Input placeholder="YOUR EMAIL"/>
            <Button>
                <ArrowRightAltRounded/>
            </Button>
        </InputContainer>
    </Container>    
  )
}

export default Newsletter

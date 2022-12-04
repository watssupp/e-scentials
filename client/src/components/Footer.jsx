import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons"
import styled from "styled-components"


const Container=styled.div`
    display: flex;
`

const Left=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo=styled.h1`
    
`
const Desc=styled.p`
    margin: 20px 0px;
`
const SocialContainer=styled.h1`
    display: flex;

`
const SocialIcon=styled.h1`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center=styled.div`
    flex: 1;
    padding: 20px;
`

const Title=styled.h3`
    
`

const List=styled.ul`
    
`

const ListItem=styled.li`

`

const Right=styled.div`
    flex: 1;
    padding: 20px;
`

export const Footer = () => {
  return (
    <Container>
        <Left> 
            <Logo>
                ESCENTIALS.
            </Logo>
            <Desc>
                High quality, premium, minimalistic & hand crafted products in one place.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="e4405f">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55acee">
                    <Twitter/>
                </SocialIcon >
                <SocialIcon color="e60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        
        <Center>
            <Title>
                USEFUL LINKS
            </Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Bestsellers</ListItem>
                <ListItem>Account Settings</ListItem>
                <ListItem>Orders</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
            </List>
        </Center>
        <Right></Right>
    </Container>    
  )
}

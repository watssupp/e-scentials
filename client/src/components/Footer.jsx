import {
  AlternateEmail, Facebook, Instagram, PhoneAndroid, Pinterest, Room, Twitter 
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;


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
    margin-bottom: 30px;
`

const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem=styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`

const Right=styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    
   
`
const Payment=styled.img`
    width: 50%;
    
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
                <ListItem>Return</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Gift Card Balance</ListItem>
                <ListItem>FAQ</ListItem>
            </List>
        </Center>

        <Right>
            <Title>
                CONTACT
            </Title>
            <ContactItem> 
                <Room/>
                12345 Escentials Circle, Tabunga, DU 21837
            </ContactItem>
            <ContactItem>
                <PhoneAndroid/>
                +1 234 567 8910
            </ContactItem>
            <ContactItem>
                <AlternateEmail/>
                support@escentials.dev
            </ContactItem>
            <Payment src="/images/payment-option.png"/>
        </Right>
    </Container>    
  )
}


export default Footer;
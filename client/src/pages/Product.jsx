import { Add, Favorite, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;

`

const InfoContainer = styled.div`
    flex: 1;
`
const Title = styled.h1`
    font-weight: 900;

`

const Desc = styled.p`
    margin: 20px 0px;
`

const ProductDetail = styled.h3`

`

const List = styled.ul`
    margin: 20px;
`
const ListItem = styled.li`
    margin: 20px;
`

const Price = styled.span`
    font-weight: 400;
    font-size: 30px;
`


const AddContainer=styled.div`
    
    width: 50%;
    height: 20vh;
    display: flex;
    align-items: left;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px 0;
    
`

const AmountContainer=styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;

`

const Amount=styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid;
    display: flex; 
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    flex-direction: column;

`


const Button=styled.button`
    padding: 15px;
    border: 1px solid gray;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;


&:hover{
    background-color: #94c9a9;
    color: white;
    border: none;
}
`

const Icon = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
        color: red;
        transform: scale(1.1);
    }
`

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src='images/product1.png'/>
            </ImgContainer>
            <InfoContainer>
                <Title>MIGHTY MATCHA</Title>
                <Desc>Made from natural ingredients and transported by the soothing steam of a warm cup of matcha tea, the fresh scent of bergamot and green tea envelop you in a calming sense of serenity. The aromatic floral perfumes awaken the senses and a cool base of white chocolate, moss, and cedarwood brings the focus back to the present.
                </Desc>
                <ProductDetail>PRODUCT DETAILS:</ProductDetail>
                <List>
                    <ListItem>Product Dimensions: 6in x 4in</ListItem>
                    <ListItem>Product Weight: 1 lbs.</ListItem>

                </List>
                <Price>$15.00</Price>    
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>           
                        <Button>ADD TO CART</Button>
                        <Icon>
                            <Favorite/> 
                            ADD TO FAVORITES
                        </Icon>
                    </AddContainer>
            </InfoContainer>
        </Wrapper>


        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product
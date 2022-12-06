import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import { Footer } from '../components/Footer'
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div`
    
`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;

const TopTexts=styled.div`

`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    align-items: center;
    justify-content: center;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;

const Product=styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail=styled.div`
    flex: 2;
    display: flex;
`;

const ProductDescription = styled.p`
    font-weight: 300;
`

const Image=styled.img`
    width: 500px;
`;

const Details=styled.div`
    padding: 20px;
    margin: 50px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
`;

const ProductName=styled.span`
    font-weight: 600;
`;

const ProductId=styled.span`
    font-weight: 600;
`;

const ProductP=styled.p`
    font-weight: 900;
`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`


const Summary = styled.div`
    flex: 1;
`;



const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>
                    CONTINUE SHOPPING
                </TopButton>
                <TopTexts>
                    <TopText>SHOPPING BAG (1)</TopText>
                    <TopText>WISHLIST(5321)</TopText>
                </TopTexts> 
                <TopButton type="filled">
                    CHECKOUT NOW
                </TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src='/images/product5.png'/>
                            <Details>
                                <ProductName><ProductP>Product:</ProductP>Sea Breeze Bath Set</ProductName>
                                <ProductId><ProductP>ID:</ProductP>0398457</ProductId>
                                <ProductDescription>Made from natural ingredients and transported by the soothing steam of a warm cup of matcha tea, the fresh scent of bergamot and green tea envelop you in a calming sense of serenity. The aromatic floral perfumes awaken the senses and a cool base of white chocolate, moss, and cedarwood brings the focus back to the present.</ProductDescription>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove/>
                                    <ProductAmount> 3 </ProductAmount>
                                <Add/>
                            </ProductAmountContainer>
                            <ProductPrice> $45.00 </ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src='/images/product4.png'/>
                            <Details>
                                <ProductName><ProductP>Product:</ProductP>Lilac & Lavender Body Lotion</ProductName>
                                <ProductId><ProductP>ID:</ProductP>024265437</ProductId>
                                <ProductDescription>Made from natural ingredients and transported by the soothing steam of a warm cup of matcha tea, the fresh scent of bergamot and green tea envelop you in a calming sense of serenity. The aromatic floral perfumes awaken the senses and a cool base of white chocolate, moss, and cedarwood brings the focus back to the present.</ProductDescription>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove/>
                                    <ProductAmount> 1 </ProductAmount>
                                <Add/>
                            </ProductAmountContainer>
                            <ProductPrice> $11.00 </ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>SUMMARY</Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
    
  )
}

export default Cart

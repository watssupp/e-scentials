
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import { Footer } from "../components/Footer"


const Container=styled.div`
  
`

const Title=styled.h1`
    margin: 20px;
`

const FilterContainer=styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter=styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
`

const Select = styled.select`
    padding: 10px;
    margin: 20px;
`

const Option = styled.select`
    width: 100%;
`

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>
            CANDLES
        </Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option>Select Option:</Option>
                    <Option value="Candle">Candle</Option>
                    <Option value="Lotion">Lotion</Option>
                    <Option value="Bath">Bath</Option>
                    <Option value="Skincare">Skincare</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option disable selected>
                        Sort By:
                    </Option>
                    <Option>Newest</Option>
                    <Option>Best Seller</Option>
                    <Option>Alphabetical Order</Option>
                    <Option>Price: Low-High</Option>
                    <Option>Price: High-Low</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList
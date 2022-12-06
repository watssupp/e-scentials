import styled from "styled-components"

const Container=styled.div`
    flex:1;
    margin: 10px;
    height: 70vh;
    position: relative;
`

const Image=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Info=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

const Title=styled.h1`
    color: white;
    margin-bottom: 20px;
    font-size: 72px;

`

const Button=styled.button`
    border: none;
    padding: 20px;
    cursor: pointer;
    background-color: #FFFFFF;
    color: #000000;
    font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SEE MORE</Button>
        </Info>
    </Container>

  )
}

export default CategoryItem

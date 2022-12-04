
import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #94c9a9; // <== Input Your color of choice here, this is for the announcements at the top of the navbar where we announce sales on products.
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 900;
`

const Announcement = () => {
  return (
    <Container>
        Holiday Special! Get 25% off when using code: XMAS{/* Sale and Discount Message Here... Type it before the curly bracket and then delete the Curly Brackets and Comment symbols before or after writing message. */}
    </Container>
  )
}

export default Announcement

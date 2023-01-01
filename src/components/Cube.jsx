import styled from "styled-components";

const Cube = () => {
    return (
        <Container>
            <Box>
                <Front className="card">Front</Front>
                <Back className="card">Back</Back>
                <Left className="card">Left</Left>
                <Right className="card">Right</Right>
                <Top className="card">Top</Top>
                <Bottom className="card">Bottom</Bottom>
            </Box>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
`

const Box = styled.div`
    margin-top: 200px;
    height: 16vw;
    width: 16vw;
    transform-style: preserve-3d;
    transform: rotateY(30deg) rotateX(30deg);
    .card {
        height: 16vw;
        width: 16vw;
        text-align: center;
        padding: 5vw;
        color: yellow;
        background: black;
        border: 2px solid yellow;
        font-size: 32px;
        box-sizing: border-box;
        position: absolute;
        transition: all 1s;
    }
  
`

const Front = styled.div`
    transform: translateZ(8vw);
`

const Back = styled.div`
    transform: translateZ(-8vw);
`

const Left = styled.div`
    right: 8vw;
    transform: rotateY(-90deg);
`

const Right = styled.div`
    left: 8vw;
    transform: rotateY(90deg);
`

const Top = styled.div`
    bottom: 8vw;
    transform: rotateX(90deg);
`

const Bottom = styled.div`
    top: 8vw;
    transform: rotateX(-90deg);
`

export default Cube;
import Login from './Login/login'
import Register from './Login/register'
import styled from 'styled-components'

function App() {

  return (
    <Container>
      <Register/>    
    </Container>
  )
}

const Container = styled.div`
  width : 100vw;
  height : 100vw;
`

export default App

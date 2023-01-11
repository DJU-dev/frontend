import Routing from "@/Routing.jsx";
import {Provider as  AlertProvider} from "react-alert";
import AlertTemplate from 'react-alert-template-basic'

const options = {
    position: 'bottom center',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
}

function App() {

  return (
      <AlertProvider template={AlertTemplate} {...options}>
          <Routing />
      </AlertProvider>
  )
}

export default App

import Routing from "@/Routing.jsx";
import {Provider as AlertProvider} from "react-alert";
import AlertTemplate from 'react-alert-template-basic'

const options = {
    position: 'bottom center',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
}

// react-alert 사용법
//
// const alert = useAlert()
// alert.show('안내');
// alert.error('에러');
// alert.info('정보');
// alert.success('성공');


function App() {

  return (
      <AlertProvider template={AlertTemplate} {...options}>
          <Routing />
      </AlertProvider>
  )
}

export default App

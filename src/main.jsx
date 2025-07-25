import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Wrapper from './Context/Wrapper.jsx'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
    <Wrapper>
        <App />
        <ToastContainer position="top-center"/>
    </Wrapper>
)

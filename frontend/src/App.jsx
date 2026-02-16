import './App.css'
import Navbar from './components/Navbar'

import Content from './components/Content'
import { ToastContainer } from 'react-toastify'



function App() {

  return (
    <>
        <Navbar />
      <Content />
      <ToastContainer/>
    </>
  )
}

export default App

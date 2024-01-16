import { useState } from 'react'


import Header from './Header/Header'
import Footer from './Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Header/>
    <Footer/>
   </>
  )
}

export default App

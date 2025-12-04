import { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router'
import Header from '../components/Header'
import WhoWeAre from '../components/WhoWeAre'
import Footer from '../components/Footer'


function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <WhoWeAre />
      <Footer />
    </>
  )
}

export default App
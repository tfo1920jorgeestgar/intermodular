    import { useState } from 'react'
    import '../App.css'
    import { useNavigate } from 'react-router'
    import Footer from '../components/Footer'
    import Header from '../components/Header'
    import Sales from '../components/Sales'
    import WhoWeAre from '../components/WhoWeAre'
    import Imagenprincipal from '../assets/img/Imagenprincipal.webp'

    function App() {
      const [count, setCount] = useState(0)
      const navigate = useNavigate()

      return (
        <>
          <div className='min-h-screen flex flex-col bg-gray-900'>
            <Header />
            <div className="h-300 bg-gray-300 text-black justify-items-center">
              <div className='w-[1000px] h-[400px] mt-10 bg-cover bg-center bg-no-repeat rounded-lg  ' style={{backgroundImage: `url(${Imagenprincipal})`, }}>
              </div>
            <Sales />
            <WhoWeAre />¡
            </div>
            <Footer />
          </div>
        </>
      )
    }

    export default App


import { Route, Routes } from 'react-router-dom'
import './style/App.css';
import { useEffect, useState } from 'react';
import AllProducts from './pages/AllProducts'
import Bronzer from './pages/Bronzer'
import BronzerId from './pages/BronzerId'
import Brows from './pages/Brows'
import BrowsId from './pages/BrowsId'
import Cart from './pages/Cart'
import Eyes from './pages/Eyes'
import Face from './pages/Face'
import Footer from './components/Footer'
import Foundation from './pages/Foundation'
import FoundationId from './pages/FoundationId'
import Home from './pages/Home'
import Nav from './components/Nav'
import Lips from './pages/Lips'
import Lipstick from './pages/Lipstick'
import LipstickId from './pages/LipstickId'
import SignInNav from './components/SignInNav'
import SignIn from './pages/SignIn'
import axios from 'axios'

function App() {

  const [foundation, setFoundation] = useState([])
  const [bronzer, setBronzer] = useState([])
  const [brows, setBrows] = useState([])
  const [lipstick, setLipstick] = useState([])
  const [makeup, setMakeup] = useState([])

  const getFoundation = async() => {
      const foundation = await axios.get('http://localhost:3001/api/foundation')
      setFoundation(foundation.data)
      // console.log(foundation)
  }
  const getBronzer = async() => {
      const bronzer = await axios.get('http://localhost:3001/api/bronzer')
      setBronzer(bronzer.data)
      // console.log(bronzer)
  }
  const getBrows = async() => {
      const brows = await axios.get('http://localhost:3001/api/brows')
      setBrows(brows.data)
      // console.log(brows)
  }
  const getLipstick = async() => {
      const lipstick = await axios.get('http://localhost:3001/api/lipstick')
      setLipstick(lipstick.data)
      // console.log(lipstick)
  }
  const getMakeup = async() => {
    const makeup = await axios.get('http://localhost:3001/api/makeup')
    setMakeup(makeup.data)
    // console.log(makeup)
}


  useEffect(() => {
    getFoundation()
    getBronzer()
    getBrows()
    getLipstick()
    getMakeup()
  }, [])

  return (
    <div className="App">
      <h1>
        MaiBeauty
      </h1>
      <Nav />
      <SignInNav />
      <br />
      <Footer />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bronzer' element={<Bronzer bronzer={bronzer}/>} />
          <Route path='/bronzer/:id' element={<BronzerId bronzer={bronzer}/>} />
          <Route path='/brows' element={<Brows brows={brows}/>} />
          <Route path='/brows/:id' element={<BrowsId brows={brows}/>} />
          <Route path='/eyes' element={<Eyes brows={brows}/>} />
          <Route path='/face' element={<Face foundation={foundation} bronzer={bronzer} />} />
          <Route path='/foundation' element={<Foundation foundation={foundation}/>} />
          <Route path='/foundation/:id' element={<FoundationId foundation={foundation}/>} />
          <Route path='/lip' element={<Lips lipstick={lipstick}/>} />
          <Route path='/lipstick' element={<Lipstick lipstick={lipstick}/>} />
          <Route path='/lipstick/:id' element={<LipstickId lipstick={lipstick}/>} />
          <Route path='/products' element={<AllProducts makeup={makeup}/>} />

          <Route path='/cart' element={<Cart />} />
          <Route path='/signin' element={<SignIn />} />

        </Routes>
      </main>
      <br />
    </div>
  );
}

export default App;

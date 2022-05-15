
import { Route, Routes } from 'react-router-dom'
import './style/App.css';
import { useEffect, useState } from 'react';
import AllProducts from './pages/AllProducts'
import Bronzer from './pages/Bronzer'
import Brows from './pages/Brows'
import Eyes from './pages/Eyes'
import Face from './pages/Face'
import Footer from './components/Footer'
import Foundation from './pages/Foundation'
import Home from './pages/Home'
import Nav from './components/Nav'
import Lips from './pages/Lips'
import SignInNav from './components/SignInNav'
import SignIn from './pages/SignIn'
import axios from 'axios'

function App() {

  const [foundation, setFoundation] = useState([])
  const [bronzer, setBronzer] = useState([])
  const [brows, setBrows] = useState([])
  const [lipstick, setLipstick] = useState([])

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


  useEffect(() => {
    getFoundation()
    getBronzer()
    getBrows()
    getLipstick()
  }, [])

  return (
    <div className="App">
      <h1>
        MaiBeauty
      </h1>
      <Nav />
      <SignInNav />
      <Footer />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bronzer' element={<Bronzer bronzer={bronzer}/>} />
          <Route path='/bronzer/:id' element={<Bronzer bronzer={bronzer}/>} />
          <Route path='/brows' element={<Brows />} />
          <Route path='/eyes' element={<Eyes />} />
          <Route path='/face' element={<Face foundation={foundation}/>} />
          <Route path='/foundation' element={<Foundation foundation={foundation}/>} />
          <Route path='/foundation/:id' element={<Foundation foundation={foundation}/>} />
          <Route path='/lips' element={<Lips />} />
          <Route path='/products' element={<AllProducts />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

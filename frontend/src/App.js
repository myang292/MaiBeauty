
import { Route, Routes } from 'react-router-dom'
import './style/App.css';
import { useEffect, useState } from 'react';
import AllProducts from './pages/AllProducts'
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
      const foundation = await axios.get('http://localhost:3000/foundation')
      setFoundation(foundation.data)
      console.log(foundation)
  }
  const getBronzer = async() => {
      const bronzer = await axios.get('http://localhost:3000/bronzer')
      setBronzer(foundation.data)
      console.log(foundation)
  }
  const getBrows = async() => {
      const foundation = await axios.get('http://localhost:3000/brows')
      setBrows(foundation.data)
      console.log(foundation)
  }
  const getLipstick = async() => {
      const foundation = await axios.get('http://localhost:3000/lipsticks')
      setLipstick(foundation.data)
      console.log(foundation)
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
          <Route path='/brows' element={<Brows brows={brows}/>} />
          <Route path='/eyes' element={<Eyes />} />
          <Route path='/face' element={<Face foundation={foundation} bronzer={bronzer}/>} />
          <Route path='/foundation' element={<Foundation />} />
          <Route path='/lips' element={<Lips lipstick={lipstick}/>} />
          <Route path='/products' element={<AllProducts />} />
          <Route path='/signin' element={<SignIn />} />
          {/* <Route path='/bronzer' element={<Bronzer bronzer={bronzer}/>} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;

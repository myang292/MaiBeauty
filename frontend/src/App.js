
import { Route, Routes } from 'react-router-dom'
import './style/App.css';
import { useState } from 'react';
import AllProducts from './pages/AllProducts'
import Face from './pages/Face'
import Footer from './components/Footer'
import Foundation from './pages/Foundation'
import Home from './pages/Home'
import Nav from './components/Nav'
import Lips from './pages/Lips'
import SignInNav from './components/SignInNav'
import SignIn from './pages/SignIn'
import Axios from 'axios'

function App() {

  const [foundation, setFoundation] = useState()

  const getFoundation = async() => {
      const foundation = await Axios.get('http://localhost:8000/foundation')
      setFoundation(foundation.data)
      console.log(foundation)
  }



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
          <Route path='/products' element={<AllProducts />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/lips' element={<Lips />} />
          <Route path='/face' element={<Face foundation={foundation}/>} />
          <Route path='/foundation' element={<Foundation />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

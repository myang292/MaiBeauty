
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
import LoginContext from './LoginContext'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'

function App() {

  const [loginStatus, setLoginStatus] = useState(false)

  return (
    <div className="App">
      <LoginContext.Provider value={{loginStatus, setLoginStatus}}>
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
          <Route path='/face' element={<Face />} />
          <Route path='/foundation' element={<Foundation />} />
          <Route path='/register' element={ <Register /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/logout' element={ <Logout /> } />
        </Routes>
      </main>
      </LoginContext.Provider>
    </div>
  );
}

export default App;

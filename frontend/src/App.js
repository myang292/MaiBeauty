
import { Route, Routes } from 'react-router-dom'
import './style/App.css';
import Footer from './components/Footer'
import Home from './pages/Home'
import Nav from './components/Nav'
import Products from './pages/Products'
import SignIn from './components/SignIn'

function App() {
  return (
    <div className="App">
      <h1>
        MaiBeauty
      </h1>
      <Nav />
      <SignIn />
      <Footer />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

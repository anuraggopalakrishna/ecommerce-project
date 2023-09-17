// https://youtu.be/tEMrD9t85v4?si=tSFO8Yw0jnMGyWbe&t=401
import './App.css';
import{ BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navbar } from './components/navbar';
import {Cart} from './pages/cart/cart';
import { Shop } from './pages/shop/shop';



function App() {
  return <div className="App">
    <Router>
      <Navbar />
      <Routes>  
        <Route path="/"  element={<Shop />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </div>
}

export default App;

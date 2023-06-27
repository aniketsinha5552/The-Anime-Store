import { BrowserRouter as Router, Routes,Route ,Navigate} from 'react-router-dom';
import {Home}  from './pages/Home';
import Checkout from './pages/Checkout';
import { Anime } from './pages/Anime';
import { Product } from './pages/Product';
import { Login } from './pages/Login';
import Header from './components/Header';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state:any) => state.user.currentUser)
  return (
    <div className="p-0 m-0">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/anime/:id" element={<Anime />} />
          <Route path="/login" element={user? <Navigate to="/"/>: <Login/>} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

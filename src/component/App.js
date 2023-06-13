import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Payment from './Payment';
import Pricing from './Pricing';
import ContactUs from './ContactUs'
import Product from './Product';
import Stitched from './Stitched'
import Profile from './Profile';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Prodectdetails from './Prodectdetails';
import ProductCollection from './ProductCollection';
import Checkout from './Checkout';
import Profilecompany from './Profilecompany';
// Initialization for ES Users
import {
  Collapse,
  Ripple,
  initTE,
} from "tw-elements";
import About from './About';

function App() {
  initTE({ Collapse, Ripple });

  return (
  <>

 
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/productcollection' element={<ProductCollection/>}/>
  <Route path='/product' element={<Product/>}/>
  <Route path='/Payment' element={<Payment/>}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/Signup' element={<Signup/>}/>
  <Route path='/Pricing' element={<Pricing/>}/>
  <Route path='/ContactUs' element={<ContactUs/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/stisched' element={<Stitched/>}/>
  <Route path='/Profile' element={<Profile/>}/>
  <Route path='/productdetails' element={<Prodectdetails/>}/>
  <Route path='/profilecompany' element={<Profilecompany/>}/>
  <Route path='/checkout' element={<Checkout/>}/>
</Routes>
</BrowserRouter>
</>

  );
}

export default App;

import { useState } from 'react';
import Customers from './components/Customers';
import Developer from './components/Developer';
import NavBar from './components/NavBar';
import Products from './components/Products';
import TopSection from './components/TopSection';

function App() {
  const [isMenu, setIsMenu] = useState();


  return (
    <div>
      <NavBar isMenu={isMenu} setIsMenu={setIsMenu}/>
      <TopSection isMenu={isMenu} />
      <Products />
      <Developer />
      <Customers />
    </div>
  );
}

export default App;

import { useState } from 'react';
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
    </div>
  );
}

export default App;

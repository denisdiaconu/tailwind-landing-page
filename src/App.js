import { useState } from 'react';
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
    </div>
  );
}

export default App;

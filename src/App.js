import { useState } from 'react';
import NavBar from './components/NavBar';

function App() {
  const [isMenu, setIsMenu] = useState();


  return (
    <div>
      <NavBar isMenu={isMenu} setIsMenu={setIsMenu}/>
    </div>
  );
}

export default App;

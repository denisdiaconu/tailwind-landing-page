import { useState } from 'react';
import NavBar from './components/NavBar';
import TopSection from './components/TopSection';

function App() {
  const [isMenu, setIsMenu] = useState();


  return (
    <div>
      <NavBar isMenu={isMenu} setIsMenu={setIsMenu}/>
      <TopSection isMenu={isMenu} />
    </div>
  );
}

export default App;

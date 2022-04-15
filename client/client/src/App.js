import './App.css';
import Input from './components/Input';
import { useState, useEffect } from 'react'
import Display from './components/Display';
function App() {

  const [userData, setUserData] = useState('')
  useEffect(() => {
    console.log(userData)
  }, [userData])
  return (
    <div className="App">
      <h1>Hello Everyone</h1>
      <h3><Input setUserData={setUserData} /></h3>
      <Display userData={userData}/>
    </div>
  );
}

export default App;

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [test, setTest] = useState('');
  useEffect(() => {
    fetch('/api/test')
      .then((res) => res.json())
      .then((txtObj) => setTest(txtObj.text))
      .catch((err) => {
        setTest('something went wrong');
        console.log(err);
      });
  }, []);
  return <div className='App'>{test}</div>;
}

export default App;

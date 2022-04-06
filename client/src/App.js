import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Dashboard from './components/DashComponents/Dashboard';

function App() {
  return (
    <div className='bg-gray-900 text-slate-50 min-h-screen m-auto'>
      <BrowserRouter basename='/'>
        <Nav title='MBFC' />
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Entry from './pages/Entry/Entry';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Entry />} />
    </Routes>
  );
}

export default App;

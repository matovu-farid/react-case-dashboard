import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import Entry from './pages/Entry/Entry';
import { fetchHospitals } from './redux/hospitals/hospitals';
import Hospitals from './pages/Hospitals/Hospitals';
import Entry from './pages/Entry/Entry';
import Navbar from './Navbar/Navbar';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHospitals());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hospitals />} />
        <Route path="/entry/:id" element={<Entry />} />

      </Routes>
    </>
  );
}

export default App;

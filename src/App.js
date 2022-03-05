import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchHospitals } from './redux/hospitals/hospitals';
import Hospitals from './pages/Hospitals/Hospitals';
import Entry from './pages/Entry/Entry';
import Navbar from './Navbar/Navbar';
import Cities from './pages/Cities/Cities';
import CityEntry from './pages/CityEntry/CityEntry';
import { fetchCities } from './redux/cities/cities';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHospitals());
  }, []);
  useEffect(() => {
    dispatch(fetchCities());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hospitals />} />
        <Route path="/entry/:id" element={<Entry />} />

        <Route path="/cities" element={<Cities />} />
        <Route path="/cityentry/:id" element={<CityEntry />} />
      </Routes>
    </>
  );
}

export default App;

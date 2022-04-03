import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchHospitals } from './redux/hospitals/hospitals';
import Entry from './pages/Entry/Entry';
import Navbar from './Navbar/Navbar';
import Cities from './pages/Cities/Cities';
import CityEntry from './pages/CityEntry/CityEntry';
import { fetchCities } from './redux/cities/cities';
import HospitalsByCity from './pages/HospitalsByCity/HospitalsByCity';
import HospitalsPage from './pages/HospitalsPage/HospitalsPage';
import MyTheme from './Theme';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHospitals());
  }, []);
  useEffect(() => {
    dispatch(fetchCities());
  }, []);
  return (
    <MyTheme>
      <Navbar />
      <Routes>
        <Route path="/" element={<HospitalsPage />} />
        <Route path="/entry/:id" element={<Entry />} />

        <Route path="/cities" element={<Cities />} />
        <Route path="/cityentry/:id" element={<CityEntry />} />

        <Route path="/cities/:id" element={<HospitalsByCity />} />
      </Routes>
    </MyTheme>
  );
}

export default App;

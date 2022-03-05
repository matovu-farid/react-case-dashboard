import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Entry from './pages/Entry/Entry';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Entry />} />
      </Routes>
    </Provider>
  );
}

export default App;

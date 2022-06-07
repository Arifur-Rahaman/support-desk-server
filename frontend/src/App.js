import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import Header from './components/Header';
function App() {
  return (
    <Box component='div'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <ToastContainer/>
    </Box>
  );
}

export default App;

import { Box } from '@mui/material';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import DataProvider from './context/DataProvider';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DetailView from './Components/details/DetailView';
import Cart from './Components/cart/Cart';
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Header/>
      <Box sx={{marginTop:"54px"}}>
        <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<DetailView/>} />
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

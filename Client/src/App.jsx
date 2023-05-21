import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { useState } from "react";
import Header from "./components/header/Header";
import Home from './components/Home/Home';
import DeatailsView from "./components/Deatails/DeatailsView";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import LoginDialog from "./components/login/LoginDialog";
import ShippingPage from "./components/shiping/ShippingPage";



const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <BrowserRouter>
      <Header />
      <Box style={{ "marginTop": "56px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DeatailsView />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginDialog open={true} setOpen={setOpen} />} />
          <Route path="/ship" element={<ShippingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </BrowserRouter>


  )
}


export default App

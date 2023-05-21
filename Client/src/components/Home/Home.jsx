import { useEffect } from "react";
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Banner from './Banner';
import Slide from "./Slide";
import { styled } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { getProduct } from "../../features/index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const Container = styled(Box)`
background-color: #f1f3f6;
padding:10px;
`;


const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { product } = useSelector(state => state.products.products);
  const user = useSelector(state => state.user.value)
  useEffect(() => {
    if (user === null) navigate("/login")
    localStorage.removeItem('item');
    dispatch(getProduct());
  }, []);

  return (
    <>
      <Navbar />
      {product && <Container>
        <Banner />
        <Slide title="Deals of The Day" timer={5.4e+7} data={product} />
        <Slide title='Discounts for You' timer={false} data={product} />
        <Slide title='Suggested Items' timer={false} data={product} />
        <Slide title='Top Selection' timer={false} data={product} />
      </Container>}

    </>
  )
}

export default Home

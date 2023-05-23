import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import Total from "./Total";
import { useEffect } from "react";

const Component = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    padding: '15px 0'
  }
}));
const Items = styled(Box)`
padding:15px 24px;
background: #fff;
`
const Bill = styled(Box)`

`

const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
    border-radius: 4;
    width: 100%;
    display:flex;
    justify-content: space-between;
`;


const Cart = () => {
  const { cart } = useSelector((state) => state.cartSlice);
  console.log(cart)
  const user = useSelector(state => state.user.value)
  useEffect(() => {
    if (user === null) navigate("/")
  }, []);
  const navigate = useNavigate()
  const NavigateToHome = () => {
    navigate("/")
  }
  const buyNow = () => {
    navigate("/ship")
  }
  return (
    <>
      {
        cart.length > 0 ? (
          <Component container>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <Items>
                <Typography variant="h6">My Cart ({cart.length})</Typography>
              </Items>
              {cart.map((item, key) => (
                <CartItem item={item} key={key} />
              ))}
              <BottomWrapper>
                <Button sx={{ textTransform: "none", textDecoration: "underline" }} onClick={NavigateToHome}>
                  Continue to shopping
                </Button>
                <Button variant="contained" onClick={buyNow} sx={{ background: "#fb6b1b" }}>
                  Place Order
                </Button>
              </BottomWrapper>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Bill>
                <Total cart={cart} />
              </Bill>
            </Grid>
          </Component>
        ) : (
          <EmptyCart />
        )
      }
    </>
  )
}

export default Cart

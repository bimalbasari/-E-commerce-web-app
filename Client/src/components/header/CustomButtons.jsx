import { Badge, Box, Button, Typography, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { memo, useState } from 'react';
import { useSelector } from "react-redux";
// components
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';
import { Link, useNavigate } from 'react-router-dom';

const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    margin: '0 3% 0 auto',
    alignItems: "center",
    '& > p, &>button': {
        marginRight: "40px",
        fontSize: "14px",
        [theme.breakpoints.down('md')]: {
            color: '#2874f0',
            marginTop: 10,
        }
    },
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
    }
}));
const LoginButton = styled(Button)`
color: #2874f0;
background-color:#fff;
text-transform:none;
padding:5px 40px;
box-shadow:none;
font-weight:600;
&:hover{
background-color:#e7e7e7;
}
`;


const CartButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    textTransform: "none",
    marginLeft: -1,
    [theme.breakpoints.down("md")]: {
        color: "#fff",
    }

}))

const CustomButtons = () => {
    const navigate = useNavigate()
    const user = useSelector(state => state.user.value);
    const { cart } = useSelector((state) => state.cartSlice)
    const [open, setOpen] = useState(false)
    const NavigateToCart = () => {
        navigate("/cart")
    }

    return (
        <Wrapper>
            {
                user ?
                    <LoginButton >{user && <Profile user={user} />}</LoginButton>
                    : <LoginButton onClick={() => { setOpen(true) }} sx={{ height: 35, }} >
                        LogIn</LoginButton>
            }
            <Typography style={{ cursor: "pointer", textAlign: "center", padding: 0, minWidth: "150px" }}>Become a Seller</Typography>
            <Typography style={{ cursor: "pointer" }}>More</Typography>
            <CartButton startIcon={<Badge badgeContent={cart?.length} color="secondary"><ShoppingCartIcon /></Badge>} onClick={NavigateToCart}>Cart</CartButton>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper >
    )
}

export default memo(CustomButtons)

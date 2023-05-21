import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';


const LoginBox = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
width:50%;
padding:45px 35px;
color:#fff;
`;

const Loginpic = ({ heading, content }) => {
    return (
        <>
            <LoginBox>
                <Typography variant='h5' >{heading}</Typography>
                <Typography style={{ marginTop: 20, fontSize: 14, color: "#d6d0d0", }} >
                    {content} </Typography>
            </LoginBox>
        </>
    )
}

// Login
// Get access to your Orders, Wishlist and Recommendations

// Looks like you're new here!
// Sign up with your mobile number to get started

export default Loginpic

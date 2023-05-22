import { Box, Typography, styled } from "@mui/material";
import { f_assured, name } from "../../constant/Data.Jsx";
import { addEllipsis } from "../../utils/Util"
import CartButton from "./CartButton";

const Component = styled(Box)`
border-top:2px solid #f0f0f0;
display:flex;
background-color:#fff;
`;
const LeftComponent = styled(Box)(({ theme }) => ({
  margin: "20px",
   display: "flex",
    flexDirection: "column",
  [theme.breakpoints.down('sm')]: {
    display: "block"
  }

}))
// const LeftComponent = styled(Box)`
//     margin: 20px; 
//     display: flex;
//     flex-direction: column;
// `;

const CartItem = ({ item }) => {
  console.log(item)
  return (
    <Box sx={{ backgroundColor: '#fff', padding: 2, borderRadius: 2 }}>
      <Component>
        <LeftComponent>
          <img src={item.url} alt={item.title.shortTitle} style={{ maxHeight: '90px', maxWidth: '100%' ,objectFit: "cover"}} />
        </LeftComponent>
        <Box sx={{ margin: "20px" }}>
          <Typography>{addEllipsis(item.title.longTitle)}</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, textAlign: "center" }}>
            seller: {name[Math.floor(Math.random() * 10)]}etail Net
            <img src={f_assured} alt="FlipCart" style={{ width: '100%', maxWidth: 77, marginLeft: 20 }} />
          </Typography>
          <Typography>
            <span style={{ fontWeight: 600 }}>₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp;
            <span style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
            <span style={{ color: '#388E3C' }}>{item.price.discount} off</span>
          </Typography>
        </Box>
      </Component>
      <CartButton item={item} />
    </Box>

  )
}

export default CartItem

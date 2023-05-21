import { Box, Table, TableBody, TableCell, TableRow, Typography, styled } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { f_assured, name } from "../../constant/Data.Jsx";

const SmallText = styled(Box)`
dispplay:flex;
flex-direction:column;
&>p{
  font-size:14px;
  margin-top:10px;
}
`;
const Badge = styled(LocalOfferIcon)`
 color:green;
 font-size:14px;`;


const ProductInformation = ({ product }) => {
  const left = Math.floor(Math.random() * 10)
  const date = new Date(new Date().getTime() + (left * 24 * 60 * 60 * 1000))



  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
        {Math.floor(Math.random() * 100)} Ratings & {Math.floor(Math.random() * 100)} Reviews
        <span><img src={f_assured} style={{ width: '100%', maxWidth: 77, marginLeft: 20 }} /></span>
      </Typography>
      <Typography>
        <span style={{ fontSize: '2rem' }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
        <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
        <span style={{ color: '#388E3C' }}>{product.price.discount} off </span>
        <Typography sx={{ color: "red", fontSize: 13, fontWeight: 600 }} component="span"> Hurry, Only {product.quantity} left!</Typography>
      </Typography>

      <Typography>Avaliable Offers</Typography>
      <SmallText>
        <Typography> <Badge /> Partner Offer Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500* Know More</Typography>
        <Typography> <Badge /> EMI starting from ₹{Math.floor(Math.random() * 1000)}/month View Plans</Typography>
        <Typography> <Badge /> Bank Offer {Math.floor(Math.random() * 100)}% off on Kk Credit Card EMI Transactions, up to ₹1,{Math.floor(Math.random() * 10)}00, on orders of ₹1,{Math.floor(Math.random() * 10)}00 and above T&C</Typography>
        <Typography> <Badge /> Bank Offer {Math.floor(Math.random() * 100)}% off on Abc Credit Card EMI Transactions, up to ₹1,{Math.floor(Math.random() * 10)}00, on orders of ₹2,{Math.floor(Math.random() * 10)}00 and above T&C</Typography>
        <Typography> <Badge /> Bank Offer {Math.floor(Math.random() * 100)}% off on Xyz Credit Card EMI Transactions, up to ₹1,{Math.floor(Math.random() * 10)}00, on orders of ₹3,{Math.floor(Math.random() * 10)}00 and above T&C</Typography>
        <Typography> <Badge /> Bank Offer {Math.floor(Math.random() * 100)}% off on Credit Card EMI Transactions, up to ₹1,{Math.floor(Math.random() * 10)}00, on orders of ₹4,{Math.floor(Math.random() * 10)}00 and above T&C</Typography>
      </SmallText>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{ color: "#787872" }}>Delivery</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>
              Delivery By {date.toDateString()} | ₹{left * 10}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: "#787872" }}>Warranty</TableCell>
            <TableCell sx={{ fontWeight: 500, color: "#787872", fontSize: 12 }}>
              {left} Month's Warranty</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: "#787872" }}>Seller</TableCell>
            <TableCell sx={{ fontWeight: 500, color: "#787872" }}>
              <span style={{ color: "blue", fontWeight: 600 }}>{name[left]}etail Net</span>
              <Typography sx={{ fontSize: 12 }}>7 Days Service Center Replacement/Repair </Typography>
              <Typography sx={{ fontSize: 12 }}>GST invoice available .</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography sx={{ fontFamily: `Montserrat, sans-serif,Source Code Pro`, fontWeight: 100, fontSize: 12 }}>{product.description}</Typography>
    </>

  )
}

export default ProductInformation

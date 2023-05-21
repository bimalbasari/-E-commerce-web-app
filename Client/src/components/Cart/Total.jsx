import { Box, Typography, styled } from "@mui/material"
import { useEffect, useState } from "react";

const Heading = styled(Box)`
text-align:center;
height:2rem;
border-bottom:1px solid #f0f0f0 ;
`;


const TotalBill = styled(Box)`
padding:30px;
background:#fff;
margin-left:10px`
const Price = styled("span")`
    float: right;
    color:blue;
`;
const Container = styled(Box)`
&>p{
  margin-top:7px;
  font-size:14px;
  font-wight:400;
}`;
const Discount = styled(Typography)`
    font-size: 10px; 
    color: green;
`;

const Total = ({ cart }) => {
  const randomNum = Math.floor(Math.random() * 50) + 40;

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount()
  }, [cart])

  const totalAmount = () => {
    let price = 0, discount = 0;
    cart.map((item) => {
      price += item.price.mrp;
      discount += (item.price.mrp - item.price.cost)
    })
    setPrice(price);
    setDiscount(discount)
  }

  return (
    <TotalBill>
      <Heading>
        <Typography>PRICE DETAILS</Typography>
      </Heading>

      <Container>
        <Typography>Price ({cart?.length} item)
          <Price component="span">{price}</Price>
        </Typography>
        <Typography>Discount
          <Price component="span">- ₹{discount}</Price>
        </Typography>
        <Typography>Delivery Charges
          <Price> ₹{randomNum}</Price>
        </Typography>
        <Typography sx={{ fontWeight: 600 }}>Total Amount
          <Price component="span">₹{price - discount + randomNum}</Price>
        </Typography>
        <Discount>You will save on this order ₹{discount}</Discount>
      </Container>
      <Box>

      </Box>
    </TotalBill>
  )
}

export default Total

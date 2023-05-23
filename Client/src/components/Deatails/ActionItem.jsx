import { Button, styled, ButtonGroup } from '@mui/material'
import BoltIcon from '@mui/icons-material/Bolt';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addCart } from "../../features/index"
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
});
const StyleBtn = styled(Button)`
 width:46%;
 height:45px;
 text-transform:none;
 `;


const ActionItem = ({ product }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { _id } = product;
    const [quantity, setQuentity] = useState(1)

    const addToCart = () => {
        dispatch(addCart({ _id, quantity }))
        navigate("/cart")
        localStorage.removeItem('item');

    }
    const buyNow = () => {
        navigate("/ship")
    }

    return (
        <>
            <Image src={product.detailUrl} />
            <div>
                <StyleBtn variant='contained' sx={{ marginRight: "2%", background: '#ff9f00', }} startIcon={<AddShoppingCartIcon />} onClick={addToCart}>Add to cart</StyleBtn>
                <StyleBtn variant='contained' onClick={buyNow} sx={{ background: '#fb641b' }} startIcon={<BoltIcon />}>Buy now</StyleBtn>

            </div>
            <br />
            <ButtonGroup size="large" aria-label="large button group" sx={{ width: "95%" }}>
                <Button sx={{ width: "25%" }} onClick={() => { if (quantity > 1) setQuentity(quantity - 1) }}><RemoveIcon /></Button>
                <Button sx={{ width: "50%" }}>{quantity}</Button>
                <Button sx={{ width: "25%" }} onClick={() => { if (product.quantity > quantity) setQuentity(quantity + 1) }}><AddIcon /></Button>
            </ButtonGroup>
        </>


    )
}



export default ActionItem;
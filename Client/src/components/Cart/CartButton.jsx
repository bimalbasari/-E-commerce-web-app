
import { Box, Button, ButtonGroup } from "@mui/material";
import { removeItem } from "../../features";
import { useDispatch } from "react-redux";

const Btns = () => {

}


const CartButton = ({ item }) => {
    const { _id } = item;
    const dispatch = useDispatch();
    const removeCartItem = () => {
        dispatch(removeItem(_id))
    }
   

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "10px",
            }}
        >
            <ButtonGroup sx={{ maxHeight: "45px" }}>
                <Button sx={{ borderRadius: "50%", textTransform: "none", fontWeight: 600 }}>-</Button>
                <Button disabled>1</Button>
                <Button sx={{ borderRadius: "50%", textTransform: "none", fontWeight: 600 }}>+</Button>
            </ButtonGroup>
            <Box variant="text" sx={{ display: "flex", justifyContent: "flex-end", flexBasis: "100%" }}>
                <Button sx={{ textTransform: "none", fontWeight: 600, minWidth: "140px" }}>Save for later</Button>
                <Button sx={{ textTransform: "none", fontWeight: 600 }} onClick={removeCartItem}>Remove</Button>
            </Box>
        </Box>

    )
}

export default CartButton

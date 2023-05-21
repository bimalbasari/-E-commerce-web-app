import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Grid, styled } from "@mui/material";
import ActionItem from "./ActionItem";
import ProductInformation from "./ProductInformation";
import { useState } from "react";


const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

const RightContainer = styled(Grid)`
  
    & > p {
        margin-top: 10px;
    }
`;


const DetailsView = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const { product } = useSelector(state => state.products.products);


    useEffect(() => {
        const storedItem = JSON.parse(localStorage.getItem('item'));

        if (storedItem && storedItem._id === id) {
            setItem(storedItem);
        } else {
            const filteredItem = product.find(item => item._id === id);

            if (filteredItem) {
                setItem(filteredItem);
                localStorage.setItem('item', JSON.stringify(filteredItem));
            }
        }
    }, [id, product]);

    return (
        <>
            {item && (
                <Container container>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <ActionItem product={item} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <ProductInformation product={item} />
                    </RightContainer>
                </Container>
            )}
        </>
    );
};

export default DetailsView;



import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import { Typography, Box, Button, Container, Grid, Card, CardContent, } from "@mui/material";
import Countdown from 'react-countdown';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};


const RenderTimer = styled(Box)(({ theme }) => ({
    // [theme.breakpoints.down('sm')]: {
    //     display: 'none'
    // }
}));
const Text = styled(Typography)`
font-size: 14px;
margin-top: 5px`

const Slide = ({ title, timer, data }) => {

    const renderer = ({ hours, minutes, seconds }) => {
        return <RenderTimer variant="span">{hours} : {minutes} : {seconds}  Left</RenderTimer>;
    };

    return (
        <>

            <Card sx={{ display: "flex", alignItems: "center", padding: "10px 20px", marginTop: 2, marginBottom: 2, marginLeft: 8, marginRight: 8 }}>

                <Typography sx={{ fontWeight: 600, fontSize: 22 }}>{title}</Typography>

                {
                    timer &&
                    <Box sx={{ margin: "10px", display: "flex", alignItems: "center" }}>
                        <img style={{ marginLeft: 10, width: 24 }} src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg' />

                        <Countdown date={Date.now() + timer} renderer={renderer} />

                    </Box>
                }

                <Button variant="contained" sx={{ marginLeft: "auto", fontSize: 12, textTransform: "none", fontWeight: 600 }}>view All</Button>

            </Card>

            <Container>
                <Grid container spacing={2}>

                    {data != undefined && data.map((product, key) => (
                        <Grid item key={key} xs={12} sm={6} md={4} lg={2}>
                            <Card sx={{ minHeight: "300px" }}>

                                <CardContent>
                                    <Link to={`/product/${product._id}`} sx={{ textDecoration: "none" }} key={key}>
                                        <Box textAlign="center" >
                                            <img
                                                src={product.url}
                                                style={{
                                                    height: "auto",
                                                    width: "100%",
                                                    objectFit: "cover",
                                                }}
                                                alt="Product Image"
                                            />
                                            <Text sx={{ fontWeight: 600, color: "#212121" }}>{product.title.shortTitle}</Text>
                                            <Text sx={{ color: "green" }}>{product.discount}</Text>
                                            <Text sx={{ color: "#212121", opacity: "0.6" }}>{product.tagline}</Text>
                                        </Box>
                                    </Link>

                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default Slide

// sx={{ padding: "25px 15px" }}
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../constant/Data.Jsx"
import { styled } from '@mui/material/styles';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: 280,
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 180,
    }
}))
const Banner = () => {


    return (

        <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            ssr={true} // means to render carousel on server-side.
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {
                bannerData.map((data) => (<Image key={data.id} src={data.url} />))
            }
        </Carousel>

    )
}

export default Banner

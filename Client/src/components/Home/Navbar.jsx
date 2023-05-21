import { Box, Paper, Typography } from '@mui/material'
import { navData } from "../../constant/Data.Jsx"
import { styled } from '@mui/material/styles';


const Component = styled(Paper)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: `10px 1px 0.5px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`,
    [theme.breakpoints.down("md")]: {
        overflow: "scroll"
    }
}))

const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`;
const Navbar = () => {
    return (
        <Component elevation={1}>
            {navData.map((data, key) =>
            (
                <Box key={key} style={{ padding: "12px 8px", textAlign: "center" }}>
                    <img src={data.url} style={{
                        height: "auto",
                        width: "100%",
                        objectFit: "cover",
                    }} />
                    <Text>{data.text}</Text>
                </Box>
            )
            )}
        </Component>
    )
}

export default Navbar

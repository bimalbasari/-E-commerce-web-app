import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, styled } from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';
import ListIcon from '@mui/icons-material/List';

const CustomizedAppBar = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
  &:hover {
    text-decoration: underline;
  }
`;

const PlusImage = styled('img')({
    width: '10px',
    height: '10px',
    marginLeft: '4px',
});

const CustomButtonWrapper = styled('span')(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

const MenuBtn = styled(IconButton)(({ theme }) => ({
    display: 'none',
    color: 'white',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
}));

const Header = () => {
    const [open, setOpen] = useState(false);
    const logoURL = 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png';

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <CustomizedAppBar>
            <Toolbar style={{ minHeight: '55px' }}>
                <MenuBtn onClick={handleOpen}>
                    <ListIcon />
                </MenuBtn>
                <Drawer open={open} onClose={handleClose}>
                    <CustomButtons />
                </Drawer>
                <Component style={{ cursor: 'pointer' }}>
                    <Link to="/">
                        <img src={logoURL} style={{ width: 75 }} alt="Logo" />
                    </Link>
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>
                            Explore <Box component="span" style={{ color: '#FFE500' }}>plus</Box>
                        </SubHeading>
                        <PlusImage src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="Sub-Logo" />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </CustomizedAppBar>
    );
};

export default Header;

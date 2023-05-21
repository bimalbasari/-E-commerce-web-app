import styled from '@emotion/styled';
import { Box, InputBase, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
background-color:#ffffff;
width:34%;
border-radius:4px;
margin-left:10px;
display:flex;`;
const SearchIconWrapper = styled(Box)`
  color:blue;
  padding-top:7px;
  padding-right:7px;
  background:lightgoldenrodyellow;
  border-radius:4px;`;



const InputBaseSearchBase = styled(InputBase)`
padding-left:20px;
width:100%;`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
  border-radius:4px;

`;

const Search = () => {
    const [value, setValue] = useState("")
    // const [ open, setOpen ] = useState(true)
   const { product } = useSelector(state => state.products.products);

    const getText = (value) => {
        setValue(value)
    }
    return (
        <SearchContainer>
            <InputBaseSearchBase placeholder='Search for products, brands and more' onChange={(e) => { getText(e.target.value) }} />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>

            {value && <ListWrapper>
                {

                    product && product.filter(item => item.title.longTitle.toLowerCase().includes(value.toLowerCase())).map((item, key) => (
                        <ListItem key={key}>
                            <Link
                                to={`/product/${item._id}`}
                                style={{ textDecoration: 'none', color: 'black', fontFamily: "roboto" }}
                                onClick={() => setOpen(true)}
                            >
                                {item.title.longTitle}
                            </Link>
                        </ListItem>
                    ))

                }

            </ListWrapper>}

        </SearchContainer>

    )
}

export default memo(Search)

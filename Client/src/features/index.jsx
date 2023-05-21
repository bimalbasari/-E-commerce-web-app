import Cookies from 'js-cookie';
import { createSlice, combineReducers, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const token = Cookies.get('token'); // Retrieve the token from the cookie
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
const headers = {
    Authorization: `Bearer ${Cookies.get('token')}`,
    'Content-Type': 'application/json',
};

const url = `http://localhost:3000`;

export const getProduct = createAsyncThunk(
    "Products/getData",
    async () => {
        try {
            let response = await axios.get(`${url}/products `);
            return response.data
        } catch (err) {
            console.log("error while calling get products api", err.message);
        }
    })

// export const productDetails = createAsyncThunk(
//     "productDetails",
//     async (id) => {
//         try {
//             let response = await axios.get(`${url}/product/${id}`);
//             return response.data
//         } catch (err) {
//             console.log("error while calling get product api", err.message);
//         }

//     })
const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };
export const addCart = createAsyncThunk(
    "cart/addCart",
    async ({_id, quantity}) => {
        try {
            let Cart = await axios.get(`${url}/product/${_id}/${quantity}`, { headers })

            return Cart.data
            // console.log(Cart.data.cart.length)
        } catch (err) {
            console.log("error while calling get product api", err.message);
        }
    })


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).user : null,
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.value = null;
            localStorage.removeItem('user');
            window.location.href = '/'; // Reload to home page
        },
    },
});




export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});


const cartData = JSON.parse(localStorage.getItem("cart"));

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: cartData || [], // Set initial value from local storage or empty array
    loading: false,
    error: null,
  },
  reducers: {
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter(item => item._id !== itemId);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCart.fulfilled, (state, action) => {
        state.loading = false;
        const item = action.payload;

        const existItem = state.cart.find(product => product._id === item._id);
        if (existItem) {
          // existItem.quantity += 1;
        } else {
          state.cart.push(item);
          localStorage.setItem("cart", JSON.stringify(state.cart));
        }
      })
      .addCase(addCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});



export const { login, logout } = userSlice.actions;
export const { removeItem } = cartSlice.actions;

const rootReducer = combineReducers({
    user: userSlice.reducer,
    products: productSlice.reducer,
    cartSlice: cartSlice.reducer,
    // product: product.reducer,
});

export default rootReducer



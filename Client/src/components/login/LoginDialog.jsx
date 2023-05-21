import React, { useCallback, useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import FormHelperText from '@mui/material/FormHelperText';
import { authenticatecSignup, authenticatecLogin } from "../../services/Api.jsx"
import Loginpic from './Loginpic.jsx';
import { useDispatch } from 'react-redux';
import { login } from '../../features/index.jsx';
import { useNavigate } from 'react-router-dom';

// Style for  Dialog box


const LoginBoxL = styled(Box)`
display:flex;
flex-direction: column;
align-items:center;
padding:45px 25px;
`;
const SigninBox = styled(Box)`
display:flex;
flex-direction: column;
align-items:center;
padding:35px;
`;


// Log in sign dialog

const LoginDialog = ({ open, setOpen }) => {
    const [userlogin, setLogin] = useState(true);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('user'))) {
            navigate("/")
        }
    }, [])



    // react-hook-from-controller
    const { register, handleSubmit, formState: { errors } } = useForm();
    // react-hook-from err-controller
    const handleError = (errors) => { };
    const handSinginErr = (errors) => { };

    // User Log in from handler

    const handleLogin = useCallback(async (data) => {
        const response = await authenticatecLogin(data);
        if (!response) return
        dispatch(login({
            token: response.token,
            user: response.user
        }))
        setOpen(false)
        navigate("/")
    })

    // User resitration from handler

    const handleRegistration = useCallback(async (data) => {
        const response = await authenticatecSignup(data);
        if (!response) return
        dispatch(login({
            token: response.token,
            user: response.user
        }))
        setOpen(false)
        navigate("/")
    })

    // log in validation

    const loginOption = {
        email: {
            required: "Email is require"
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 6,
                message: "Password must have at last 8 characters"
            }
        },

    }
    // joi 

    // Sign up validation

    const registerOption = {
        fastname: { required: "Fast name is required" },
        lastname: { required: "Last name is required" },
        email: { required: "Email is required" },

        password: {
            required: "Password is required",
            minLength: {
                value: 6,
                message: "Password must have at last 6 characters"
            }
        },
        cPassword: {
            required: "Enter confirm password "
        },

    }



    return (

        <Dialog open={open} onClose={() => {
            setOpen(false);
            setLogin(true);
        }}>

            <Card sx={{ height: "70vh", display: "flex" }}>

                {userlogin ?
                    <Loginpic heading="Login" content="Get access to your Orders, Wishlist and Recommendations" /> :
                    <Loginpic heading="Looks like you're new here!" content="Sign up with your Email to get started" />
                }


                {userlogin ?
                    // Log in from
                    <LoginBoxL>
                        <form onSubmit={handleSubmit(handleLogin, handleError)}>
                            <FormHelperText sx={{
                                color: "red",
                            }}>{errors?.email && errors.email.message}</FormHelperText>
                            <TextField variant="standard" label="Enter your  Email" name="email" {...register("email", loginOption.email)} sx={{
                                width: "100%",
                                height: "35px",
                            }} />
                            <FormHelperText sx={{
                                color: "red",
                                marginTop: 2,
                            }}>{errors?.password && errors.password.message}</FormHelperText>
                            <TextField variant="standard" label="Enter Password" sx={{
                                width: "100%",
                                height: "35px",
                                margin: "20px 0px",
                            }} name="password" {...register("password", loginOption.password)} />

                            <Typography sx={{
                                fontSize: 12,
                                color: "#878787",
                                fontWeight: 400,
                                fontFamily: 'Roboto,Arial,sans-serif',
                                letterSpacing: 0,
                                marginTop: 2,
                            }}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>

                            <Button variant="contained"
                                sx={{
                                    textTransform: "none",
                                    marginTop: "20px",
                                    width: "100%",
                                    height: "38px",
                                    background: "#fff",
                                    color: "#2874f0",
                                    border: "none",
                                    '&:hover': {
                                        color: "#fff",
                                        border: "none",

                                    },
                                }} type="submit">Log in</Button>

                        </form>

                        <Typography>or</Typography>

                        <Button sx={{
                            textTransform: "none",
                            background: "#fb641b",
                            boxShadow: "0 1px 2px 0 rgba(0,0,0,.2)",
                            border: "none",
                            color: '#fff',
                            width: "100%",
                            height: "38px",
                            '&:hover': {
                                backgroundColor: 'black',
                                boxShadow: 'none',
                            },
                        }}>Request OTP</Button>

                        <Button variant='text' sx={{
                            fontSize: 13,
                            color: "#878787",
                            fontFamily: 'Roboto,Arial,sans-serif',
                            letterSpacing: 0,
                            textTransform: "none",
                            fontWeight: 600,
                            margin: "25px 0px",
                        }} onClick={() => { setLogin(false) }}>New to Flipkart? Create an account</Button>

                    </LoginBoxL>
                    :
                    // Sign up  from
                    <SigninBox>
                        <form onSubmit={handleSubmit(handleRegistration, handSinginErr)}>

                            <FormHelperText sx={{
                                color: "red",
                            }}>{errors?.fastname && errors.fastname.message}</FormHelperText>

                            <TextField variant="standard" name='fastname' {...register("fastname", registerOption.fastname)} label='Enter First name' sx={{
                                width: "100%",
                            }} />

                            <FormHelperText sx={{
                                color: "red",
                            }}>{errors?.lastname && errors.lastname.message}</FormHelperText>

                            <TextField variant="standard" name='lastname' {...register("lastname", registerOption.lastname)} label='Enter Last name' sx={{
                                width: "100%",
                                marginTop: 1
                            }} />
                            <FormHelperText sx={{
                                color: "red",
                            }}>{errors?.email && errors.email.message}</FormHelperText>

                            <TextField variant="standard" name='email' {...register("email", registerOption.email)} label='Enter Email' sx={{
                                width: "100%",
                                marginTop: 1
                            }} />

                            <FormHelperText sx={{
                                color: "red",
                            }}>{errors?.password && errors.password.message}</FormHelperText>

                            <TextField variant="standard" name='password' {...register("password", registerOption.password)} label='Enter Password' sx={{
                                width: "100%",
                                marginTop: 1
                            }} />

                            <FormHelperText sx={{
                                color: "red",
                            }}>{errors?.cPassword && errors.cPassword.message}</FormHelperText>

                            <TextField variant="standard" label='Confirm Password' sx={{
                                width: "100%",
                                marginTop: 1
                            }} />

                            <Button type='submit' sx={{
                                textTransform: "none",
                                background: "#fb641b",
                                boxShadow: "0 1px 2px 0 rgba(0,0,0,.2)",
                                border: "none",
                                color: '#fff',
                                width: "100%",
                                height: "38px",
                                marginTop: 4,
                                '&:hover': {
                                    backgroundColor: 'black',
                                    boxShadow: 'none',
                                },
                            }}>Sign up</Button>

                        </form>
                        <Button sx={{
                            fontSize: 13,
                            color: "#878787",
                            width: "100%",
                            height: "48px",
                            textTransform: "none",
                            fontWeight: 600,
                            margin: "10px 0",


                        }} onClick={() => { setLogin(true) }} variant="text" >Existing User? Log in</Button>
                    </SigninBox>
                }
            </Card>
        </Dialog>
    )
}

export default LoginDialog

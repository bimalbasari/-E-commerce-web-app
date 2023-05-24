import { useState } from 'react';
import { Typography, TextField, Button, Container, Stepper, Step, StepLabel, Box, InputLabel, Select, MenuItem } from '@mui/material';
import styled from '@emotion/styled';
import Payment from "./Payment"
import { useNavigate } from 'react-router-dom';

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  maxWidth: '400px',
  margin: 'auto',
  padding: '24px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f5f5f5',
});
const Container2 = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // padding: theme.spacing(4),
}));
const ShippingPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate()
  const handleNext = () => {
    if(activeStep<2)setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if(activeStep>=0) setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic or other actions
    // Move to the next step if necessary
    handleNext();
  };
  const backTOHome = () => {
    navigate("/")
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Shipping Details
      </Typography>
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Step 1</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 2</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 3</StepLabel>
        </Step>
      </Stepper>
      <form onSubmit={handleSubmit} >
        {activeStep === 0 && (
          <FormContainer >
            <TextField label="Full Name" required />
            <TextField label="Address" required />
            <TextField label="City" required />
            <TextField label="Postal Code" required />
          </FormContainer>
        )}
        {activeStep === 1 && (
          <FormContainer>
            <Payment />
          </FormContainer>
        )}
        {activeStep === 2 && (
          <FormContainer>
            <Container2>
              <Typography variant="h4" component="h1" gutterBottom>
                Order Successful!
              </Typography>
              <Typography variant="body1">
                Thank you for your order. Your order has been successfully placed.
              </Typography>
              <Button onClick={backTOHome} sx={{ textTransform: "none" }}>Back to  home</Button>
            </Container2>
          </FormContainer>
        )}
        <Box>
          <Button disabled={activeStep === 0} onClick={handleBack} variant="contained" sx={{ margin: 2 }}>
            Back
          </Button>
          <Button type="submit" variant="contained" color="primary">
            {activeStep === 2 ? 'Submit' : 'Next'}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default ShippingPage;

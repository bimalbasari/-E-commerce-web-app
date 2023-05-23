import { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  FormControl,
  Typography,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@mui/material';

const FormContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  maxWidth: '300px',
  margin: 'auto',
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: 200,
  marginBottom: theme.spacing(2),
}));

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const StyledSubmitButton = styled(Button)({
  alignSelf: 'flex-end',
});

const PaymentOptionSelect = () => {
  const [paymentOption, setPaymentOption] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  const handlePaymentDetailsChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with payment details
    console.log(paymentDetails);
    // Reset payment details form
    setPaymentDetails({
      cardNumber: '',
      expirationDate: '',
      cvv: '',
    });
  };

  const renderPaymentDetailsForm = () => {
    if (paymentOption === 'creditCard' || paymentOption === 'debitCard') {
      return (
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            label="Card Number"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handlePaymentDetailsChange}
            required
          />
          <TextField
            label="Expiration Date"
            name="expirationDate"
            value={paymentDetails.expirationDate}
            onChange={handlePaymentDetailsChange}
            required
          />
          <TextField
            label="CVV"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handlePaymentDetailsChange}
            required
          />
        </StyledForm>
      );
    }
    return null;
  };

  return (
    <FormContainer>
      <StyledFormControl>
        <Typography >Payment Option</Typography>
        <br />
        <Select
          // labelId="payment-option-label"
          // id="payment-option-select"
          value={paymentOption}
          onChange={handlePaymentOptionChange}
        >
          <MenuItem value="">Select an option</MenuItem>
          <MenuItem value="creditCard">Credit Card</MenuItem>
          <MenuItem value="debitCard">Debit Card</MenuItem>
          <MenuItem value="paypal">PayPal</MenuItem>
        </Select>
      </StyledFormControl>
      {renderPaymentDetailsForm()}
    </FormContainer>
  );
};

export default PaymentOptionSelect;

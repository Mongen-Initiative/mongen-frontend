import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, List, ListItem, ListItemText } from '@material-ui/core';
import CountriesController from '../autocomplete/Countries';

type Props = {
  callback
  values
}

type RecurringPaymentProps = {
  isDesktop?: any
}

export function RecurringPaymentStep(props: RecurringPaymentProps) {
  const { isDesktop } = props
  
  const responsive = {
    marginLeftCheckbox: isDesktop ? "200px": '20px',
  }

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Recurring Payment
      </Typography>
        <Grid item style={{marginLeft:responsive.marginLeftCheckbox, marginTop:"50px"}}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Help this child every month *"
          />
        </Grid>
        <Grid container spacing={3}>
        <Grid item >
        <Typography align="center" style={{marginTop:"20px", marginBottom:"50px", fontStyle:"italic"}}>
        * Please let us know if you can help this child on the regular basis. 
        By ticking this, you agree to make this payment recurring, you will be charged once per month.
      </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export function DonationContributorStep(props: Props) {

  const { callback, values } = props

  const [donorInfo, setDonorInfo] = React.useState(values);

  function updateForm(type, data) {
    setDonorInfo({ ...donorInfo, [type]: data })
  }

  function updateCountry(data) {
    setDonorInfo({ ...donorInfo, ["country"]: data })
  }

  useEffect(()=>{
    callback(donorInfo);
  }, [donorInfo])

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Information about yourself
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            onChange={(event) => updateForm("firstName", event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            onChange={(event) => updateForm("lastName", event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address line"
            multiline={true}
            rows={4}
            rowsMax={6}
            fullWidth
            autoComplete="shipping address-line1"
            onChange={(event) => updateForm("address", event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CountriesController callback={updateCountry} className="" defaultValue={donorInfo.country}/>
        </Grid>
      </Grid>
    </div>
  );
}

export function PaymentCardStep(props: Props) {
  const { callback, values } = props

  const [cardInfo, setCardInfo] = React.useState(values);

  function updateForm(type, data) {
    setCardInfo({ ...cardInfo, [type]: data })
  }

  useEffect(()=>{
    callback(cardInfo);
  }, [cardInfo])

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
          required
          id="cardName"
          label="Name on card"
          fullWidth
          autoComplete="cc-name"
          onChange={(event) => updateForm("nameOnCard", event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            onChange={(event) => updateForm("cardNumber", event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
          required
          id="expDate"
          label="Expiry date"
          fullWidth
          autoComplete="cc-exp"
          onChange={(event) => updateForm("expiryDate", event.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-cvc"
            onChange={(event) => updateForm("cvv", event.target.value)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}


const products = [
  { name: 'Child 1', desc: 'For education', price: '$9.99' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

type PaymentProps = {
  donorData
  paymentData
  recurringPayment
}

export function PaymentSummaryStep(props: PaymentProps) {
  const { donorData, paymentData, recurringPayment } = props
  const classes = useStyles();

  return (
      <div>
        <Typography variant="h6" gutterBottom>
          Donation summary
        </Typography>
        <List disablePadding>
          {products.map((product) => (
            <ListItem className={classes.listItem} key={product.name}>
              <ListItemText primary={product.name} secondary={product.desc} />
              <Typography variant="body2">{product.price}</Typography>
            </ListItem>
          ))}
          <ListItem className={classes.listItem}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" className={classes.total}>
              $34.06
            </Typography>
          </ListItem>
        </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Sponsor
          </Typography>
          <Typography gutterBottom>{donorData.firstName} {donorData.lastName}</Typography>
          <Typography gutterBottom>{donorData.address}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
              <div>
                <Grid item xs={8}>
                  <Typography gutterBottom>Name on card</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography gutterBottom>{paymentData.nameOnCard}</Typography>
                </Grid>
                </div>
                <div>
                <Grid item xs={8}>
                  <Typography gutterBottom>Card number</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography gutterBottom>{paymentData.cardNumber}</Typography>
                </Grid>
                </div>
                <div>
                <Grid item xs={8}>
                  <Typography gutterBottom>Card expiry date</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography gutterBottom>{paymentData.expiryDate}</Typography>
                </Grid>
              </div>
          </Grid>
        </Grid>
        <Grid item style={{fontStyle:"italic", marginTop: "20px"}}>
          {recurringPayment? (
            <Typography gutterBottom>This payment will be made each month. You'll receive an invoice 14 days prior payment</Typography>
          ) : (
            <div></div>
          )
          }
        </Grid>
      </Grid>
    </div>
  );
}


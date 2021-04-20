import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./PaymentForm.css";

const PaymentForm = ({ servicePrice, handleOrderPlaced }) => {
  const [paymentError, setPaymentError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess({});
    } else {
      setPaymentError("");
      setPaymentSuccess(paymentMethod.id);
      handleOrderPlaced(paymentMethod.id, paymentMethod.card.brand);
      const url = "/dashboard/order-list";
      history.push(url);
    }
  };

  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#000",
        color: "#000",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "18px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#000",
        },
        "::placeholder": {
          color: "#111",
        },
      },
      invalid: {
        iconColor: "#d00a2b",
        color: "#d00a2b",
      },
    },
  };
  return (
    <div>
      <p>
        Your service charge will be $<strong>{servicePrice}</strong>{" "}
      </p>
      <form onSubmit={handleSubmit}>
        <CardElement className="payment-card" options={CARD_OPTIONS} />

        <button className="custom-btn-3" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {paymentError && <p className="dot-color">{paymentError}</p>}

      {paymentSuccess && (
        <p style={{ color: "green" }}>Your payment is successful.</p>
      )}
    </div>
  );
};

export default PaymentForm;

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51HPwYLDwhIONe8hIIu1J4sEEFIRDlXR4NEcCRlvfyFFYHsn4B47ddwE6QSglVEEn7hk4ZRH6zqqjwwSTiMTofSaN00S0t98PI1"
);

const ProcessPayment = ({ servicePrice, handleOrderPlaced }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm
        servicePrice={servicePrice}
        handleOrderPlaced={handleOrderPlaced}
      />
    </Elements>
  );
};

export default ProcessPayment;

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { url } from "../functions/config";

const localhost = url;

const stripePromise = loadStripe(
  "pk_test_51Ox4jAKaZWTYiQAky3Y4qovRGvLngifK8KHIMkxl1sqEf9nTklGqeANaoUnLTFFBFdrIqb15fdX33jJFK4TH0Mis00QyrKVZrb"
);

const CheckoutForm = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  const [sessionId, setSessionId] = useState("");

  const handleCheckout = async (sessionId) => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });
    if (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetch(localhost + "checkout/create-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Items: cart,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella creazione della sessione");
        }
      })
      .then((data) => {
        console.log(data);
        setSessionId(data.sessionId);
      });
  }, []);

  if (!sessionId) {
    return <div>Loading...</div>;
  }

  return (
    <div id="checkout">
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.nomeProdotto} - € {item.prezzoProdotto}
            </li>
          ))}
        </ul>
      </div>

      <button className="btn btn-primary" onClick={() => handleCheckout(sessionId)}>
        Checkout
      </button>
    </div>
  );
};

export default CheckoutForm;

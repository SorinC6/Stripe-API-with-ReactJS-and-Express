import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const stripeComponent = () => {
  const publisherKey = "pk_test_wWfiHHTamIymsCSufUxr11Z700iMQtoKWB";

  const onToken = token => {
    const body = {
      amout: 999,
      token: token
    };

    const url = "to be continued";
    axios
      .post(`${url}`, body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };

  return (
    <StripeCheckout
      label="Go Premium" //Component button text
      name="Business LLC" //Modal Header
      description="Upgrade to a premium account today."
      panelLabel="Go Premium" //Submit button in modal
      amount={999} //Amount in cents $9.99
      token={onToken}
      stripeKey={publisherKey}
      image="https://www.vidhub.co" //Pop-in header image
      billingAddress={false}
    />
  );
};

export default stripeComponent;

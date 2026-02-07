import { useEffect } from "react";

export default function PaypalButton({ amount, onSuccess }) {
  useEffect(() => {
    // Charger le SDK PayPal
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=ARXxtOQ4aeVTgiZTOj1krjFTM_LUZzt-5ZjBOhsbOd_mY6ENkds2IWkjewaLKJ8kQJB6dMrlwNLHiuKr&currency=EUR";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.paypal) {
        window.paypal.Buttons({
          style: {
            layout: 'vertical',
            color: 'blue',
            shape: 'rect',
            label: 'pay'
          },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: { value: amount }
              }]
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Paiement réussi ! Merci ${details.payer.name.given_name}`);
              if (onSuccess) onSuccess(details);
            });
          },
          onError: (err) => {
            console.error(err);
            alert("Erreur lors du paiement PayPal");
          }
        }).render("#paypal-button-container");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [amount, onSuccess]);

  return <div id="paypal-button-container" style={{ marginTop: "20px" }}></div>;
}

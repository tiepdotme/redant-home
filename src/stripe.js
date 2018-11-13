// // Test CC number:
// // 4000000360000006
//
// const init = $(function() {
//   // Create a Stripe client.
//   // Note: this merchant has been set up for demo purposes.
//   const stripe = Stripe('pk_test_GGSz6ESGAoM7GOvRJAxXVIpW');
//
//   // Create an instance of the card Element.
//   const card = stripe.elements().create('card');
//
//   // Add an instance of the card Element into the `card-element` <div>.
//   card.mount('#card-element');
//
//   // Handle real-time validation errors from the card Element.
//   card.addEventListener('change', function(event) {
//     const displayError = document.getElementById('card-errors');
//
//     if (event.error) {
//       displayError.textContent = event.error.message;
//     } else {
//       displayError.textContent = '';
//     }
//   });
//
//   // Handle form submission.
//   var form = document.getElementById('payment-form');
//
//   form.addEventListener('submit', function(event) {
//     event.preventDefault();
//
//     stripe.createToken(card).then(function(result) {
//       if (result.error) {
//         // Inform the user if there was an error.
//         var errorElement = document.getElementById('card-errors');
//         errorElement.textContent = result.error.message;
//       } else {
//         // Send the token to your server.
//         stripeTokenHandler(result.token);
//       }
//     });
//   });
//
//   // Submit the form to our API with extra form details.
//   function stripeTokenHandler(token) {
//     console.log(token);
//     // Insert the token ID into the form so it gets submitted to the server
//     // var hiddenInput = document.createElement('input');
//     // hiddenInput.setAttribute('type', 'hidden');
//     // hiddenInput.setAttribute('name', 'stripeToken');
//     // hiddenInput.setAttribute('value', token.id);
//     // form.appendChild(hiddenInput);
//     // // Submit the form
//     // submit();
//   }
//
//   function submit() {
//     var data = {
//       method: 'POST',
//       body: serialize(form),
//       headers: { 'Content-Type': 'application/json' }
//     };
//
//     fetch(form.getAttribute('action'), data)
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(myJson) {
//         submitSuccess(myJson)
//       })
//       .catch(error => submitError(error));
//   }
//
//   function serialize(form) {
//     const inputs = document.querySelector("form").elements;
//     const values = {};
//
//     for (let i = 0; i < inputs.length; i++) {
//       if (inputs[i].value) {
//         values[inputs[i].name] = inputs[i].value;
//       }
//     }
//
//     return JSON.stringify(values);
//   }
//
//   function submitSuccess(response) {
//     document.getElementById('card-success').textContent = "Success.";
//     document.getElementById('card-success').classList.remove('d-none');
//     // if (response && response.redirect) {
//     //   window.location.href = response.redirect;
//     // }
//   }
//
//   function submitError(message) {
//     // var json = response && response.responseJSON;
//     document.getElementById('card-errors').textContent = message;
//     document.getElementById('card-errors').classList.remove('d-none');
//   }
// });
//
// export default init;

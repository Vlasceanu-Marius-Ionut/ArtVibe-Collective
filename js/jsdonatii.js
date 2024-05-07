'use strict'
// Eveniment pentru formularul de donații
  const form = document.querySelector('form');
  if (form) {
      form.addEventListener('submit', function (event) {
          event.preventDefault();

          const amount = document.getElementById('amount').value;
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;

          if (amount && name && email) {
              alert(`Mulțumim pentru donația de ${amount} RON, ${name}!`);
              form.reset();
          } else {
              alert('Vă rugăm să completați toate câmpurile.');
          }
      });
  }   
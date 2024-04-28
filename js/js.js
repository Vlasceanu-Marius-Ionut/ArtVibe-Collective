// JavaScript

// Funcție pentru derularea liniei
function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  const targetPosition = targetElement.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - 70; // Ajustăm pentru a ține cont de înălțimea barei de navigare
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Adăugăm evenimentul de clic pe toate linkurile care conduc către ancore interne
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    smoothScroll(target, 1000);
  });
});

// Meniul mobil
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation ul');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
});

// JavaScript (Node.js)

// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// // Conexiunea la baza de date MySQL
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'rootDemo',
//   password: 'asserod',
//   database: 'asserodDatabase'
// });

// // Conectarea la baza de date
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL database:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// // Middleware pentru parsarea JSON-ului și a datelor din formular
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Ruta pentru trimiterea formularului de voluntariat
// app.post('/submit_volunteer_form', (req, res) => {
//   const { nume, prenume, email, telefon, mesaj, disponibilitate, interes1, interes2, interes3 } = req.body;

//   const sql = `INSERT INTO voluntari (nume, prenume, email, telefon, mesaj, disponibilitate, interes1, interes2, interes3)
//                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//   const values = [nume, prenume, email, telefon, mesaj, disponibilitate, interes1 ? 1 : 0, interes2 ? 1 : 0, interes3 ? 1 : 0];

//   connection.query(sql, values, (err, result) => {
//     if (err) {
//       console.error('Error executing MySQL query:', err);
//       res.status(500).send('Formularul nu a putut fi trimis. Te rugăm să încerci din nou mai târziu.');
//       return;
//     }
//     console.log('Formularul a fost trimis cu succes!');
//     res.send('Formularul a fost trimis cu succes!');
//   });
// });

// // Pornirea serverului
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });



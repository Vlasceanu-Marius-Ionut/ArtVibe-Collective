// // app.js

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// // Middleware pentru a parsa corpul cererilor POST
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Rutele pentru gestionarea cererilor POST de la client
// app.post('/url_server_procesare', (req, res) => {
//     const formData = req.body;
//     console.log('Date primite de la client:', formData);
//     // Aici poți prelucra datele primite și răspunde către client

//     res.json({ message: 'Date primite cu succes!' });
// });

// // Pornirea serverului
// app.listen(port, () => {
//     console.log(`Serverul ascultă la http://localhost:${port}`);
// });

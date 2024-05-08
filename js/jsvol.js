// // jsvol.js
// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault(); // oprește trimiterea formularului în mod implicit

//     // Apelarea funcției trimiteFormular din jsvol.js
//     trimiteFormular();
// });

// function trimiteFormular() {
//     let nume = document.getElementById('nume').value;
//     let prenume = document.getElementById('prenume').value;
//     let email = document.getElementById('email').value;
//     let telefon = document.getElementById('telefon').value;
//     let mesaj = document.getElementById('mesaj').value;
//     let disponibilitate = document.getElementById('disponibilitate').value;

//     let interese = [];
//     let intereseCheckboxes = document.getElementsByName('interese[]');
//     intereseCheckboxes.forEach(function(checkbox) {
//         if (checkbox.checked) {
//             interese.push(checkbox.value);
//         }
//     });

//     if (nume && prenume && email && telefon && disponibilitate) {
//         let formData = {
//             nume: nume,
//             prenume: prenume,
//             email: email,
//             telefon: telefon,
//             mesaj: mesaj,
//             disponibilitate: disponibilitate,
//             interese: interese
//         };

//         fetch('http://localhost:3000/url_server_procesare', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         })
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             console.log('Răspuns de la server:', data);
//             // Afișează un mesaj de succes sau alte acțiuni după ce datele sunt trimise cu succes
//         })
//         .catch(function(error) {
//             console.error('Eroare la trimiterea cererii:', error);
//             // Afișează o eroare în caz de eșec la trimitere
//         });
//     } else {
//         alert('Toate câmpurile obligatorii trebuie completate!');
//     }
// }

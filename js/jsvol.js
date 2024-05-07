'use strict'
function trimiteFormular() {
    let nume = document.getElementById('nume').value;
    let prenume = document.getElementById('prenume').value;
    let email = document.getElementById('email').value;
    let telefon = document.getElementById('telefon').value;
    let mesaj = document.getElementById('mesaj').value;
    let disponibilitate = document.getElementById('disponibilitate').value;

    let interese = [];
    let intereseCheckboxes = document.getElementsByName('interese');
    intereseCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            interese.push(checkbox.value);
        }
    });

    if (nume && prenume && email && telefon && disponibilitate) {
        let formData = {
            nume: nume,
            prenume: prenume,
            email: email,
            telefon: telefon,
            mesaj: mesaj,
            disponibilitate: disponibilitate,
            interese: interese
        };

        console.log('Trimite date către server:', formData);

        let rezultatDiv = document.getElementById('rezultatFormular');
        rezultatDiv.innerHTML = '<h2>Datele trimise din formular:</h2>' +
            '<p>Nume: ' + nume + '</p>' +
            '<p>Prenume: ' + prenume + '</p>' +
            '<p>Email: ' + email + '</p>' +
            '<p>Telefon: ' + telefon + '</p>' +
            '<p>Mesaj: ' + mesaj + '</p>' +
            '<p>Disponibilitate: ' + disponibilitate + '</p>' +
            '<p>Interese: ' + interese.join(', ') + '</p>';
    } else {
        alert('Toate câmpurile obligatorii trebuie completate!');
    }
}
function trimiteFormular() {
    var formData = new FormData(document.getElementById('voluntariatForm'));

    fetch('url_server_procesare', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Răspuns de la server:', data);
      
    })
    .catch(error => {
        console.error('Eroare la trimiterea cererii:', error);
       
    });
}

function trimiteFormular() {
    var formData = new FormData(document.getElementById('voluntariatForm'));
    var request = new XMLHttpRequest();
    request.open('POST', 'url_server_procesare');
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                console.log('Răspuns de la server:', request.responseText);
            } else {
                console.error('Eroare la trimiterea cererii:', request.status, request.statusText);
            }
        }
    };
    request.send(formData);
}


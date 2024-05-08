'use strict'

function trimiteFormular() {
    var nume = document.getElementById('nume').value;
    var prenume = document.getElementById('prenume').value;
    var email = document.getElementById('email').value;
    var telefon = document.getElementById('telefon').value;
    var mesaj = document.getElementById('mesaj').value;
    var disponibilitate = document.getElementById('disponibilitate').value;

    var interese = [];
    var intereseCheckboxes = document.getElementsByName('interese[]');
    intereseCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            interese.push(checkbox.value);
        }
    });

    if (nume && prenume && email && telefon && disponibilitate) {
        var formData = new FormData();
        formData.append('nume', nume);
        formData.append('prenume', prenume);
        formData.append('email', email);
        formData.append('telefon', telefon);
        formData.append('mesaj', mesaj);
        formData.append('disponibilitate', disponibilitate);
        formData.append('interese', interese.join(', '));

        fetch('url_server_procesare', {
            method: 'POST',
            body: formData
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log('Răspuns de la server:', data);
            // Afișează un mesaj de succes sau alte acțiuni după ce datele sunt trimise cu succes
        })
        .catch(function(error) {
            console.error('Eroare la trimiterea cererii:', error);
            // Afișează o eroare în caz de eșec la trimitere
        });
    } else {
        alert('Toate câmpurile obligatorii trebuie completate!');
    }
}
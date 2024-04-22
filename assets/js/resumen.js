

function obtenerUbicacionYMostrarClima() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            cargarClimaActual(position.coords.latitude, position.coords.longitude);
        }, function (error) {
            alert('Error al obtener la ubicación: ' + error.message);
        });
    } else {
        alert("Geolocalización no es soportada por este navegador.");
    }
}

function cargarClimaActual(latitud, longitud) {
    let apiKey = 'ce92c44daa03f54269ff6b5a37888f59';
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiKey}&units=metric&lang=es`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Falló la solicitud: ' + response.statusText + ' (código: ' + response.status + ')');
            }
        })
        .then(data => {
            document.getElementById("temperatura").textContent = `Temperatura: ${data.main.temp} °C`;
            document.getElementById("estadoClima").textContent = `Estado: ${data.weather[0].description}`;
            document.getElementById("humedad").textContent = `Humedad: ${data.main.humidity}%`;
        })
        .catch(error => {
            console.error('Error al cargar el clima:', error);
            alert('Error al cargar el clima: ' + error.message);
        });
}



function obtenerDatosIP() {
    fetch('https://api.ipbase.com/v2/info?apikey=ipb_live_Zsj5p1gf24AHzWHxqIRlQAMwxfGUvdma72ZsIriZ')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip').textContent = 'IP: ' + data.data.ip;
            document.getElementById('type').textContent = 'Type: ' + data.data.type;
            document.getElementById('continent').textContent = 'Continent: ' + data.data.location.continent.name;
            document.getElementById('country').textContent = 'Country: ' + data.data.location.country.name;
            document.getElementById('city').textContent = 'City: ' + data.data.location.city.name;
            document.getElementById('latitude').textContent = 'Latitude: ' + data.data.location.latitude;
            document.getElementById('longitude').textContent = 'Longitude: ' + data.data.location.longitude;
            document.getElementById('asn').textContent = 'ASN: ' + data.data.asn.asn;
            document.getElementById('organisation').textContent = 'Organisation: ' + data.data.asn.organisation;
            document.getElementById('currency').textContent = 'Currency: ' + data.data.location.currency.code;
            document.getElementById('timezone').textContent = 'Time Zone: ' + data.data.location.timezone.id;
        })

}



function buscarDefinicion() {
    var word = document.getElementById('wordInput').value;
    var apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('No se encontró la palabra');
            }
        })
        .then(data => {
            var definitions = '';
            if (data[0] && data[0].meanings) {
                data[0].meanings.forEach((meaning) => {
                    meaning.definitions.forEach((def, index) => {
                        definitions += `<p><b>Definición ${index + 1}:</b> ${def.definition}</p>`;
                        if (def.example) {
                            definitions += `<p><b>Ejemplo:</b> ${def.example}</p>`;
                        }
                    });
                });
            }
            document.getElementById('definitionContainer').innerHTML = definitions;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('definitionContainer').innerHTML = `<p>${error.message}</p>`;
        });
}

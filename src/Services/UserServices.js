const BASE_URL = 'https://vegabackend.herokuapp.com/'


export function getToken(data) {
    return fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
}



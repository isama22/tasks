import tokenService from '../../src/utils/tokenService'

const BASE_URL = '/api/tasks'

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json())
}

export function create(task) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(task)
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

export function getOne(task) {
    return fetch(`${BASE_URL}/${task._id}`).then(res => res.json())
}
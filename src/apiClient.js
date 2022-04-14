import axios from 'axios';
const url = "http://localhost:3001/event"

export class ApiClient {
    apiCall(method, url, data) {
        return axios({
            method,
            url,
            data,
        }).catch((error) => {
            throw error;
        })
    }
    getEvent() {
        return this.apiCall("get", url)        
    }

    addEvent(name, location, type, date, description) {
        return this.apiCall("post", `${url}/create`, { name, location, type, date, description })
    }

    removeEvent(_id) {
        return this.apiCall("delete", `${url}/${_id}`)
    }

    updateEvent(_id, name, location, type, date, description) {
        console.log(_id)
        return this.apiCall("put", `${url}/${_id}`, { name, location, type, date, description })
    }

}


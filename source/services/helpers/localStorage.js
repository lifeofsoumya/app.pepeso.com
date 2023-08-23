export function getLocalStorage(key){
    try {
        return JSON.parse(window.localStorage.getItem(key))
    } catch (error) {
        return window.localStorage.getItem(key)
    }
}

export function setLocalStorage(key, data){
    try {
        if(typeof data == 'string') return window.localStorage.setItem(key, data)
        else window.localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.log(error, 'setting setLocalStorage failed in services/helpers/localStorage.js')
    }
}
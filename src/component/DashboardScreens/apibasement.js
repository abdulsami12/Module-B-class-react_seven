import axios from "axios";






    
    let apiHandler = axios.creat({
    baseURL:'https://jsonplaceholder.typicode.com'
})

let Get = (endPoint) => {
    return apiHandler.get(endPoint)
}

let GetById = (endPoint,id) => {
    return apiHandler.get(`${endPoint}/${id}`)
}
let Post = (endPoint,body) => {
    return apiHandler.post(`${endPoint}`,body)
}

let Put = (endPoint,id,body) => {
    return apiHandler.put(`${endPoint}/${id}`,body)
}
// let Delete = (endPoint,id) => {
//     return apiHandler.defaults(`${endPoint}/${id}`,body)
// }


export {Get,GetById,Post,Put}
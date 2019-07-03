import axios from "axios";
const root_url = "http://localhost:3004";
export async function getCars(keywords) {
  let request = await  axios.get(`${root_url}/carsIndex?q=${keywords}`)
  .then(response => response.data)    
  return {
    type: "Search_Cars",
    payload: request
  };
}


export function carDetails (id) {
  let request = axios.get(`${root_url}/carsIndex?id=${id}`)
  .then(response => response.data)   
  return{
    type : "Car_Details",
    payload: request
  }
}

export function clearDetails(){
  return {
    type: "clear_details",
    payload: []
  }
}
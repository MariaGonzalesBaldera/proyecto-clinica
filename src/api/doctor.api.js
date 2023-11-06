import axios from 'axios'

const SpecialtyApi = axios.create({
  baseURL:"http://localhost:8000/index/api/v1/specialty/",
})

export const getAllSpecialties =()=>
SpecialtyApi.get("/");
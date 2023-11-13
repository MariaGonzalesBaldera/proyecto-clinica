import axios from 'axios'

const Api = axios.create({
  baseURL: "http://localhost:8000/index/api/v1/",
})

const handleApiError = async (apiCall) => {
  try {
    const response = await apiCall();
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw [];
  }
};

export const getAllSpecialties = async () => handleApiError(() => Api.get("specialty/"));

export const getDoctorSpecialty = async (specialty, mode) =>  handleApiError(() => Api.get(`doctor/?specialty=${specialty}&mode=${mode}`));

export const getDetailDoctor = async (id) => handleApiError(() => Api.get(`detail/${id}`));
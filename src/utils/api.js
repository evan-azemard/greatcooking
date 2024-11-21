import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const fetchApi = async (endpoint, params = {}) => {
  let data, error = null;

  try {
    const response = await axios.get(`${apiBaseUrl}/${endpoint}`, {
      params: {
        api_key: apiKey,
        language: "fr-FR",
        ...params,
      },
    });
    data = response.data;
  } catch (e) {
    error = e.message;
  }

  return { data, error }

};

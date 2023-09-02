import axios from "axios";
const baseURL = process.env.REACT_APP_SATSANG_LIBRARY;

async function client(endpoint, method, data = null, headers = {}) {
  try {
    const url = baseURL + endpoint;

    const getData = (data) => {
      const form = new FormData();
      let keys = Object.keys(data);

      for (let i = 0; i < keys.length; i++) {
        form.append(keys[i], data[keys[i]]);
      }
      return form;
    };

    const response = await axios({
      url,
      method,
      data: getData(data),
      headers: {
        ...headers,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

export { client };

import axios from 'axios';

export const fetchImages = () => {
  return axios({
    url: process.env.REACT_APP_IMAGE_RETRIEVER_URL,
    method: 'GET',
    headers: {
      'x-api-key': process.env.REACT_APP_IMAGE_RETRIEVER_API_KEY,
    },
  });
};

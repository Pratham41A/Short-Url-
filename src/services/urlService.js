import axios from "axios";

const {env: {VITE_BACKEND_SERVER_URL} = {} } = import.meta || {};

export async function createShortUrl({ destinationUrl, expirySeconds }) {
  try {
    const { data: {shortUrl} = {} } = await axios.post(VITE_BACKEND_SERVER_URL, {
      destinationUrl,
      expirySeconds,
    });

    return shortUrl;
  }
  catch (error) {
    const {response: {data: {error: serverErrorMessage} = {}} = {}} = error || {};
    const {message: catchErrorMessage} = error || {};
    const errorMessage = serverErrorMessage || catchErrorMessage;
  throw new Error(errorMessage);
  }
}
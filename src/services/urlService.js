import axios from "axios";

export async function createShortUrl(body) {
  try {
    const { data: {shortUrl} = {} } = await axios.post(import.meta.env.VITE_BACKEND_SERVER_URL, body);

    return shortUrl;
  }
  catch (error) {
    const {response: {data: {error: serverErrorMessage} = {}} = {}} = error || {};
    const {message: catchErrorMessage} = error || {};
    const errorMessage = serverErrorMessage || catchErrorMessage;
  throw new Error(errorMessage);
  }
}
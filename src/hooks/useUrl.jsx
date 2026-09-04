import { useState } from "react";
import { createShortUrl } from "../services/urlService";

export default function useShortUrl() {
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function create({ destinationUrl, expirySeconds }) {
    try {
    setError("");
    setShortUrl("");
    setIsLoading(true);

      const createdShortUrl = await createShortUrl({
        destinationUrl,
        expirySeconds,
      });

      setShortUrl(createdShortUrl);

    } catch (error) {
      const {message} = error || {};
      setError(message);
    } finally {
        setIsLoading(false);
      }
  }

  return {
    shortUrl,
    isLoading,
    error,
    create,
  };
}
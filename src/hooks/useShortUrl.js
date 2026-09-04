import { useCallback, useMemo, useState } from "react";
import { createShortUrl } from "../services/urlService.js";

export function useShortUrl() {
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const create = useCallback(
    async function createShortUrlRequest({ destinationUrl, expirySeconds }) {
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
        const { message } = error || {};
        setError(message);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return useMemo(
    () => ({
      shortUrl,
      isLoading,
      error,
      create,
    }),
    [shortUrl, isLoading, error, create]
  );
}
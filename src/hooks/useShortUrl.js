import { useCallback, useMemo, useState } from "react";
import { createShortUrl } from "../services/urlService.js";

export function useShortUrl() {
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const create = useCallback(
    async function createShortUrlRequest({ destinationUrl, expirySeconds }) {
      try {
        setError("");
        setShortUrl("");
        setLoading(true);

        const createdShortUrl = await createShortUrl({
          destinationUrl,
          expirySeconds,
        });

        setShortUrl(createdShortUrl);
      } catch (error) {
        const { message } = error || {};
        setError(message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return useMemo(
    () => ({
      shortUrl,
      loading,
      error,
      create,
    }),
    [shortUrl, loading, error, create]
  );
}
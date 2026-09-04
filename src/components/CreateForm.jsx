import { useState } from "react";
import Loader from "./Loader";
import Error from "./Error";
export default function CreateForm({ onSubmit, isLoading, error }) {
  const [destinationUrl, setDestinationUrl] = useState("");
  const [expirySeconds, setExpirySeconds] = useState(60);

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      destinationUrl,
      expirySeconds,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="destinationUrl"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Destination Url
        </label>

        <input
          type="url"
          id="destinationUrl"
          value={destinationUrl}
          onChange={(event) => {
            const {target: {value} = {}} = event || {};
            setDestinationUrl(value);
          }}
          placeholder="https://example.com"
          required
          disabled={isLoading}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-slate-100"
        />
      </div>

      <div>
        <label
          htmlFor="expirySeconds"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Expiry In Seconds
        </label>

        <input
          type="number"
          id="expirySeconds"
          value={expirySeconds}
          onChange={(event) => {
            const {target: {value} = {}} = event || {};
            setExpirySeconds(value);
          }}
          required
          min={60}
          max={86400}
          disabled={isLoading}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-slate-100"
        />
      </div>
{
  isLoading ? (
     <Loader />
  ): (
<div className="flex flex-col items-center gap-2">
  <button
    type="submit"
    disabled={isLoading}
    className="w-fit rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
  >
    Create Short Url
  </button>

  <Error message={error} />
</div>
  )
}
    </form>
  );
}

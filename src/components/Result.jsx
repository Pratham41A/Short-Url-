export default function Result({ shortUrl }) {
  if (!shortUrl) {
    return null;
  }

  async function handleCopy() {
    try {
      const {clipboard= {}} = navigator || {};
      await clipboard.writeText(shortUrl);
      alert("Short Url Copied to Clipboard");
    } catch {

    }
  }

  return (
    <div className="mt-3 rounded-xl">
      <label
        htmlFor="shortUrl"
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        Short Url
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="url"
          id="shortUrl"
          value={shortUrl}
          readOnly
          className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
        />

        <button
          type="button"
          onClick={handleCopy}
          className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        >
          Copy
        </button>
      </div>
    </div>
  );
}
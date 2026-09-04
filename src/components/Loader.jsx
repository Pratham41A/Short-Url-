export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"
        role="status"
        aria-label="Creating short URL"
      />

      <p className="mt-4 text-sm text-slate-500">
      </p>
    </div>
  );
}

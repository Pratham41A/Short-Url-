export default function Error({ message }) {
  if (!message) {
    return null;
  }

  return (
    <div
      role="alert"
      className="w-full mt-4 rounded-lg border border-red-600 bg-red-50 px-2 py-2 text-lg text-red-600 text-center"
    >
      {message}
    </div>
  );
}

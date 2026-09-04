import CreateForm from "./components/CreateForm";
import Result from "./components/Result";
import useUrl  from "./hooks/useUrl";

function App() {
  const {
    shortUrl,
    isLoading,
    error,
    create,
  } = useUrl();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <section className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
            <CreateForm
              onSubmit={create}
              isLoading={isLoading}
              error={error}
            />
            <Result shortUrl={shortUrl} />
      </section>
    </main>
  );
}

export default App;
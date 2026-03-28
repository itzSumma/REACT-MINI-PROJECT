import { Suspense } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Models from "./Components/Models";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};


function App() {
  const modelPromise = getModels();
  return (
    <div>
      <header className="mx-auto max-w-7xl px-6 py-4 lg:px-12">
        <Navbar />
      </header>
      <main>
        <Banner />
        <Suspense
          fallback={
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 py-16 lg:px-12">
              <span className="loading loading-spinner loading-lg text-red-500"></span>
              <p className="text-sm font-medium text-zinc-600">
                Loading models...
              </p>
            </div>
          }
        >
          <Models modelPromise={modelPromise} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;


import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <header className="mx-auto max-w-7xl px-6 py-4 lg:px-12">
        <Navbar />
      </header>
      <main>
        <Banner />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;

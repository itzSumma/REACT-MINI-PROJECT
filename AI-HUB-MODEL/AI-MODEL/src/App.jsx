import { Suspense, useState } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Models from "./Components/Models";
import Cart from "./Components/Cart";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};


function App() {
  // Active tabs made
  const [tab , setTab]=useState("Model")
  // console.log(tab)

  // Cart items
  const [cart , setCart] = useState([])
console.log(cart)

  const modelPromise = getModels();
  return (
    <div>
      <header className="mx-auto max-w-7xl px-6 py-4 lg:px-12">
        <Navbar />
      </header>
      <main>
        <Banner />

        {/* Active tab model and cart */}
<div className="tabs tabs-box justify-center bg-transparent">
  <input type="radio" name="my_tabs_1" className="tab w-30 rounded-full" aria-label="Models" onClick={()=>{setTab("Model")}}
   defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-30" aria-label="Cart" onClick={()=>{setTab("Cart")}} />
  
</div>

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
         {tab ==="Model" && <Models modelPromise={modelPromise} cart={cart} setCart={setCart}/>}
        </Suspense>
   { tab === "Cart" && <Cart cart={cart}/>}
      </main>
      <Footer />
    </div>
  );
}

export default App;

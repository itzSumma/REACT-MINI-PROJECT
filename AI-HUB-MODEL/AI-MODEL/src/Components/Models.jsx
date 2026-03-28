import { use } from "react";
import ModelCard from "./ModelCard";

const Models = ({ modelPromise, cart , setCart }) => {
  const models = use(modelPromise);

  return (
    <div className="mx-auto max-w-7xl py-20">
      <h2 className="text-center text-4xl font-bold">Choose Your AI Model</h2>
      <p className="text-center text-xl text-gray-600 font-md">
        One Subscription gives you access to all frontier AI Models
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {models.map((model,index) => (
         <ModelCard key={index} model={model} cart={cart} setCart={setCart}/>
        ))}
      </div>
    </div>
  );
};

export default Models;

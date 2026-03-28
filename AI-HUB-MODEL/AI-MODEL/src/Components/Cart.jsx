import React from "react";

const Cart = ({ cart }) => {
//   console.log(cart);
const totalPrice= cart.reduce((sum ,item) => 
    sum + item.price,0)
console.log(totalPrice)

  return <div className=" p-10">
    <h2 className="text-2xl font-bold ">Your Cart</h2>
<div className="space-y-5 mt-5">
    {cart.map(item=> <div className="flex justify-between items-center p-5 border rounded-xl bg-gray-300  " key={item.id}>
    <div className="flex items-center gap-2">
        <div>
        <img className="h-20 w-20 object-contain" src={item.image} alt={item.name} />
    </div>
    <div>
        <h2 className="text-xl font-bold">{item.title}</h2> 
        <p className="font-semibold text-gray-600">{item.description}</p>
    </div>
    </div>
    <div className="text-2xl font-bold">${item.price}/month</div>
</div>)}
</div>
<div className=" flex justify-between bg-black text-white p-5 mt-5 rounded-xl text-2xl font-bold">
    <div>
        Total
    </div>
    <div>${totalPrice}</div>
</div>
    </div>;
};

export default Cart;

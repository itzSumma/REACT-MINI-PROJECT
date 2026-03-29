import React from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const Cart = ({ cart, setCart }) => {
  //   console.log(cart);
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  console.log(totalPrice);

  // Checkout Payment
  const handleCheckout = () => {
    setCart([]);
    toast.success("Payment completed successfully");
  };
  const handleDelete = (item) => {
    // console.log(item)
    const filteredArray = cart.filter((elem) => elem.id !== item.id);
    // console.log(filteredArray)
    setCart(filteredArray);
    toast.error("Item remove from cart");
  };

  return (
    <div className=" p-10 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold ">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-2xl font-bold text-center border border-gray-300 p-10 mt-5 bg-zinc-300 rounded-xl">
          {" "}
          Your cart is empty
        </p>
      ) : (
        <>
          <div className="space-y-5 mt-5">
            {cart.map((item) => (
              <div
                className="flex justify-between items-center p-5 border rounded-2xl  border-white/40 bg-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                key={item.id}>
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      className="h-20 w-20 object-contain"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="font-semibold text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="text-2xl font-bold">${item.price}/month</div>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-error rounded-full">
                    <RxCross2 />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-5 mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-linear-to-r from-zinc-900 to-black p-5 text-white shadow-lg">
            <div className="text-3xl font-bold text-zinc-300">Total</div>
            <div className="text-3xl font-bold text-white">${totalPrice}</div>
          </div>
          <button
            onClick={handleCheckout}
            className="btn  w-full rounded-2xl bg-red-600 p-6 text-xl font-semibold text-white shadow-xl shadow-red-400/30 transition-all hover:bg-red-500 ">
            {" "}
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;

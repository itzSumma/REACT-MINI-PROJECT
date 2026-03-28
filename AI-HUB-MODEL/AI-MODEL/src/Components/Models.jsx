import { use } from "react";

const Models = ({ modelPromise }) => {
  const models = use(modelPromise);

  return (
    <div className="mx-auto max-w-7xl py-20">
      <h2 className="text-center text-4xl font-bold">Choose Your AI Model</h2>
      <p className="text-center text-xl text-gray-600 font-md">
        One Subscription gives you access to all frontier AI Models
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {models.map((model) => (
          <div
            key={model.id}
            className="group relative h-full overflow-hidden rounded-xl p-[1.5px] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl"
          >
            <div className="absolute inset-0 rounded-xl bg-[conic-gradient(from_180deg_at_50%_50%,#f59e0b_0deg,#ef4444_120deg,#fb7185_240deg,#f59e0b_360deg)] opacity-0 transition-opacity duration-300 group-hover:animate-[spin_4s_linear_infinite] group-hover:opacity-100 group-active:animate-[spin_4s_linear_infinite] group-active:opacity-100" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[10px] bg-white">
              <div className="relative flex h-52 items-center justify-center bg-zinc-200">
                {model.status && (
                  <div
                    className={`absolute top-5 right-3 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider
                      ${model.status === "popular" ? "bg-red-600 text-white" : ""}
                      ${model.status === "favourite" ? "bg-orange-500 text-white" : ""}
                      ${model.status === "mostwanted" ? "bg-orange-400 text-white" : ""}
                    `}
                  >
                    {model.status === "popular" && "Popular"}
                    {model.status === "favourite" && "Favourite"}
                    {model.status === "mostwanted" && "Most Wanted"}
                  </div>
                )}
                <img
                  className="h-40 w-40 object-contain"
                  src={model.image}
                  alt={model.title}
                />
              </div>

              <div className="flex flex-1 flex-col space-y-4 p-4">
                <h2 className="text-xl font-bold">{model.title}</h2>
                <p className="min-h-[72px] text-zinc-500">{model.description}</p>
                <div className="text-xl font-bold">${model.price}/month</div>

                <button className="btn mt-auto w-full rounded-lg bg-red-500 text-white">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;

import React from "react";

const PageToRead = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="rounded-3xl bg-base-200 px-6 py-10 text-center shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
          Reading Progress
        </p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Page to Read
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Track your next reading target here. This page is ready, so the navbar
          link works properly on both local and deployed builds.
        </p>
      </div>
    </section>
  );
};

export default PageToRead;

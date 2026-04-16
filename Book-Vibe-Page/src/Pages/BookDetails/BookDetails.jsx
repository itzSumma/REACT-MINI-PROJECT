import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();

  const expectedBook = books.find((book) => book.bookId === Number(bookId));

  if (!expectedBook) {
    return (
      <div className="container mx-auto my-12">
        <div className="alert alert-error">
          <span>Book not found.</span>
        </div>
      </div>
    );
  }

  const {
    image,
    bookName,
    author,
    review,
    category,
    rating,
    totalPages,
    publisher,
    yearOfPublishing,
    tags,
  } = expectedBook;

  return (
    <div className="container mx-auto my-12 px-4">
      <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200">
        <figure className="lg:w-1/3 bg-base-200 p-8">
          <img
            src={image}
            alt={bookName}
            className="max-h-[420px] w-full rounded-xl object-cover"
          />
        </figure>

        <div className="card-body lg:w-2/3">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
            {category}
          </p>
          <h1 className="text-3xl font-bold">{bookName}</h1>
          <p className="text-lg text-gray-600">By : {author}</p>

          <div className="divider my-1" />

          <p>
            <span className="font-bold">Review :</span> {review}
          </p>

          <div className="divider my-1" />

          <div className="flex flex-wrap gap-2">
            <span className="font-bold">Tag</span>
            {tags?.map((tag) => (
              <span
                key={tag}
                className="badge badge-soft badge-success px-3 py-4"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="divider my-1" />

          <div className="grid gap-3 text-sm md:grid-cols-2 md:text-base">
            <p>
              <span className="font-semibold text-gray-500">Number of Pages:</span>{" "}
              {totalPages}
            </p>
            <p>
              <span className="font-semibold text-gray-500">Publisher:</span>{" "}
              {publisher}
            </p>
            <p>
              <span className="font-semibold text-gray-500">Year of Publishing:</span>{" "}
              {yearOfPublishing}
            </p>
            <p>
              <span className="font-semibold text-gray-500">Rating:</span> {rating}
            </p>
          </div>

          <div className="card-actions mt-6">
            <button className="btn btn-outline btn-accent">Read</button>
            <button className="btn btn-accent text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';
const BooksCard = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`}
         
            className="card bg-base-100 shadow-lg hover:shadow-2xl transition"
          >
            <figure className="p-6">
              <img
                src={book.image}
                alt={book.bookName}
                className="rounded-xl h-64 object-cover"
              />
            </figure>

            <div className="card-body pt-0">
              <div className="flex gap-2 flex-wrap">
                {book.tags?.map((tag, index) => (
                  <div
                    key={index}
                    className="badge text-green-600 bg-green-50 font-semibold"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <h2 className="card-title text-xl font-bold">
                {book.bookName}
              </h2>

              <p className="font-semibold text-gray-600">
                By : {book.author}
              </p>

              <div className="card-actions justify-between border-t border-dashed pt-4 mt-2">
                <div className="font-semibold">{book.category}</div>

                <div className="flex gap-2 items-center">
                  {book.rating}
                  <FaRegStar />
                </div>
              </div>
            </div>
          </Link>
    );
};

export default BooksCard;

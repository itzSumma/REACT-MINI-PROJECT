import React, { use } from "react";

import BooksCard from "../../ui/BooksCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);

  return (
    <div className="my-12 container mx-auto">
      <h2 className="font-bold text-3xl text-center mb-8">Books</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book,ind) => (
          <BooksCard key={ind} book={book}/>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
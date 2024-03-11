import React from 'react';
import './BookList.css';
export default function BookList() {
   let pageTitle = "Book Recommendations";
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg";
   let book2 = "https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div className="book-list">
         <h3>{pageTitle}</h3>
         <img src={book1} alt="To Kill a Mockingbird" style={{width: "150px", height: "200px"}} />
         <img src={book2} alt="1984" style={{width: "150px", height: "200px"}} />
         <img src={book3} alt="The Great Gatsby" style={{width: "150px", height: "200px"}} />
      </div>      
   );
}
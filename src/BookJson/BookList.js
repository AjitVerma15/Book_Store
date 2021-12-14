import React from 'react'
import Book from './Book';
import book from './bookdata.json';

export default function BookList() {
    return (
        <div className="row row-cols-1 row-cols-md-5 g-4">
            {book.map((item) => {
                return <Book key={item.id} isbn={item.isbn} title={item.title} image={item.thumbnailUrl} id={item.id}/>
            })}
        </div>
    )
}

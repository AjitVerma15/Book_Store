import React from 'react'
import {
    useLocation
} from 'react-router-dom';
import Book from './Book';
import book from './bookdata.json';

export default function BookSearch() {

    const data = useLocation();
    const searchvalue = data.state;
    const booklist = book.filter((item) => 
    {
        if (item.title.includes(searchvalue)) {
            return item;
        }
    });
    
    return  (
        <div className="row row-cols-1 row-cols-md-5 g-4">
            {booklist.length === 0 &&
                <h1>Book Not Found</h1>
            }
            {booklist.map((item) => {
                return <Book key={item.id} isbn={item.isbn} title={item.title} image={item.thumbnailUrl} id={item.id}/>
            })}
        </div>
    )
}

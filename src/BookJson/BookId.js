import React from 'react';
import { useParams } from "react-router-dom";
import book from './bookdata.json';
import Book from './Book';

export default function BookId() {
    const {bookid} = useParams();
    const bookdata = book.filter(item => item.id === Number(bookid))[0];
    return (
        <>
          <strong>Id</strong> : {bookdata.id}
          <hr/>
          <strong>Title</strong> : {bookdata.title}
          <hr/>
          <strong>ISBN</strong> :  {bookdata.isbn}
          <hr/>
          <strong>PageCount</strong> :  {bookdata.pageCount}
          <hr/>
          <strong>ShortDescription</strong> : {bookdata?.shortDescription}
          <hr/>
          <strong>LongDescription</strong> : {bookdata?.longDescription}
          <hr/>
          <strong>Status</strong> : {bookdata?.status}
        </>
    )
}

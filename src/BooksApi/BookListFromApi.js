import React,{useState, useEffect, Suspense, lazy} from 'react'

const Book = React.lazy(() => import('./Book'));

export default function BookListFromApi() {
    const [booksList, setBookList] = useState({});
    const [loading, isLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://openlibrary.org/authors/OL1394244A/works.json?offset=50')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        }).then(data=>{
            setBookList(data)
        }).catch(error => {
            console.error("Error happen at ", error);
            setError(error);
        }).finally(()=>{
            isLoading(false);
        })
    }, []);
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error Happen..</h1>
    let desc = null;
    return (
        <div className="card-group">
            {booksList.entries.map(book => {
                if (typeof(book?.description) == 'string') {
                    desc = book.description;
                }
               return (
                   <Suspense fallback={<h1>Loading Books</h1>}>
                        <Book title={book.title} desc={desc}/>)
                   </Suspense>)
            })}
        </div>
    )
}

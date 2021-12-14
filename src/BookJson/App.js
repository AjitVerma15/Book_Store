import React, { Suspense } from "react";
import Header from "../Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes
  } from 'react-router-dom';
const BookList = React.lazy(() => import('./BookList'));
const About = React.lazy(() => import('./About'));
const Contact = React.lazy(() => import('./Contact'));
const BookId = React.lazy(() => import('./BookId'));
const BookSearch = React.lazy(() => import('./BookSearch'));


function App() {
  return (
    <Router>
    <Suspense fallback={<h1>Loading.....</h1>}>
     <Header/>
     <br/>
     <Routes>
       <Route path='/' element={<BookList/>}/>
       <Route path='/booksearch' element={<BookSearch/>}/>
       <Route path=':bookid' element={<BookId/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route/>
       <Route/>
     </Routes>
     </Suspense>
    </Router>
  );
}

export default App;

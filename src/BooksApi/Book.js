import React from 'react'
import image from './Book.png'; 

export default function Book(props) {
    return (
        <div class="card">
        <img src={image} className="card-img-top" alt={props.title}/>
        <div class="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">With a Little Help is my first serious experiment in self-publishing...</p>
            </div>
        <div class="card-footer">
        <a href="#" className="btn btn-primary">Details</a>
        </div>
      </div>
    )
}

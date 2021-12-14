import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Book(props) {
    return (
        <div className="col">
        <div className="card">
        <img src={props.image} className="card-img-top" alt={props.title}/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
        </div>
        <div className="card-footer">
            <NavLink to={`${props.id}`} className="btn btn-danger">Details</NavLink>
        </div>
        </div>
        </div>
    )
}

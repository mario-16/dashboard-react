import React from 'react'
import { Dropdown } from './Dropdown'

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <Dropdown />
            </div>             
        </nav>
    </div>
  )
}

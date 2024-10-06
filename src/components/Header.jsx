import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                   <Link class="navbar-brand" to="#">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                               <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                               <Link class="nav-link" to="create-product">Create Product</Link>
                            </li>
                            
                            <li class="nav-item">
                               <Link class="nav-link disabled" aria-disabled="true">Disabled</Link>
                            </li>
                        </ul>
                        <div className="d-flex gap-3 align-items-center">
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

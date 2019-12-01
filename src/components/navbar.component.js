import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Exercice Tracker</Link>
                <div className="collapse navbar-collapse"/>
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Exercices</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create exercice log</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/user" className="nav-link">Create user</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
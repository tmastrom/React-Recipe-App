import React from 'react';
import { Link } from 'react-router-dom';

const FourOhFour = () => {
    return (
        <React.Fragment>
            <h1>Error: 404 Page Not Found</h1>
            <Link to='/'>
            <h3>Home</h3>
            </Link>
        </React.Fragment>
    );
}
export default FourOhFour;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Procedures() {
    const [procedures, setProcedures] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/procedures')
            .then((response) => {
                setProcedures(response.data);
            })
            .catch((error) => {
                console.error('Error fetching procedures:', error);
            });
    }, []);

    return (
        <div className="App">
            <h1>Stored Procedures</h1>
            {procedures.map((procedure) => (
                <Link key={procedure} to={`/procedures/${procedure}`}>
                    <button>{procedure}</button>
                </Link>
            ))}
        </div>
    );
}

export default Procedures;

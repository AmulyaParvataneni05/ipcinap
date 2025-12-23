import React from 'react';
import { useRouteError } from 'react-router-dom';

function RoutingError() {
    let err = useRouteError();
    const errorData = err?.data || 'Something went wrong';
    const errorStatus = err?.status || 'Unknown';
    const errorStatusText = err?.statusText || 'Please try again later.';

    return (
        <div>
            <h1 className='display-1 text-danger mt-5 text-center'>{errorData}</h1>
            <h2 className='text-center display-3 text-warning'>{errorStatus} - {errorStatusText}</h2>
        </div>
    );
}

export default RoutingError;

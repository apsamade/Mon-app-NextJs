'use client';

import { useEffect } from 'react';

const Error = ({error, reset}) => {
    useEffect(()=> {
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Une erreur est survenue</h2>
            <button
                onClick={
                    //attempt to recover by trying to re-render the segment
                    () => reset ()
                }
            >
                Essaye encore
            </button>
        </div>
    );

}

export default Error;
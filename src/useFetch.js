import React from "react";
import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) { // chcek if network is properly running
                        throw new Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setData(data);
                    setError(null);
                })
                .catch(err => {
                    // auto catches network error
                    setIsPending(false);
                    setError(err.message);
                })
        }, []);
    }, [url])

    return { data, isPending, error };
}

export default useFetch;
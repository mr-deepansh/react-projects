import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/coder-deep1')
    //         .then(Response => Response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         });
    // }, []);

    return (
        <div className='text-center m-4 text-3xl bg-gray-600 text-white p-4 font-mono'>GitHub Profile : {data.following}
            <img className='h-40' src={data.avatar_url} alt="gitHub" /></div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const Response = await fetch('https://api.github.com/users/coder-deep1');
    return Response.json();
};
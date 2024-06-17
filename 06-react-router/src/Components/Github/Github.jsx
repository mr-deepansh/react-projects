// import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Github component
function Github() {
    const data = useLoaderData();

    const username = data?.login ?? 'N/A';
    const following = data?.following ?? 'N/A';
    const repos = data?.public_repos ?? 'N/A';
    const avatarUrl = data?.avatar_url ?? 'https://via.placeholder.com/150';

    return (
        <div className="text-center bg-gray-600 text-white p-4 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold mb-4">GitHub Profile</h1>
            <img className="h-40 rounded-full mx-auto mb-4" src={avatarUrl} alt="GitHub Avatar" />
            <div className="text-left">
                <p className="text-xl">
                    <strong  >
                            GitHub Profile:
                        </strong> 
                    {' '}
                    <Link to='https://github.com/mr-deepansh' target='_blank' rel="noopener noreferrer" className="text-blue-400 hover:no-underline">
                        {username}
                    </Link>
                </p>
                <p className="text-xl"><strong>Following:</strong> {following}</p>
                <p className="text-xl"><strong>Repositories:</strong> {repos}</p>
            </div>
        </div>
    );
}

// Loader function to fetch GitHub user data
export const githubInfoLoader = async () => {
    try {
        const response = await axios.get('https://api.github.com/users/mr-deepansh');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch GitHub user data:', error);
        return {
            login: 'N/A',
            following: 'N/A',
            public_repos: 'N/A',
            avatar_url: 'https://via.placeholder.com/150',
            html_url: '#',
        };
    }
};

export default Github;

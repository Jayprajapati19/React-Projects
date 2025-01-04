import React, { useEffect, useState } from "react";
import { useLoaderData, useRouteLoaderData } from "react-router";

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Jayprajapati19")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         });
    // }, []);

    return (
        <div className="flex flex-col items-center bg-gradient-to-b from-orange-900 to-orange-800 text-white p-8 rounded-lg shadow-lg max-w-md mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-4">GitHub Profile</h1>
            <img
                src={data.avatar_url}
                alt="GitHub Avatar"
                className="rounded-full w-40 h-40 shadow-md mb-4"
            />
            <h2 className="text-xl font-semibold">{data.name || "No Name Provided"}</h2>
            <p className="text-sm mt-1 italic">
                {data.location || "Location not available"}
            </p>
            <div className="flex justify-around w-full mt-6">
                <div className="text-center">
                    <h3 className="text-lg font-bold">{data.followers}</h3>
                    <p className="text-sm">Followers</p>
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-bold">{data.following}</h3>
                    <p className="text-sm">Following</p>
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-bold">{data.public_repos}</h3>
                    <p className="text-sm">Repositories</p>
                </div>
            </div>
            <a
                href={data.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-white text-orange-800 py-2 px-6 rounded-full shadow hover:bg-gray-100 transition"
            >
                View Profile
            </a>
        </div>
    );
}

export default Github;


export const githubInfoLoader = async () => {
    const reponse = await fetch("https://api.github.com/users/Jayprajapati19")
    return reponse.json();
}
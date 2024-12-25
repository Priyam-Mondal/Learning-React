import React, { useEffect,useState } from "react";
import { useLoaderData } from "react-router";

function Github() {

    // const [data, setData] = useState([]);

    // useEffect (() => {
        
    //     fetch('https://api.github.com/users/priyam-mondal')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);            
    //     })
    // }, [])
    

    //using loader property of <Route /> and useLoaderData hook
    const data = useLoaderData();

    return (
        <>
        <div className="bg-gray-600 text-white text-3xl p-4">
            <img src={data.avatar_url} alt="git picture" />
            <p className=" text-center bg-gray-600 text-white text-3xl p-4">Github Name: {data.login}</p>
            <p className=" text-center bg-gray-600 text-white text-3xl p-4">Public Repo's: {data.public_repos}</p>
        </div>
        
        </>
    );
}

export default Github;    

export const gitDataLoader = async () => {
    const response = await fetch('https://api.github.com/users/priyam-mondal');
    return response.json();
}
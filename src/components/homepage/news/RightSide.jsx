import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSide = () => {
    return (
        <div>
            <h2 className="text-lg mb-4 font-bold">Login with</h2>
            <div className="flex gap-3 items-center justify-center">
                <button className="btn border-blue-500 text-blue-500"><FaGoogle className='text-blue'></FaGoogle> Login with Google</button>
                <button className="btn"><FaGithub></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default RightSide;
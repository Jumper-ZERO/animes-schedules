import React from 'react';
import gif from "../assets/loading-icons/loading-anime.gif";

const Loading = () => {
    return (
        <div className='w-screen h-screen flex justify-end items-end'>
            <img className='min-w-[250px] min-h-[250px] m-5' src={gif} alt="loading-anime" />
        </div>
    );
}

export default Loading;
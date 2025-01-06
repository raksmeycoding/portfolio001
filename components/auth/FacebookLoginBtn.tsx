"use client"
import React from 'react';
import {FaFacebook} from "react-icons/fa";

const FacebookLoginBtn = () => {
    return (
        <div className={`grow flex flex-row items-center justify-center bg-white h-9 rounded-sm cursor-pointer hover:bg-gray-300`}>
            <FaFacebook className={`text-primary`}/>
        </div>
    );
};

export default FacebookLoginBtn;
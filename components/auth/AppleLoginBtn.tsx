"use client"

import React from 'react';
import {FaApple} from "react-icons/fa";

const AppleLoginBtn = () => {
    return (
        <div className={`grow flex flex-row items-center justify-center bg-white h-9 rounded-sm cursor-pointer hover:bg-gray-300`}>
            <FaApple className={`text-primary`}/>
        </div>
    );
};

export default AppleLoginBtn;
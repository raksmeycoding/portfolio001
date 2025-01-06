'use client'

import React from 'react';
import {FaGoogle} from "react-icons/fa";
import {socialLogin} from "@/services/actions/auth";

const GoogleLoginBtn = () => {
    return (

        <button onClick={() => socialLogin()}
                className={`grow flex flex-row items-center justify-center bg-white h-9 rounded-sm cursor-pointer hover:bg-gray-300`}
        >
            <FaGoogle className={`text-primary`}/>
        </button>

    );
};

export default GoogleLoginBtn;
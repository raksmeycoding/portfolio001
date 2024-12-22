import React from 'react';
import {FaGithub, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";
import Link from "next/link";


const socials = [
    {icon: <FaGithub/>, path: ""},
    {icon: <FaLinkedin/>, path: ""},
    {icon: <FaYoutube/>, path: ""},
    {icon: <FaTwitter/>, path: ""}
]

interface SocialProps {
    containerStyles?: string,
    iconStyles?: string,
}

const Social: React.FC<SocialProps> = ({containerStyles, iconStyles}) => {


    return (
        <>
            <div className={containerStyles}>

                {
                    socials.map((social, index) => {
                        return (
                            <Link key={index} href={social.path} className={iconStyles}>{social.icon}</Link>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Social;
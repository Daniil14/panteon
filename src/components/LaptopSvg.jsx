import React from 'react';

const LaptopSvg = ({percent}) => {
    return (
        <svg width="283" height="165" viewBox="0 0 283 165" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path d="M249.836 158.666H253.148C254.11 158.666 254.889 157.886 254.889 156.924V156.446C254.889 155.748 254.324 155.182 253.626 155.182V155.182" stroke="#9EA2AD" strokeWidth="0.762791"/>
                <path d="M33.4795 158.666H30.1678C29.2058 158.666 28.4259 157.886 28.4259 156.924V156.446C28.4259 155.748 28.9916 155.182 29.6893 155.182V155.182" stroke="#9EA2AD" strokeWidth="0.762791"/>
                <rect x="38.9146" y="10.5158" width="204.854" height="136.684" stroke="#9EA2AD" strokeWidth="0.762791"/>
                <rect x="29.4395" y="0.381395" width="224.437" height="157.27" rx="4.57674" stroke="#9EA2AD" strokeWidth="0.762791"/>
                <rect x="0.381395" y="158.731" width="282.237" height="5.88789" rx="2.94394" stroke="#9EA2AD" strokeWidth="0.762791"/>
                <path d="M95.2185 159.432C94.9006 159.225 95.0473 158.731 95.4267 158.731H187.248C187.639 158.731 187.777 159.251 187.436 159.444L183.825 161.49C183.137 161.88 182.36 162.085 181.569 162.085H100.649C99.7621 162.085 98.8939 161.827 98.1505 161.343L95.2185 159.432Z" stroke="#9EA2AD" strokeWidth="0.762791"/>
                <rect x="39" y="10" width="205" height="136.684" fill="url(#laptop-fill)" fillOpacity="0.1"/>
            </g>
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontWeight="bold" fill="#1A2540">{percent}%</text>
            <defs>
                <clipPath id="clip0">
                    <rect width="283" height="165" fill="white"/>
                </clipPath>
                <linearGradient id="laptop-fill" x1="50%" x2="50%" y1="100%" y2="0%">
                    <stop offset={`${percent}%`} stopColor="#316BFF" stopOpacity="1"/>
                    <stop offset={`${percent}%`} stopColor="transparent" stopOpacity="1"/>
                </linearGradient>
            </defs>
        </svg>
    );
};

export default LaptopSvg;
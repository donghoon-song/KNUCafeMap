import React from 'react';

const Info = ({ label, value }) => {
    return (
        <div style={{ fontSize: "1.2rem", fontFamily: "Noto Sans KR", marginTop: "1rem" }}>
            <span>{label}</span>
            <span> : </span>
            <span>{value}</span>
        </div>
    )
}

export default Info;
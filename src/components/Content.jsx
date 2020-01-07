import React from 'react';

const ContentStyle = {
    padding: "0 1.2rem 0 1.2rem"
}

const leftContentStyle = {
    width: '50%',
    height: '100vh',
    display: 'inline-block',
    boxSizing: 'border-box',
    float: 'left',
    padding: "0 1.2rem 0 1.2rem",
    border: '1px solid',
}

const rightContentStyle = {
    width: '50%',
    height: '100vh',
    display: 'inline-block',
    boxSizing: 'border-box',
    float: 'right',
    padding: "0 1.2rem 0 1.2rem",
    border: '1px solid',

}

const Content = ({ leftComponent, rightComponent }) => {
    return (
        <>
            <div className="left-content" style={leftContentStyle}>{leftComponent}</div>
            <div className="right-content" style={rightContentStyle}>{rightComponent}</div>
        </>
    )
}

export default Content;
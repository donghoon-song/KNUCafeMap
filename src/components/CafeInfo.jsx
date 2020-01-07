import React, { useState } from 'react';
import Title from '../components/Title';
import Description from '../components/Description';
import MyCarousel from '../components/MyCarousel';
import 'antd/dist/antd.css';

const item = <div style={{ display: "flex", alignItems: "center" }}>1</div>

const topStyle = { width: "100%", height: "30%", marginTop: "20px" };

const bottomStyle = { width: "100%", height: "60%", border: "3px solid", display: "flex", justifyContent: "center" };


const CafeInfo = () => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div style={topStyle}><Description /></div>
            <div style={bottomStyle}><MyCarousel /></div>
        </div >
    )
}

export default CafeInfo;
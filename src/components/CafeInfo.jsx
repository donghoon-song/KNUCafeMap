import React, { useState, Component } from 'react';
import Title from '../components/Title';
import { observer, inject } from 'mobx-react';
import Description from '../components/Description';
import MyCarousel from '../components/MyCarousel';
import 'antd/dist/antd.css';

const item = <div style={{ display: "flex", alignItems: "center" }}>1</div>

const topStyle = { width: "100%", height: "30%", marginTop: "20px" };

const bottomStyle = { width: "100%", height: "60%", border: "3px solid", display: "flex", justifyContent: "center" };

const imageStyle = { width: "100%" }

@inject('infoStore')
@observer
class CafeInfo extends Component {
    render() {
        const { infoStore } = this.props;
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <div style={topStyle}><Description /></div>
                <div style={bottomStyle}><img src={infoStore.focusedCafe.img} style={imageStyle} /></div>
                {/* <div style={bottomStyle}><MyCarousel /></div> */}
            </div >
        )
    }
}
export default CafeInfo;
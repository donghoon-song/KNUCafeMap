import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Title from '../components/Title';
import Info from '../components/Info';

const TitleStyle = { borderBottom: "0.0625rem solid #e3dddd" };

@inject('infoStore')
@observer
class Description extends Component {
    render() {
        const { infoStore } = this.props;
        return (
            <>
                <Title title={infoStore.focusedCafe.name || "카페 이름"} />
                <Info label="가장 가까운 문" value={infoStore.focusedCafe.closestGate} />
                <Info label="영업 시간" value={`${infoStore.focusedCafe.openTime || "00:00"} - ${infoStore.focusedCafe.closeTime || "00:00"}`} />
            </>
        )
    }

}

export default Description;
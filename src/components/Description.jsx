import React from 'react';
import Title from '../components/Title';
import Info from '../components/Info';

const TitleStyle = { borderBottom: "0.0625rem solid #e3dddd" };
const Description = () => {
    return (
        <>
            <Title title="카페 이름" />
            <Info label="가장 가까운 문" value="쪽문" />
            <Info label="가장 가까운 문" value="쪽문" />
            <Info label="가장 가까운 문" value="쪽문" />
        </>
    )
}

export default Description;
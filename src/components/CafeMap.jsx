import React from 'react';
import { NaverMap, Marker } from 'react-naver-maps';

const CafeMap = () => {
    const navermaps = window.naver.maps; // 혹은 withNavermaps hoc을 사용
    return (
        <NaverMap
            id='maps-examples-marker'
            style={{
                width: '100%',
                height: '50vh',
            }}
            defaultCenter={new navermaps.LatLng(35.8894215, 128.6104104)}
            defaultZoom={10}
        >
            <Marker
                position={new navermaps.LatLng(35.8907647, 128.6033987)}
                animation={navermaps.Animation.BOUNCE}
                onClick={() => {
                    alert('아틀리에빈')
                }}
            />
        </NaverMap>
    )
}

export default CafeMap;
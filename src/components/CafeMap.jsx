import React, { Component } from 'react';
import { NaverMap, Marker } from 'react-naver-maps';
import { observer, inject } from 'mobx-react';

@inject('infoStore')
@observer
class CafeMap extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const navermaps = window.naver.maps; // 혹은 withNavermaps hoc을 사용
        const { infoStore } = this.props;
        return (
            <NaverMap
                id='maps-examples-marker'
                style={{
                    width: '100%',
                    height: '50%',
                }}
                defaultCenter={new navermaps.LatLng(35.8894215, 128.6104104)}
                defaultZoom={10}
            >{infoStore.cafeListShown.map((cafe) =>
                <Marker
                    position={new navermaps.LatLng(cafe.latitude, cafe.longitude)}
                    // animation={navermaps.Animation.BOUNCE}
                    onClick={() => {
                        alert(cafe.name)
                    }}
                />
            )}

            </NaverMap>
        )
    }

}

export default CafeMap;
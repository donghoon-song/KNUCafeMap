import React, { useState } from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';
import 'antd/dist/antd.css';

const mockList = [{
    id: 1,
    name: "아틀리에 빈",
    openTime: "08:00",
    closeTime: "23:00",
    closestGate: "북문"
}, {
    id: 2,
    name: "스타벅스",
    openTime: "08:00",
    closeTime: "23:00", "closestGate": "북문"
}, {
    id: 3,
    name: "파스쿠치",
    openTime: "08:00",
    closeTime: "23:00", "closestGate": "북문"
}, {
    id: 4,
    name: "1LL",
    openTime: "08:00",
    closeTime: "23:00", "closestGate": "북문"
}, {
    id: 5,
    name: "다다름",
    openTime: "08:00",
    closeTime: "23:00", "closestGate": "북문"
}, {
    id: 6,
    name: "블라인드 멜론",
    openTime: "08:00",
    closeTime: "23:00", "closestGate": "북문"
}, {
    id: 7,
    name: "칼디커피",
    openTime: "08:00",
    closeTime: "23:00", "closestGate": "쪽문"
}, {
    id: 8,
    name: "하바나",
    openTime: "08:00",
    closeTime: "23:00", "closestGate": "쪽문"
},]

const CafeList = () => {
    const [list, setList] = useState(mockList);
    const [initLoading, setInitLoading] = useState(false);

    return (
        <List
            style={{
                width: "100%",
            }}
            className="demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            dataSource={list}
            renderItem={item => (
                <List.Item
                // actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                >
                    <Skeleton avatar title={false} loading={item.loading} active>
                        <List.Item.Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title={<a href="https://ant.design">{item.name}</a>}
                            description={item.closesteGate}
                        />
                        <div>{`${item.openTime} - ${item.closeTime}`}</div>
                    </Skeleton>
                </List.Item>
            )}
        />
    );
}

export default CafeList;
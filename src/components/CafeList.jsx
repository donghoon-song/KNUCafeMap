import React, { Component } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { observer, inject } from 'mobx-react';
import InfoStore from '../stores/InfoStore';

// Table Config
const columns = [
    {
        title: '카페 이름',
        dataIndex: 'name',
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.name < b.name,
        sortDirections: ['descend'],
    },
    {
        title: '여는 시간',
        dataIndex: 'openTime',
        sorter: (a, b) => a.openTime < b.openTime,
        sortDirections: ['descend', 'aescend'],
    },
    {
        title: '닫는 시간',
        dataIndex: 'closeTime',
        sorter: (a, b) => a.closeTime < b.closeTime,
        sortDirections: ['descend', 'aescend'],
    },
    {
        title: '가까운 문',
        dataIndex: 'closestGate',
        filters: [
            {
                text: '북문',
                value: '북문',
            },
            {
                text: '쪽문',
                value: '쪽문',
            },
            {
                text: '테크노문',
                value: '테크노문',
            },
            {
                text: '정문',
                value: '정문',
            },
        ],
        onFilter: (value, record) => record.closestGate.indexOf(value) === 0,
        sorter: (a, b) => a.closestGate < b.closestGate,
        sortDirections: ['descend', 'ascend'],
    },
];
@inject('infoStore')
@observer
class CafeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initLoading: false
        }
    }

    render() {
        const { infoStore } = this.props;

        const handleClick = (e, record) => {
            const focusedCafe = infoStore.cafeList.filter(item => item.name === record.name).filter(item => item.closestGate === record.closestGate);
            infoStore.setFocusedCafe(focusedCafe[0]);
        }

        return (
            <>
                <Table dataSource={infoStore.cafeList} columns={columns} onRow={(record, rowIndex) => { return { onClick: e => handleClick(e, record) } }}></Table>
            </>
        );
    }

}
export default CafeList;
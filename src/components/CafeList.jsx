import React, { Component } from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';
import 'antd/dist/antd.css';
import { observer, inject } from 'mobx-react';
import InfoStore from '../stores/InfoStore';

@inject('infoStore')
@observer
class CafeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initLoading: false
        }
    }
    //     const { infoStore } = this.props;
    // const [list, setList] = useState(mockList);
    // const [initLoading, setInitLoading] = useState(false);
    render() {
        const { infoStore } = this.props;

        const handleClick = (e) => {
            console.log(e.target);
            console.log(e.target.getAttribute('index'));
            console.log(infoStore.cafeList[0])
            infoStore.setFocusedCafe(infoStore.cafeList[Number(e.target.getAttribute('index'))]);
        }
        return (
            <List
                style={{
                    width: "100%",
                }}
                className="demo-loadmore-list"
                loading={this.state.initLoading}
                itemLayout="horizontal"
                dataSource={infoStore.cafeList}
                renderItem={item => (
                    <List.Item
                    // actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={<span index={item.id - 1} onClick={handleClick}>{item.name}</span>}
                                description={item.closestGate}
                            />
                            <div>{`${item.openTime} - ${item.closeTime}`}</div>
                        </Skeleton>
                    </List.Item>
                )}
            />
        );
    }

}
export default CafeList;
import React, { Component } from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';
import 'antd/dist/antd.css';
import { observer, inject } from 'mobx-react';
import InfoStore from '../stores/InfoStore';

@inject('info')
@observer
class CafeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initLoading: false
        }
    }
    //     const { info } = this.props;
    // const [list, setList] = useState(mockList);
    // const [initLoading, setInitLoading] = useState(false);
    render() {
        const { info } = this.props;
        return (
            <List
                style={{
                    width: "100%",
                }}
                className="demo-loadmore-list"
                loading={this.state.initLoading}
                itemLayout="horizontal"
                dataSource={info.cafeList}
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
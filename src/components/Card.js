import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

class RecipeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled: 'setting'
        };
    }

    changeDisplay = (display) => {
        this.setState({ enabled: display });
    }

    changeDescription = () => {
        if (this.state.enabled === 'setting') {
            return this.props.description;
        }
        else if (this.state.enabled === 'edit') {
            return this.props.instructions;
        }
        else if (this.state.enabled === 'ellipsis') {
            return this.props.steps;
        }
    }

    render() {
        const { Meta } = Card;
        return(
            <Card
                style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                    <SettingOutlined key="setting" onClick={ () => { this.setState({ enabled: 'setting' }) } }/>,
                    <EditOutlined key="edit" onClick={ () => { this.setState({ enabled: 'edit' }) } }/>,
                    <EllipsisOutlined key="ellipsis" onClick={ () => { this.setState({ enabled: 'ellipsis' }) } }/>,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={this.props.title}
                    description={this.changeDescription()}
                />
            </Card>
        );
    }

}

export default RecipeCard;
import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import { QuestionCircleOutlined, OrderedListOutlined, UnorderedListOutlined } from '@ant-design/icons';

class RecipeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled: 'description'
        };
    }

    displaySteps = () => {
        let stepsLength = this.props.steps.length;
        let steps = '';

        for (let i = 0; i > stepsLength; i += 1) {
            if (i = stepsLength - 1) {
                // 
            }
            else {

            }
        }
    }

    changeDisplay = (display) => {
        this.setState({ enabled: display });
    }

    changeDescription = () => {
        if (this.state.enabled === 'description') {
            console.log(this.props.description);
            return this.props.description;
        }
        else if (this.state.enabled === 'instructions') {
            console.log(this.props.instructions);
            return this.props.instructions;
        }
        else if (this.state.enabled === 'ingredients') {
            console.log(this.props.steps);
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
                    <QuestionCircleOutlined key="description" onClick={ () => { this.setState({ enabled: 'description' }) } }/>,
                    <OrderedListOutlined key="instructions" onClick={ () => { this.setState({ enabled: 'instructions' }) } }/>,
                    <UnorderedListOutlined key="ingredients" onClick={ () => { this.setState({ enabled: 'ingredients' }) } }/>,
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
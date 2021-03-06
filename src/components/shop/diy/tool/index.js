//@flow
import React, { Component } from "react";
import { Row, Col, Button } from 'antd';
import styles from "./index.css";
import { View } from "react-web-dom";
import { defaultData } from "./defaultData";

type Props = {
    onToolItemClick: Function
}
type State = {
}

export default class PageTool extends Component<Props, State> {
    render() {
        const { onToolItemClick } = this.props
        return (
            <View className={styles.dragModuleWarp}>
                <Row>
                    <Col span={24}>
                        <p className={styles.dragModuleTitle}>添加模块</p>
                    </Col>
                </Row>
                <Row className={styles.itemRow}>
                    {
                        defaultData.length > 0 ? defaultData.map((item, index) => {
                            return <Col span={12} key={index} className={styles.buttonCol}>
                                <Button
                                    className={styles.moduleItem}
                                    onClick={() => {
                                        onToolItemClick({...item}, index)
                                    }}
                                >
                                    <View className={styles.iconView}>
                                        <img src={item.icon} alt='' />
                                    </View>
                                    <p>{item.title}</p>
                                </Button>
                            </Col>
                        }) : ''
                    }
                </Row>
            </View>
        )
    }

}

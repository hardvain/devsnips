import React from 'react';
import { Card, Icon } from 'antd';
const { Meta } = Card;

const styles = {
  root: {

  },
  title: {
    textAlign: 'center'
  }
}
export default () => {
  return <div style={styles.root}>
    <Card
      actions={[
        <Icon type="book" key="setting" />,
        <Icon type="edit" key="edit" />,
      ]}>
      <div style={styles.title}>
        Dynamo DB
      </div>
    </Card>
  </div>
}
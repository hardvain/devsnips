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
export default ({ data }) => {
  return <div style={styles.root}>
    <Card>
      <div style={styles.title}>
        {data.title}
      </div>
    </Card>
  </div>
}
import React from 'react';
import { Input, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import TopicPreview from '../../components/TopicPreview';
import data from '../../data';
const { Search } = Input;

const styles = {
  root: {
    padding: 20
  },
  search: {
    textAlign: 'center',
    margin: 30
  }
}
export default () => {
  return <div style={styles.root}>
    <div style={styles.search}>
      <Search
        size="large"
        placeholder="Search Snippets"
        onSearch={value => console.log(value)}
        style={{ width: 600, }}
      />
    </div>
    <div>
      <Row gutter={[48, 48]}>
        {Object.keys(data).map((k, i) => <Col key={i} span={6}><Link to={`/topics/${k}`}><TopicPreview /></Link></Col>)}
      </Row>
    </div>
  </div>
}
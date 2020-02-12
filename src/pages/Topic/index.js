import React from 'react';
import { Card, Row, Col, Divider } from 'antd';
const styles = {
  root: {
    padding: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  snippet: {

  }
}
const Snippet = ({ snippet }) => (
  <div style={styles.snippet}>
    <Card title={snippet.title}>
      <pre><code>{snippet.code}</code></pre>
      <div>
        {snippet.description}
      </div>
    </Card>
  </div>
)
const Section = ({ section }) => (
  <div style={styles.snippet}>
    <Divider>{section.title}</Divider>
    <Row gutter={[48, 48]}>
      {section.snippets.map(s => <Col span={12}><Snippet snippet={s} /></Col>)}
    </Row>
  </div>
)
export default ({ topicId, data }) => {
  return <div style={styles.root}>
    <div style={styles.title}>
      {data.title}
    </div>
    <div style={styles.snippets}>
      {
        data.sections.map((section, index) => <Section section={section} />)
      }
    </div>
  </div>
}
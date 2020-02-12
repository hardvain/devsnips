import React from 'react';
const styles = {
  root: {
    padding: 20
  }
}
export default ({ topicId }) => {
  return <div style={styles.root}>
    <div style={styles.title}>
      {topicId}
    </div>
  </div>
}
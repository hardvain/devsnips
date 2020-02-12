import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;

export default class AppMenu extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/"><Icon type="home" /></Link>
        </Menu.Item>
        <Menu.Item style={{ float: 'right' }} key="facebook">
          <Icon type="facebook" />
        </Menu.Item>
        <Menu.Item style={{ float: 'right' }} key="twitter">
          <Icon type="twitter" />
        </Menu.Item>
        <Menu.Item style={{ float: 'right' }} key="github">
          <Icon type="github" />
        </Menu.Item>
      </Menu>
    );
  }
}

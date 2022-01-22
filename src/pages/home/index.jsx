import React, {useState} from 'react';
import {Outlet, Link} from 'react-router-dom';
import {Menu} from 'antd';
import {HomeWrapper} from './home.styled';

function Home() {
  const {SubMenu, Item} = Menu;
  const [openKeys, setOpenKeys] = useState(['base']);
  const rootSubmenuKeys = ['base'];

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <HomeWrapper>
      <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
        <SubMenu key="base" title="Base 编/解码">
          <Item key="base32">
            <Link to="/base32">base32</Link>
          </Item>
          <Item key="base64">
            <Link to="/base64">base64</Link>
          </Item>
        </SubMenu>
      </Menu>
      <Outlet />
    </HomeWrapper>
  );
}

export default Home;

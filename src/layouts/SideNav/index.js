import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Config
import config from './config';

// Ant
import { Layout, Menu, Icon } from 'antd';

const generateMenu = config =>
  config.map(({ name, link, icon, items }) => {
    if (items) {
      return (
        <Menu.SubMenu
          key={name}
          title={
            <span>
              <Icon type={icon} />
              <span>{name}</span>
            </span>
          }
        >
          {items.map(item => (
            <Menu.Item key={item.link}>
              <Link href={item.link}>
                <a>
                  <span>{item.name}</span>
                </a>
              </Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      );
    } else {
      return (
        <Menu.Item key={link}>
          <Link href={link}>
            <a>
              <Icon type={icon} />
              <span>{name}</span>
            </a>
          </Link>
        </Menu.Item>
      );
    }
  });

/* SideNav */
export default () => {
  const { route } = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  return (
    <Layout.Sider collapsible collapsed={navOpen} onCollapse={setNavOpen}>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[route]}
        defaultOpenKeys={['Processing', 'Services', 'Configuration']}
      >
        {generateMenu(config)}
      </Menu>
    </Layout.Sider>
  );
};

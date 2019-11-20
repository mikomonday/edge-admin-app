import React from 'react';

// Ant
import { Layout, Breadcrumb } from 'antd';

/* TopNav */
export default () => (
  <Layout.Header>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  </Layout.Header>
);

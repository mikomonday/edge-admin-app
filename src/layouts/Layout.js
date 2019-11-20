import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Ant
import { Layout, Breadcrumb } from 'antd';

// Components
import SideNav from './SideNav';
import TopNav from './TopNav';

const generateBreadcrumbs = route => (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    {route.split('/').map(item => (
      <Breadcrumb.Item>{item}</Breadcrumb.Item>
    ))}
  </Breadcrumb>
);

/* Layout */
export default props => {
  const { route } = useRouter();
  return (
    <Fragment>
      <style global jsx>
        {`
          #__next,
          section.ant-layout {
            height: 100%;
          }
        `}
      </style>
      <Layout>
        <SideNav />
        <Layout>
          <TopNav />
          <Layout.Content>
            {generateBreadcrumbs(route)}
            {props.children}
          </Layout.Content>
        </Layout>
      </Layout>
    </Fragment>
  );
};

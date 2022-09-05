import { PageHeader } from 'antd';
import React from 'react';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

const Header: React.FC = () => (
  <PageHeader
    className="site-page-header"
    title="Title"
    breadcrumb={{ routes }}
    subTitle="This is a subtitle"
    avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
  />
);

export default Header;
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom'



const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: 'home',
    icon: <MailOutlined />,
  },
  {
    label: 'Js Practice',
    key: 'js-practice',
    icon: <AppstoreOutlined />
  },
  {
    label: 'github',
    key: 'github',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  }
];

const Sidebar: React.FC = (props) => {
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e.key);
    console.log('click ', props);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256, height: '100%' }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
      theme="dark"
    />
  );
}

export default Sidebar
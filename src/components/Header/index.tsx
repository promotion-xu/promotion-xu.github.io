import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'
import { PageHeader, Breadcrumb } from 'antd'
import './index.scss'

const Header: React.FC = () => {
  const location = useLocation()

  const breadcrumbMemo = useMemo(() => {
    const pathname = location.pathname
    const routes = pathname.slice(1).split('/')

    return (
      <Breadcrumb style={{ paddingLeft: '24px' }}>
        <Breadcrumb.Item>
          <HomeOutlined />
        </Breadcrumb.Item>
        {routes.map((route) => (
          <Breadcrumb.Item key={route}>{route}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    )
  }, [location.pathname])

  return (
    <div className="page-header">
      <PageHeader
        className="site-page-header"
        title="promotion-xu"
        extra={
          <>
            <a
              href="https://github.com/promotion-xu"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/promotion-xu
            </a>
            <img
              src="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"
              alt=""
            />
          </>
        }
      />
      {breadcrumbMemo}
    </div>
  )
}

export default Header

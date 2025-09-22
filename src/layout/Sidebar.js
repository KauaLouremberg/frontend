import React, { useState } from 'react';
import {
    DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const Sidebar = ({ children }) => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

    return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <br></br>
        <Menu onClick={({key}) => {
          navigate(key)
        }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '/dashboard',
              icon: <DashboardOutlined />,
              label: 'Inicio',

            },
            {
              key: '/login',
              icon: <UserOutlined />,
              danger: true,
              label: 'Signout',
            },
          ]}
        />
      </Sider>
      <Layout >
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          { children }
        </Content>
      </Layout>
    </Layout>
    )
}

export default Sidebar
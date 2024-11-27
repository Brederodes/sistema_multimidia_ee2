import React from 'react';
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Button,
  Drawer,
  Dropdown,
} from 'antd';

import { MenuOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [drawerVisible, setDrawerVisible] = React.useState(false);

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const menuItems = [
    { key: '1', label: 'Inicio' },
    { key: '2', label: 'Servicios' },
    { key: '3', label: 'Educación Financiera' },
    { key: '4', label: 'Contacto' },
  ];

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 16px',
          backgroundColor: '#003366',
          color: '#fff',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '18px',
            color: '#fff',
          }}
        >
          Mi Banxico
        </div>

        {/* Desktop Menu */}
        <div
          className="desktop-menu"
          style={{
            display: 'flex',
          }}
        >
          <Menu
            theme="dark"
            mode="horizontal"
            items={menuItems}
            style={{
              backgroundColor: 'transparent',
              borderBottom: 'none',
            }}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className="mobile-menu"
          style={{
            display: 'none',
          }}
        >
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            style={{
              backgroundColor: '#003366',
              border: 'none',
            }}
          />
          <Drawer
            title="Menu"
            placement="right"
            closable={true}
            onClose={closeDrawer}
            open={drawerVisible} // Updated prop
          >
            <Menu
              mode="vertical"
              items={menuItems.map((item) => ({
                key: item.key,
                label: <a href={`#${item.label.toLowerCase()}`}>{item.label}</a>,
              }))}
            />
          </Drawer>
        </div>
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
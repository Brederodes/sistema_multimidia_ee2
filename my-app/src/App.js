import React from 'react';
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Button,
  FloatButton,
  Drawer,
  Dropdown,
} from 'antd';
import {
  QuestionCircleOutlined,
  SunOutlined,
  WifiOutlined,
  ThunderboltOutlined,
  BulbOutlined,
  GlobalOutlined,
} from '@ant-design/icons';

import { MenuOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [drawerVisible, setDrawerVisible] = React.useState(false);

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <div
      style={{
        backgroundImage: `url(/svgBackground.jpg)`, // Path relative to public folder
        backgroundSize: 'cover', // Cover entire page
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Do not repeat
        minHeight: '100vh', // Ensure it covers the full viewport height
        display: 'flex', // Make this container a flexbox
        flexDirection: 'column', // Stack children vertically
        justifyContent: 'space-between', // Push footer to the bottom
      }}
    >
      <Layout
        style={{
          backgroundColor: 'transparent',
        }}
      >
        <Header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 16px',
            backgroundColor: 'transparent',
            color: '#fff',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}
          >
            <img
              src="/ODS-11-Logo.png"
              alt="ODS 11 Logo"
              style={{
                height: '40px',
                objectFit: 'contain',
              }}
            />
            <span
              style={{
                color: 'green',
                fontSize: '18px',
                fontWeight: 'bold',
                marginRight: '8px', // Space between text and logo
              }}
            >
              ODS 11 - Cidades Sustentáveis
            </span>
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
              }}
            />
            <Drawer
              title="Menu"
              placement="right"
              closable={true}
              onClose={closeDrawer}
              open={drawerVisible} // Updated prop
            >
            </Drawer>
          </div>
        </Header>
        <Content
          style={{
            padding: '0 48px',
            backgroundColor: 'transparent',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
              backgroundColor: 'transparent',
            }}
          >
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              background: 'transparent',
              minHeight: 280,
              padding: 24,
            }}
          >
            Content
          </div>
          <FloatButton
            icon={<WifiOutlined />}
            type="primary"
            style={{
              right: 165,
              bottom: 560,
            }}
          />
          <FloatButton
            icon={<SunOutlined />}
            type="primary"
            style={{
              right: 1265,
              bottom: 165,
            }}
          />
          <FloatButton
            icon={<ThunderboltOutlined />}
            type="primary"
            style={{
              right: 555,
              bottom: 270,
            }}
          />
          <FloatButton
            icon={<BulbOutlined />}
            type="primary"
            style={{
              right: 1348,
              bottom: 645,
            }}
          />
          <FloatButton
            icon={<GlobalOutlined />}
            type="primary"
            style={{
              right: 1810,
              bottom: 400,
            }}
          />
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            backgroundColor: 'green',
            padding: '16px',
            color: '#fff',
          }}
        >
          Sistemas Multimídia 2024.2
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
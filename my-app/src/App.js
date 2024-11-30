import React from 'react';
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Button,
  FloatButton,
  Drawer,
  Modal,
} from 'antd';
import {
  SunOutlined,
  WifiOutlined,
  ThunderboltOutlined,
  GlobalOutlined,
  HomeOutlined,
} from '@ant-design/icons';

import { MenuOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [drawerVisible, setDrawerVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalContent, setModalContent] = React.useState('');

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const showModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const closeModal = () => setModalVisible(false);

  return (
    <>
      {/* Global styles */}
      <style>
        {`
          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
          }
          #root {
            height: 100%;
          }
        `}
      </style>
      <div
        style={{
          backgroundImage: `url(/background.jpg)`,
          backgroundSize: 'cover', // Cover the entire viewport
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat', // Do not repeat the image
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
                  marginRight: '8px',
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
                open={drawerVisible}
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
            {/* WiFi Button with Modal */}
            <FloatButton
              icon={<WifiOutlined />}
              type="primary"
              style={{
                right: 165,
                bottom: 560,
              }}
              onClick={() => showModal('WiFi is connected')}
            />

            {/* Sun Button with Modal */}
            <FloatButton
              icon={<SunOutlined />}
              type="primary"
              style={{
                right: 1200,
                bottom: 175,
              }}
              onClick={() => showModal('Enjoy the Sun!')}
            />

            {/* Home Button with Modal */}
            <FloatButton
              icon={<HomeOutlined />}
              type="primary"
              style={{
                right: 555,
                bottom: 270,
              }}
              onClick={() => showModal('Home Button Clicked')}
            />

            {/* Thunderbolt Button with Modal */}
            <FloatButton
              icon={<ThunderboltOutlined />}
              type="primary"
              style={{
                right: 1295,
                bottom: 645,
              }}
              onClick={() => showModal('Thunderstorm Warning!')}
            />

            {/* Global Button with Modal */}
            <FloatButton
              icon={<GlobalOutlined />}
              type="primary"
              style={{
                right: 1750,
                bottom: 400,
              }}
              onClick={() => showModal('Global Information')}
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

        {/* Modal Dialog */}
        <Modal
          title="Information"
          visible={modalVisible}
          onOk={closeModal}
          onCancel={closeModal}
        >
          <p>{modalContent}</p>
        </Modal>
      </div>
    </>
  );
};

export default App;

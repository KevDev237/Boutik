import React, { useState } from 'react';
import {
  HomeOutlined,
  UngroupOutlined,
  ProductOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import ShowProducts from './ShowProducts.jsx';
import ShowCategories from './ShowCategories.jsx';
import ShowSuppliers from './ShowSuppliers.jsx';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Nouveaux', 'navBtnNews', <HomeOutlined />),
  getItem('Produit', 'navBtnProduct', <ProductOutlined />),
  getItem('Categories', 'navBtnCategories', <UngroupOutlined />),
  getItem('Fournisseurs', 'navBtnSupplier', <UserOutlined />),
];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeKey, setActiveKey] = useState('navBtnNews'); // État pour suivre l'élément actif

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const renderContent = () => {
    switch (activeKey) {
      case 'navBtnProduct':
        return <ShowProducts />;
      case 'navBtnCategories':
        return <ShowCategories />;
      case 'navBtnSupplier':
        return <ShowSuppliers />;
      default:
        return <p>Bienvenue dans votre tableau de bord !</p>;
    }
  };

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['navBtnNews']}
          mode="inline"
          items={items}
          onClick={(e) => setActiveKey(e.key)} // Mettre à jour l'état actif
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Tableau de bord</Breadcrumb.Item>
            <Breadcrumb.Item>{items.find(item => item.key === activeKey)?.label}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent()} {/* Affichage dynamique basé sur l'état */}
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
    </Layout>
  );
};

export default Dashboard;

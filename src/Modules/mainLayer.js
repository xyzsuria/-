import React from 'react';
import { Layout, Flex } from 'antd';
import MyHeader from './myHeader';
import MyContent from './myContent';
import MyTail from './myTail';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 400,
  lineHeight: '120px',
  color: '#0958d9',
  backgroundColor: '#ffffff',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(80% - 8px)',
  maxWidth: 'calc(100% - 8px)',
};
const MyMainLayer = () => (
  <Flex gap="middle" wrap="wrap">
    <Layout style={layoutStyle}>
      {/* <Header style={headerStyle}>Header</Header> */}
      <MyHeader style={headerStyle}>Header</MyHeader>
      <MyContent style={contentStyle}>Content</MyContent>
      <MyTail style={footerStyle}>Footer</MyTail>
    </Layout>
  </Flex>
);
export default MyMainLayer;
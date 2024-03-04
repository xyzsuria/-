import React from 'react';
import { Layout, Flex,Divider } from 'antd';
import MyHeader from './myHeader';
import MyContent from './myContent';
import MyTail from './myTail';
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  paddingInline: 48,
  lineHeight: '64px',
  // backgroundColor: '#4096ff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 400,
  lineHeight: '120px',
  // color: '#0958d9',
  // backgroundColor: '#ffffff',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  // backgroundColor: '#4096ff',
  borderRadius: 8,

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
      <Divider dashed="true"style={{ margin: "8px 0", width: "50%" }} />
      <MyContent style={contentStyle}>Content</MyContent>
      <Divider dashed="true" style={{ margin: "8px 0", width: "50%" }} />
      <MyTail style={footerStyle}>Footer</MyTail>
    </Layout>
  </Flex>
);
export default MyMainLayer;
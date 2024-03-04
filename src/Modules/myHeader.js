import React from 'react';
import { Typography,Layout, Flex,Divider } from 'antd';
import MyLeftTopComponent from './myLeftTopComponent';
import MyRightTopComponent from './myRightTopComponent';
const { Sider, Content } = Layout;
const { Title } = Typography;
const contentStyle = {
  textAlign: 'center',
  minHeight: 170,
  lineHeight: '120px',
  // color: '#0958d9',
  // backgroundColor: '#0958d9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#ffffff',
};
const MyHeader = () => (
  <Flex gap="middle" wrap="wrap">
      <Layout>
        <Sider width="35%" style={siderStyle}>
          <MyLeftTopComponent></MyLeftTopComponent>
        </Sider>
        <Divider type="vertical" dashed="true"/>
        <Content style={contentStyle}>
            <Title level={2} style={{ color: 'black' }}>基于地址标签的终端身份认证</Title>
        </Content>
        <Divider type="vertical" dashed="true"/>
        <Sider width="35%" style={siderStyle}>
          <MyRightTopComponent></MyRightTopComponent>
        </Sider>        
      </Layout>
  </Flex>
);
export default MyHeader;
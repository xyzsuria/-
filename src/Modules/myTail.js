import React from 'react';
import {  Typography,Layout, Flex } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const contentStyle = {
  textAlign: 'center',
  minHeight: 170,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};
const MyTail = () => (
  <Flex gap="middle" wrap="wrap">
      <Layout>
        <Sider width="35%" style={siderStyle}>
         相关数据展示
        </Sider>
        <Content style={contentStyle}>
            <Title level={3} style={{ color: 'white' }}>非协作网络分布式共识网络基础设施</Title>
        </Content>
        <Sider width="35%" style={siderStyle}>
          相关数据展示
        </Sider>        
      </Layout>
  </Flex>
);
export default MyTail;
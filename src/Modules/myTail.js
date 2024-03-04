import React from 'react';
import {  Typography,Layout, Flex,Divider } from 'antd';
const { Sider, Content } = Layout;
const { Title } = Typography;
const contentStyle = {
  textAlign: 'center',
  minHeight: 170,
  lineHeight: '120px',
  color: 'black',
  backgroundColor: 'white',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: 'black',
  backgroundColor: 'white',
};
const MyTail = () => (
  <Flex gap="middle" wrap="wrap">
      <Layout>
        <Sider width="35%" style={siderStyle}>
         相关数据展示
        </Sider>
        <Divider type="vertical" dashed="true"/>
        <Content style={contentStyle}>
            <Title level={3} style={{ color: 'black' }}>非协作网络分布式共识网络基础设施</Title>
        </Content>
        <Divider type="vertical" dashed="true"/>
        <Sider width="35%" style={siderStyle}>
          相关数据展示
        </Sider>        
      </Layout>
  </Flex>
);
export default MyTail;
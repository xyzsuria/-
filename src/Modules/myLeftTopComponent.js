import React from 'react';
import { Badge, Descriptions } from 'antd';
const items = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Billing Mode',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Automatic Renewal',
    children: 'YES',
  }
];
const MyLeftTopComponent = () => <Descriptions title="身份标识生成地址标签完成终端身份认证" layout="vertical" bordered items={items} />;
export default MyLeftTopComponent;
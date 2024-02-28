import React from 'react';
import { Table } from 'antd';
const columns1 = [
  {
    title: '路径验证',
    children: [
      {
        title: '数据1',
        key: 'data1',
        dataIndex:"data1"
      },
      {
        title: '数据2',
        key: 'data2',
        dataIndex:"data2"
      }]
  },
];
const data1 = [
    {
        data1:"xx",
        data2:"yy",
    },
    {
        data1:"cc",
        data2:"zz",
    }
];

const columns2 = [
    {
      title: '路径验证',
      children: [
        {
          title: '数据1',
          key: 'data1',
          dataIndex:"data1"
        },
        {
          title: '数据2',
          key: 'data2',
          dataIndex:"data2"
        }]
    },
  ];
const data2 = [
    {
        data1:"a",
        data2:"b",
    },
    {
        data1:"c",
        data2:"d",
    }
];
const MyLeftMiddleComponent = () => (
    <div>
        <Table
            columns={columns1}
            dataSource={data1}
            pagination={false}
            bordered={true}
        />
        <Table
            columns={columns2}
            dataSource={data2}
            pagination={false}
            bordered={true}
        />
    </div>

  
);
export default MyLeftMiddleComponent;
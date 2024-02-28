import React from 'react';
import { Card,Button,Flex } from 'antd';
import myImage from "./图片.png"
const MyMiddleContent = () => (
    <div>
        <Card style={{backgroundImage:`url(${myImage})`,
                    backgroundSize: 'cover',
                    width:'800px',
                    height: '400px', // 根据实际需要调整高度
            }}>

        </Card>
        <Flex gap="small" wrap="wrap">
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
        </Flex>
    </div>

);
export default MyMiddleContent;
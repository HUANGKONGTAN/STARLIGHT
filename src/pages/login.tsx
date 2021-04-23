import styles from '@/less/login.less';
import React, { useState } from 'react';
import { Form, Input, Button, Space } from 'antd';
import { Link } from 'umi';
import { history } from 'umi';

export default function LoginForm() {

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  function goLogin() {
    history.push('/');
  }

  function goRegister() {
    history.push('/register');
  }

  return (
    <div className={styles.form}>
      
      <Form className={styles.loginForm}
      {...layout}
      >
        <Form.Item 
        {...tailLayout}
        >
          <h1>欢乐时光要结束了。</h1>
        </Form.Item>

        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input className={styles.input}/>
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password className={styles.input}/>
        </Form.Item>

        <Form.Item {...tailLayout} >
          <Space size={'middle'}>
            <Button type="primary"  onClick={goLogin}>
              登陆
            </Button>

            <Button onClick={goRegister} >
              注册
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

import styles from '@/less/login.less';
import React, { useState } from 'react';
import { Form, Input, Button, Space, message } from 'antd';
import { history } from 'umi';
import { InsertUser } from '@/api/user'

export default function LoginForm() {

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values: any) => {
    InsertUser(values).then(response=>{
      if (typeof response === 'object' && response !== null){
        let status = (response as any).data.status
        if ( status === 200) {
          history.push('/home');
        } else if (status === 1002) {
          message.error('密码错误！');
        }else if (status === 1003) {
          message.error('用户名不存在！');
        }
      }
    }, error=> {
      message.error('不对劲！');
    })
  }

  return (
    <div className={styles.form}>
      
      <Form className={styles.loginForm}
      {...layout}
      onFinish={onFinish}
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

        <Form.Item
          label="昵称"
          name="nickname"
        >
          <Input className={styles.input}/>
        </Form.Item>

        <Form.Item {...tailLayout} >
            <Button type="primary" htmlType="submit" >
              注册
            </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

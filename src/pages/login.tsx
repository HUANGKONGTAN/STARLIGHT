import styles from '@/less/login.less';
import React, { useState } from 'react';
import { Form, Input, Button, Space, message } from 'antd';
import { history } from 'umi';
import { verifyUser } from '@/api/user'

export default function LoginForm() {

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const titleLayout = {
    wrapperCol: { offset: 7, span: 16 },
  };

  const buttonGroupLayout = {
    wrapperCol: { offset: 10, span: 16 },
  };

  const onFinish = (values: any) => {
    verifyUser(values).then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        if ( data.status === 200) {
          console.log(data.data.UserName)
          window.localStorage.setItem("username", data.data.UserName)
          history.push('/admin/home');
        } else if (data.status === 1002) {
          message.error('密码错误！');
        }else if (data.status === 1003) {
          message.error('用户名不存在！');
        }
      }
    }, error=> {
      message.error('不对劲！');
    })
  }

  const goRegister = () => {
    history.push('/register');
  }

  return (
    <div className={styles.form}>
      
      <Form className={styles.loginForm}
      {...layout}
      onFinish={onFinish}
      >
        <Form.Item 
        {...titleLayout}
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

        <Form.Item {...buttonGroupLayout} >
          <Space size={'middle'}>
            <Button type="primary" htmlType="submit">
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

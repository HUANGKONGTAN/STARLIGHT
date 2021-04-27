import { Table, Button, Dropdown, Menu, Input } from 'antd';
import { useEffect, useState } from 'react';
import { getArticleList } from '@/api/article';
import { DownOutlined, EllipsisOutlined } from '@ant-design/icons';
import styles from '@/less/admin/articles.less'

export default function AdminArticles() {

  const [articleList, setArticleList] = useState([])

  const [total, setTotal] = useState(0)

  useEffect(() => {
    getArticleList({}).then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        setArticleList(data.data)
        setTotal(data.total)
      }
    })
  }, []);

  const menu = (
    <Menu>
      <Menu.Item key="1" className={styles.menuItem} onClick={}>
        预览
      </Menu.Item>
      <Menu.Item key="2" className={styles.menuItem}>
        编辑
      </Menu.Item>
      <Menu.Item key="3" className={styles.menuItem}>
        删除
      </Menu.Item>
    </Menu>
  );

  const columns= [
    {
      title: '标题',
      width: 200,
      align: 'center',
      dataIndex: 'Title',
      fixed: 'left'
    },
    // {
    //   title: '内容',
    //   dataIndex: 'Content',
    // },
    {
      title: '频道',
      align: 'center',
      width: 150,
      dataIndex: 'Channel',
    },
    {
      title: '阅读量',
      align: 'center',
      width: 100,
      dataIndex: 'ReadAmount',
    },
    
    {
      title: '点赞数',
      align: 'center',
      width: 100,
      dataIndex: 'LikeAmount',
    },
    {
      title: '状态',
      align: 'center',
      dataIndex: 'Published',
    },
    {
      title: '操作',
      align: 'center',
      width: 260,
      fixed: 'right',
      key: 'operation',
      render: () => 
      <div>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button>            
              <EllipsisOutlined/>
              <DownOutlined />
            </Button>
          </Dropdown>
      </div>
    },
  ];

  return ( 
    <div className={styles.articlesTable}>
      <div className={styles.searchGroup}>
        <Input.Search allowClear style={{ width: '15%' }}/>
      </div> 
      <Table 
        rowClassName={styles.tableRow}
        bordered={true}
        columns={columns} 
        dataSource={articleList} 
        scroll={{ x: 1200, y: 400 }} 
        pagination={{ position: ['bottomCenter'], pageSize: 5}}
      />
    </div>
  );
}

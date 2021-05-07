import { Table, Button, Dropdown, Menu, Input, Modal, message, Space } from 'antd';
import { useEffect, useState } from 'react';
import { getArticle, getArticleList, deleteArticle } from '@/api/article';
import { DownOutlined, EllipsisOutlined } from '@ant-design/icons';
import styles from '@/less/admin/articles.less'
import { history } from 'umi'

function AdminArticles() {

  const [articleList, setArticleList] = useState([])

  const [total, setTotal] = useState(0)

  const [PreviewModalVisible, setPreviewModalVisible] = useState(false);

  const [DeleteModalVisible, setDeleteModalVisible] = useState(false);
 
  const [ArticleTitle, setArticleTitle] = useState("")

  const [ArticleContent, setArticleContent] = useState("")

  useEffect(() => {
    loadArticleList()
  }, []);

  const loadArticleList = () => {
    getArticleList({}).then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        setArticleList(data.data)
        setTotal(data.total)
      }
    })
  }

  const goPreview = (id:number) => {
    getArticle({id:id}).then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        if(data.data != null){
          setArticleTitle(data.data.Title)
          setArticleContent(data.data.Content)
          setPreviewModalVisible(true)
        }
      }
    })
  }

  const goEdit = (id:number) => {
    history.push(`/admin/article/edit/${id}`)
  }

  const goDelete = (id:number) => {
    Modal.confirm({
      title: null,
      content: '确认删除吗？',
      okText: '删除',
      cancelText: '取消',
      onOk: ()=>DeleteArticle(id)
    });
  }

  const DeleteArticle = (id:number) => {
    deleteArticle({id:id}).then(response=>{
      if((response as any).data.status === 200){
        message.success('删除成功！');
        loadArticleList();
      }
    })
  }

  const menu = (record:any) => (
    <Menu>
      <Menu.Item key="1" className={styles.menuItem} onClick={()=>goPreview(record.ID)}>
        预览
      </Menu.Item>
      <Menu.Item key="2" className={styles.menuItem} onClick={()=>goEdit(record.ID)}>
        编辑
      </Menu.Item>
      <Menu.Item key="3" className={styles.menuItem} onClick={()=>goDelete(record.ID)}>
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
      render: (text: any, record: any) => 
      <div>
          <Dropdown overlay={menu(record)} trigger={["click"]}>
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
        <Input.Search allowClear style={{ width: '25%' }}/>
      </div> 
      <Table 
        rowClassName={styles.tableRow}
        bordered={true}
        columns={columns} 
        dataSource={articleList} 
        scroll={{ x: 1200, y: 400 }} 
        pagination={{ position: ['bottomCenter'], pageSize: 5}}
        rowKey={record => (record as any).ID}
      />
      <Modal 
        visible={PreviewModalVisible} 
        closable={true} footer={null} 
        onCancel={()=> setPreviewModalVisible(false)}
      > 
        <div className={styles.preview}>
          <h1>{ArticleTitle}</h1>
          <p>{ArticleContent}</p>
        </div>
      </Modal>
    </div>
  );
}

AdminArticles.wrappers = ['@/pages/wrappers/auth']

export default AdminArticles
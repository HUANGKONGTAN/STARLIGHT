import { Table, Button, Dropdown, Menu, Input, Modal, message, Space } from 'antd';
import { useEffect, useState } from 'react';
import { getSundry, getSundryList, deleteSundry } from '@/api/sundry';
import { DownOutlined, EllipsisOutlined } from '@ant-design/icons';
import styles from '@/less/admin/article/articles.less'
import { history } from 'umi'

function AdminSundries() {

  const [sundryList, setSundryList] = useState([])

  const [total, setTotal] = useState(0)

  const [PreviewModalVisible, setPreviewModalVisible] = useState(false);

  const [SundryTitle, setSundryTitle] = useState("")

  const [SundryContent, setSundryContent] = useState("")

  useEffect(() => {
    loadArticleList()
  }, []);

  const loadArticleList = () => {
    getSundryList({}).then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        setSundryList(data.data)
        setTotal(data.total)
      }
    })
  }

  const goPreview = (id:number) => {
    getSundry({id:id}).then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        if(data.data != null){
          setSundryTitle(data.data.Title)
          setSundryContent(data.data.Content)
          setPreviewModalVisible(true)
        }
      }
    })
  }

  const goEdit = (id:number) => {
    history.push(`/admin/sundry/edit/${id}`)
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
    deleteSundry({id:id}).then(response=>{
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
        dataSource={sundryList} 
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
          <h1>{SundryTitle}</h1>
          <p>{SundryContent}</p>
        </div>
      </Modal>
    </div>
  );
}

AdminSundries.wrappers = ['@/pages/wrappers/auth']

export default AdminSundries
import { Table, Button, Dropdown, Menu, Input, Modal, message, Space } from 'antd';
import { useEffect, useState } from 'react';
import { getMusicList, deleteMusic } from '@/api/music';
import styles from '@/less/admin/article/articles.less'
import { history } from 'umi'

function AdminMusics() {

  const [musicList, setMusicList] = useState([])

  const [total, setTotal] = useState(0)

  useEffect(() => {
    loadMusicList()
  }, []);

  const loadMusicList = () => {
    getMusicList({}).then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        setMusicList(data.data)
        setTotal(data.total)
      }
    })
  }

  const goEdit = (id:number) => {
    history.push(`/admin/music/edit/${id}`)
  }

  const goDelete = (id:number) => {
    Modal.confirm({
      title: null,
      content: '确认删除吗？',
      okText: '删除',
      cancelText: '取消',
      onOk: ()=>DeleteMusic(id)
    });
  }

  const DeleteMusic = (id:number) => {
    deleteMusic({id:id}).then(response=>{
      if((response as any).data.status === 200){
        message.success('删除成功！');
        loadMusicList();
      }
    })
  }

  const menu = (record:any) => (
    <Menu>
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
      title: '歌词',
      align: 'center',
      width: 350,
      dataIndex: 'Lyric',
    },
    {
      title: '名称',
      width: 200,
      align: 'center',
      dataIndex: 'Name',
    },
    {
      title: '原唱',
      align: 'center',
      width: 100,
      dataIndex: 'Singer',
    },
    // {
    //   title: '操作',
    //   align: 'center',
    //   width: 50,
    //   key: 'operation',
    //   render: (text: any, record: any) => 
    //   <div>
    //       <Dropdown overlay={menu(record)} trigger={["click"]}>
    //         <Button>       
    //           <EllipsisOutlined/>
    //           <DownOutlined />
    //         </Button>
    //       </Dropdown>
    //   </div>
    // },
  ];

  return ( 
    <div className={styles.articlesTable}>
      {/* <div className={styles.searchGroup}>
        <Input.Search allowClear style={{ width: '25%' }}/>
      </div>  */}
      <Table 
        rowClassName={styles.tableRow}
        bordered={true}
        columns={columns} 
        dataSource={musicList} 
        pagination={{ position: ['bottomCenter'], pageSize: 5}}
        rowKey={record => (record as any).ID}
      />
    </div>
  );
}

AdminMusics.wrappers = ['@/pages/wrappers/auth']

export default AdminMusics
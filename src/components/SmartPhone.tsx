import { Table } from "antd";
import { useTable } from "../hooks/useTable";
  
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
];


function SmartPhone() {
  const { dataSource, setPage } = useTable({
    url: 'https://jsonplaceholder.typicode.com/todos'
  });

  return (
    <Table 
      dataSource={dataSource} 
      columns={columns} 
      pagination={{
        total: 100,
        onChange: (page: number, pageSize: number) => {
          setPage(page)
        },
        onShowSizeChange: (current: number, size: number) => {
          console.log('onShowSizeChange: ', current, size)
        }
      }}
    
    />
  )
}

export default SmartPhone
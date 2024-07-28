import React from 'react';
import { ISmartPhone } from '../types/app';

type IProps = {
  url: string
}

export const useTable = ({ url }: IProps) => {
  const [dataSource, setDataSource] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${url}?_limit=3&_page=${page}`)
      const data = await res.json();
      const result = data.map((item: ISmartPhone, index: number) => {
        return {
          ...item,
          key: index
        }
      })
      setDataSource(result);
    }
    fetchData();
  }, [page])

  return {
    dataSource,
    setPage
  }
}
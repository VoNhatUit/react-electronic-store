import React from 'react';
import { ISmartPhone } from '../types/app';

type IProps = {
  url: string
}

export const useTable = ({ url }: IProps) => {
  const [dataSource, setDataSource] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${url}?limit=${limit}&page=${page + 1}`)
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
  }, [page, limit])

  return {
    dataSource,
    page,
    limit,
    setPage,
    setLimit,
  }
}
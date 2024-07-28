import { Tabs } from 'antd';
import type { TabsProps } from 'antd'
import SmartPhone from './components/SmartPhone';
import Laptop from './components/Laptop';
import Fragrances from './components/Fragrances';

function App() {

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Smartphone',
      children: <SmartPhone />
    },
    {
      key: '2',
      label: 'Laptop',
      children: <Laptop />
    },
    {
      key: '3',
      label: 'Fragrances',
      children: <Fragrances />
    },
  ];

  return (
    <div className="mx-auto w-[768px] max-w-full">
      <h1 className="text-[29px] text-center">Electric Store</h1>

      <Tabs defaultActiveKey="1" items={items} />
    </div>
  )
}

export default App

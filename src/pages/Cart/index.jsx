import React from 'react';
import { List } from "antd"
import GoosItem from './goosItem';
import Footer from './footer';
import { useChecked } from "./useChecked"//自定义hooks就是函数啊

//初始化商品数据
const dataList = Array(6).fill(undefined).map((item, index) => ({ name: `商品${index + 1}`, id: index, price: Math.round(Math.random() * 1000) }));

const Index = () => {
  const {
    checkeData,
    isAll,
    check,
    checkAll,
  } = useChecked(dataList)

  const sum = () => {
    return Object.keys(checkeData).reduce((prev, item) => (checkeData[item] ? prev += dataList[item].price : prev + 0), 0)
  }

  return (
    <div>
      <List
        dataSource={dataList}
        renderItem={(item) => {
          const checked = checkeData[item.id] || false;
          return <GoosItem item={item} checked={checked} id={item.id} check={check} />
        }}
      />
      <Footer isAll={isAll} checkAll={checkAll} total={sum()} />
    </div>
  );
}

export default Index;

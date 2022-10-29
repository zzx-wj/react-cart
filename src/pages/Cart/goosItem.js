import React, { useMemo } from 'react';
import { List, Radio, Space, Checkbox } from "antd"

//使用memo优化；
const isEqual = (prevProps, nextProps) => {
  return prevProps.checked === nextProps.checked
}
const GoosItem = React.memo((props) => {
  // 
  console.log('item render');
  const { item, checked, id, check } = props

  const handleChoose = (e) => {
    check(id, e.target.checked)
  }
  return (
    <List.Item>
      <Checkbox onChange={handleChoose} checked={checked} />
      <Space>
        {item.name}
        {item.price}
      </Space>

    </List.Item>
  );
}, isEqual)

export default GoosItem;

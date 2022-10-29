import React from 'react';
import { List, Radio, Space, Checkbox } from "antd"
const Footer = (props) => {
  const { isAll, checkAll, total } = props
  const handleChoice = (e) => {
    checkAll(e.target.checked)
  }
  return (
    <div>
      <Space>
        <Checkbox checked={isAll} onChange={handleChoice} />
        <span>商品总价是：{total}元</span>
      </Space>
    </div>
  );
}

export default Footer;

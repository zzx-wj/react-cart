import { useReducer, useCallback, useMemo } from "react"
//商品列表 dataSource

export const useChecked = (dataSource) => {
  //数据管理
  // checkeData 形如{[id]:true}
  const [checkeData = [], dispatch] = useReducer((checkeData, action) => {
    switch (action.type) {
      case 'changeone': {
        const { payload } = action
        const { id, checked } = payload;
        return {
          ...checkeData,
          [id]: checked,
        }
      }
      case 'setCheckAll': {
        const all = dataSource.map(item => ({
          [item.id]: true,
        }))
        return {
          ...all
        }
      }
      case 'cancelChengeAll': {
        return {}
      }
      default:
        return checkeData
    }
  })
  //改变单选状态
  const check = (id, checked) => {
    dispatch({
      type: "changeone",
      payload: {
        id,
        checked
      }
    })
  }
  //需要在单选的时候判断是否选中了所有的数据  即此时===全选
  const isAll = Object.keys(checkeData).filter(item => checkeData[item])?.length === Object.keys(dataSource).length ? true : false

  // 全选
  const checkAll = (statue) => {
    if (statue) {
      setCheckAll()
    } else {
      cancelCheckAll()
    }
  }
  // 取消全选
  const setCheckAll = () => {
    dispatch({
      type: 'setCheckAll',
    })
  }
  // 取消全选
  const cancelCheckAll = () => {
    dispatch({
      type: 'cancelChengeAll',
    })
  }


  return {
    checkeData,
    isAll,
    check,
    checkAll,
    cancelCheckAll,
  }
}
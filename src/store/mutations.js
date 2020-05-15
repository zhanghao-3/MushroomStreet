export const mutations = {
  addCount(state,payload){
    payload.count++
  },
  addGoods(state,payload){
      payload.count = 1
      payload.isChecked = true
      state.cartList.push(payload)
  },
  // 点击商品选择按钮
  changeChecked(state,payload){
    state.cartList[payload].isChecked = !state.cartList[payload].isChecked
  },
  // 点击全选按钮
  
  addFalse(state,payload){
    state.cartList.forEach(item => {
      item.isChecked = false
    })
  },
  addTrue(state,payload){
    state.cartList.forEach(item => {
      item.isChecked = true
    })
  }

  
}
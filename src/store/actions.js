export const actions = {
  addCart(context,payload){
    return new Promise((solve,reject) => {
      let cartinfo1 = context.state.cartList.find((item) => item.iid === payload.iid)
      if(cartinfo1){
        context.commit('addCount',cartinfo1)
        solve('再次添加购物车成功')
      }else{
        context.commit('addGoods',payload)
        solve('成功添加购物车')
      }
    })
  }
}
import {request} from './request'

export function getDetailData(iid){
  return request ({
    url:'/data/detail/' + iid + '.json'
  })
}

export class GoodsInfo{
  constructor(columns,itemInfo,shopInfo){
    this.title = itemInfo.title
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = shopInfo.services

  }
}
// let goodsinfo = new GoodsInfo()
import { request } from './request'

export function getCategoryData(){
  return request({
    url:'/data/category/category.json'
  })
}

export function getCateGoodsData(page){
  return request({
    url:'/data/category/subcategory/' + page + '.json'
  })
}